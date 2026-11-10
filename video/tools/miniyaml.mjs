// A tiny, dependency-free parser for the YAML subset our reel scripts use:
// `key: value` lines, one block list (`- at: 0` items), and inline { maps } / [ lists ].
// Used by tools/precheck.mjs so scripts can be checked before `npm install`.
// The real build (tools/sync.mjs) uses the full `yaml` package.

function parseFlow(src) {
  let i = 0;
  const ws = () => {
    while (i < src.length && /\s/.test(src[i])) i++;
  };
  const value = () => {
    ws();
    const c = src[i];
    if (c === "{") {
      i++;
      const obj = {};
      ws();
      if (src[i] === "}") {
        i++;
        return obj;
      }
      for (;;) {
        ws();
        let key = "";
        if (src[i] === '"' || src[i] === "'") key = String(value());
        else {
          while (i < src.length && src[i] !== ":") key += src[i++];
          key = key.trim();
        }
        ws();
        if (src[i] !== ":") throw new Error(`expected ':' after '${key}'`);
        i++;
        obj[key] = value();
        ws();
        if (src[i] === ",") {
          i++;
          continue;
        }
        if (src[i] === "}") {
          i++;
          return obj;
        }
        throw new Error(`expected ',' or '}' near "${src.slice(i, i + 20)}"`);
      }
    }
    if (c === "[") {
      i++;
      const arr = [];
      ws();
      if (src[i] === "]") {
        i++;
        return arr;
      }
      for (;;) {
        arr.push(value());
        ws();
        if (src[i] === ",") {
          i++;
          continue;
        }
        if (src[i] === "]") {
          i++;
          return arr;
        }
        throw new Error(`expected ',' or ']' near "${src.slice(i, i + 20)}"`);
      }
    }
    if (c === '"') {
      let j = i + 1;
      while (j < src.length && src[j] !== '"') j += src[j] === "\\" ? 2 : 1;
      if (j >= src.length) throw new Error("unclosed double quote");
      const s = JSON.parse(src.slice(i, j + 1));
      i = j + 1;
      return s;
    }
    if (c === "'") {
      let out = "";
      let j = i + 1;
      for (;;) {
        if (j >= src.length) throw new Error("unclosed single quote");
        if (src[j] === "'" && src[j + 1] === "'") {
          out += "'";
          j += 2;
        } else if (src[j] === "'") break;
        else out += src[j++];
      }
      i = j + 1;
      return out;
    }
    let raw = "";
    while (i < src.length && !",}]".includes(src[i])) raw += src[i++];
    return scalar(raw.trim());
  };
  const v = value();
  ws();
  if (i < src.length) throw new Error(`unexpected text "${src.slice(i, i + 20)}"`);
  return v;
}

function scalar(s) {
  if (s === "" || s === "~" || s === "null") return null;
  if (s === "true") return true;
  if (s === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
  // Real YAML would choke on (or misread) these in unquoted text: insist on quotes.
  if (/: /.test(s) || /^[&*!|>%@`]/.test(s)) throw new Error(`unquoted text needs "quotes": ${s}`);
  return s;
}

/** Remove a trailing `# comment` that is outside quotes. */
function stripComment(line) {
  let q = null;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) {
      if (c === "\\" && q === '"') i++;
      else if (c === q) q = null;
    } else if (c === '"' || c === "'") q = c;
    else if (c === "#" && (i === 0 || /\s/.test(line[i - 1]))) return line.slice(0, i);
  }
  return line;
}

const pair = (text, lineNo) => {
  const m = text.match(/^([A-Za-z_][\w-]*):(?:\s+(.*))?$/);
  if (!m) throw new Error(`line ${lineNo}: expected 'key: value', got "${text}"`);
  const rest = (m[2] ?? "").trim();
  try {
    if (rest === "") return [m[1], undefined];
    // Block-level plain text (e.g. `title: Before fridges, ice crossed oceans`) is one scalar.
    return [m[1], /^[[{"']/.test(rest) ? parseFlow(rest) : scalar(rest)];
  } catch (e) {
    throw new Error(`line ${lineNo} (${m[1]}): ${e.message}`);
  }
};

export function parse(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const root = {};
  let listKey = null;
  let current = null;
  let itemIndent = -1;
  lines.forEach((orig, n) => {
    const line = stripComment(orig).replace(/\s+$/, "");
    if (!line.trim()) return;
    const indent = line.length - line.trimStart().length;
    const body = line.trim();
    if (indent === 0) {
      const [k, v] = pair(body, n + 1);
      if (v === undefined) {
        root[k] = [];
        listKey = k;
      } else {
        root[k] = v;
        listKey = null;
      }
      current = null;
      return;
    }
    if (!listKey) throw new Error(`line ${n + 1}: unexpected indentation`);
    if (body.startsWith("- ")) {
      current = {};
      root[listKey].push(current);
      itemIndent = indent + 2;
      const [k, v] = pair(body.slice(2).trim(), n + 1);
      current[k] = v;
      return;
    }
    if (!current || indent !== itemIndent) throw new Error(`line ${n + 1}: bad indentation (expected ${itemIndent} spaces)`);
    const [k, v] = pair(body, n + 1);
    if (k in current) throw new Error(`line ${n + 1}: duplicate key '${k}'`);
    current[k] = v;
  });
  return root;
}
