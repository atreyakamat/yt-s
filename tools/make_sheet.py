#!/usr/bin/env python3
"""Build publishing/Cutaway-reels.xlsx from publishing/reels.json (made by `node video/tools/sheet.mjs`).

    cd video && node tools/sheet.mjs && cd .. && python tools/make_sheet.py

Sheets: "How to use" (legend + example), "Reels" (one row per reel: publishing text, optimisation check,
yellow columns for you to fill in after posting), "Series summary" (formulas that compare the series).
If the .xlsx already exists, anything you typed in the yellow columns is kept (matched by Reel ID).
"""
import json
from pathlib import Path

from openpyxl import Workbook, load_workbook
from openpyxl.comments import Comment
from openpyxl.formatting.rule import CellIsRule, ColorScaleRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "publishing" / "reels.json"
OUT = ROOT / "publishing" / "Cutaway-reels.xlsx"

FONT = "Arial"
HEAD_FILL = PatternFill("solid", fgColor="1F2937")
INPUT_FILL = PatternFill("solid", fgColor="FFF59D")  # yellow = you fill this in
CALC_FILL = PatternFill("solid", fgColor="E5E7EB")  # grey = formula, don't type here
THIN = Side(style="thin", color="D1D5DB")
BORDER = Border(bottom=THIN)

# Columns you fill in after posting (kept between rebuilds).
INPUTS = [
    ("Posted date", 13, "yyyy-mm-dd", "Date you posted it"),
    ("YouTube URL", 30, None, "Link to the Short"),
    ("Views (48h)", 12, "#,##0", "Views 48 hours after posting"),
    ("Viewed vs swiped", 13, "0%", "YouTube Studio > Short > 'Viewed vs swiped away'. Type 72% or 0.72"),
    ("Avg % viewed", 12, "0%", "YouTube Studio > Average percentage viewed. Over 100% means people re-watched"),
    ("Likes", 9, "#,##0", None),
    ("Comments", 10, "#,##0", None),
    ("Subs gained", 10, "#,##0", "Subscribers gained from this Short"),
    ("Re-upload with backup hook?", 14, None, "Y if it stalled (under 60% viewed vs swiped after 48h)"),
    ("Your notes", 40, None, "Anything: what worked, ideas, comment requests"),
]
# Columns computed by formulas from your inputs.
CALCS = [("Engagement", 12, "0.0%"), ("Hook verdict", 20, None)]

WIDTHS = {
    "Posting #": 8, "Reel ID": 10, "Batch": 9, "Series": 22, "Topic": 24, "Title": 46, "Title length": 8,
    "Description": 60, "Hashtags": 34, "Pinned comment": 30, "Hook (first line)": 40, "Backup hook 1": 34,
    "Backup hook 2": 34, "Backup hook 3": 34, "Length (s)": 8, "Music": 14, "Source links": 8, "Ready score": 8,
    "Optimisation needed": 60, "Rendered": 11, "Video file": 26, "Script file": 34,
}
WRAP = {"Title", "Description", "Hook (first line)", "Optimisation needed", "Backup hook 1", "Backup hook 2", "Backup hook 3", "Your notes", "Pinned comment"}


def head(cell, fill=HEAD_FILL, color="FFFFFF"):
    cell.font = Font(name=FONT, bold=True, color=color)
    cell.fill = fill
    cell.alignment = Alignment(wrap_text=True, vertical="center")


def main():
    rows = json.loads(SRC.read_text(encoding="utf-8"))
    base_cols = list(rows[0].keys())

    # Keep what the owner already typed in the yellow columns.
    kept = {}
    if OUT.exists():
        old = load_workbook(OUT)["Reels"]
        hdr = [c.value for c in old[1]]
        if "Reel ID" in hdr:
            idc = hdr.index("Reel ID")
            for r in old.iter_rows(min_row=2, values_only=True):
                vals = {h: r[i] for i, h in enumerate(hdr) if h in {n for n, *_ in INPUTS} and r[i] not in (None, "")}
                if r[idc] and vals:
                    kept[r[idc]] = vals

    wb = Workbook()

    # ── How to use ──
    hw = wb.active
    hw.title = "How to use"
    lines = [
        ("Cutaway publishing sheet", True),
        ("One row per reel, in posting order. Rebuild it any time with:  cd video; node tools/sheet.mjs; cd ..; python tools/make_sheet.py", False),
        ("What you type in the yellow columns is kept when the sheet is rebuilt.", False),
        ("", False),
        ("Colours", True),
        ("White columns: publishing text made from the scripts. Copy Title, Description and Pinned comment straight into YouTube.", False),
        ("Yellow columns: you fill these in after posting (date, link, stats, notes).", False),
        ("Grey columns: formulas. Don't type in them.", False),
        ("", False),
        ("Key columns", True),
        ("Ready score (0-100): an automatic check of the title, description, hashtags, length and sources. 100 = nothing to improve.", False),
        ("Optimisation needed: exactly what to change before posting. Fix it in the script (Script file column) or just in YouTube.", False),
        ("Viewed vs swiped: the hook score from YouTube Studio. Target 70%+. Under 60% after 48h: re-upload a week later with a backup hook.", False),
        ("Hook verdict: worked out from Viewed vs swiped.", False),
        ("Series summary tab: compares the series once you've filled in stats. After about 8 posts per series, do more of the best one.", False),
        ("", False),
        ("Example of a filled-in row (yellow columns)", True),
    ]
    for i, (text, bold) in enumerate(lines, start=1):
        c = hw.cell(row=i, column=1, value=text)
        c.font = Font(name=FONT, bold=bold, size=14 if i == 1 else 11)
    ex_row = len(lines) + 1
    example = ["2026-11-12", "https://youtube.com/shorts/abc123", 4210, 0.74, 0.96, 312, 18, 9, "N", "Hook worked; comments asked for padlocks"]
    for j, ((name, w, fmt, _), val) in enumerate(zip(INPUTS, example), start=1):
        h = hw.cell(row=ex_row, column=j, value=name)
        head(h, INPUT_FILL, "000000")
        c = hw.cell(row=ex_row + 1, column=j, value=val)
        c.font = Font(name=FONT)
        if fmt:
            c.number_format = fmt
        hw.column_dimensions[get_column_letter(j)].width = max(w, 14)
    hw.column_dimensions["A"].width = 110

    # ── Reels ──
    ws = wb.create_sheet("Reels")
    headers = base_cols + [n for n, *_ in INPUTS] + [n for n, *_ in CALCS]
    col = {h: i + 1 for i, h in enumerate(headers)}
    L = {h: get_column_letter(i) for h, i in col.items()}
    for h, i in col.items():
        c = ws.cell(row=1, column=i, value=h)
        if h in {n for n, *_ in INPUTS}:
            head(c, INPUT_FILL, "000000")
        elif h in {n for n, *_ in CALCS}:
            head(c, CALC_FILL, "000000")
        else:
            head(c)
    for n, w, fmt, note in INPUTS:
        if note:
            ws.cell(row=1, column=col[n]).comment = Comment(note, "Cutaway")
    ws.cell(row=1, column=col["Ready score"]).comment = Comment("Automatic check: 100 = nothing to improve. See 'Optimisation needed'.", "Cutaway")

    body = Font(name=FONT, size=10)
    for r, row in enumerate(rows, start=2):
        for h in base_cols:
            c = ws.cell(row=r, column=col[h], value=row[h])
            c.font = body
            c.border = BORDER
            c.alignment = Alignment(wrap_text=h in WRAP, vertical="top")
        old = kept.get(row["Reel ID"], {})
        for n, w, fmt, _ in INPUTS:
            c = ws.cell(row=r, column=col[n], value=old.get(n))
            c.fill = INPUT_FILL
            c.font = body
            c.alignment = Alignment(wrap_text=n == "Your notes", vertical="top")
            if fmt:
                c.number_format = fmt
        views, likes, comments, swiped = (f"{L[x]}{r}" for x in ("Views (48h)", "Likes", "Comments", "Viewed vs swiped"))
        e = ws.cell(row=r, column=col["Engagement"], value=f'=IF(N({views})>0,(N({likes})+N({comments}))/{views},"")')
        e.number_format = "0.0%"
        hv = ws.cell(
            row=r,
            column=col["Hook verdict"],
            value=f'=IF({swiped}="","",IF({swiped}>=0.7,"Strong hook",IF({swiped}>=0.6,"OK","Re-hook with a backup")))',
        )
        for c in (e, hv):
            c.fill = CALC_FILL
            c.font = body
            c.alignment = Alignment(vertical="top")

    last = len(rows) + 1
    for h, i in col.items():
        w = WIDTHS.get(h) or next((w for n, w, *_ in INPUTS + CALCS if n == h), 14)
        ws.column_dimensions[get_column_letter(i)].width = w
    ws.row_dimensions[1].height = 34
    ws.freeze_panes = ws.cell(row=2, column=col["Title"])
    ws.auto_filter.ref = f"A1:{get_column_letter(len(headers))}{last}"

    # Ready score red → green; hook verdict colours.
    ws.conditional_formatting.add(
        f"{L['Ready score']}2:{L['Ready score']}{last}",
        ColorScaleRule(start_type="num", start_value=60, start_color="F87171", mid_type="num", mid_value=85, mid_color="FDE68A", end_type="num", end_value=100, end_color="86EFAC"),
    )
    rng = f"{L['Hook verdict']}2:{L['Hook verdict']}{last}"
    for text, color in (("Strong hook", "86EFAC"), ("OK", "FDE68A"), ("Re-hook with a backup", "F87171")):
        ws.conditional_formatting.add(rng, CellIsRule(operator="equal", formula=[f'"{text}"'], fill=PatternFill("solid", fgColor=color)))

    yn = DataValidation(type="list", formula1='"Y,N"', allow_blank=True)
    ws.add_data_validation(yn)
    yn.add(f"{L['Re-upload with backup hook?']}2:{L['Re-upload with backup hook?']}{last}")
    pct = DataValidation(type="decimal", operator="between", formula1="0", formula2="5", allow_blank=True)
    pct.error = "Type a percentage like 72% (or 0.72)"
    ws.add_data_validation(pct)
    for n in ("Viewed vs swiped", "Avg % viewed"):
        pct.add(f"{L[n]}2:{L[n]}{last}")

    # ── Series summary ──
    sm = wb.create_sheet("Series summary")
    cols = ["Series", "Reels", "Posted", "Avg viewed vs swiped", "Avg % viewed", "Avg views (48h)", "Avg engagement", "Subs gained", "Subs per 1,000 views"]
    for j, h in enumerate(cols, start=1):
        head(sm.cell(row=1, column=j, value=h))
        sm.column_dimensions[get_column_letter(j)].width = 22 if j == 1 else 16
    series = sorted({r["Series"] for r in rows}, key=lambda s: -sum(1 for r in rows if r["Series"] == s))
    R = "Reels!"
    S = f"{R}${L['Series']}$2:${L['Series']}${last}"
    rng_of = lambda name: f"{R}${L[name]}$2:${L[name]}${last}"  # noqa: E731
    for i, s in enumerate(series + ["All"], start=2):
        a = f"$A{i}"
        sm.cell(row=i, column=1, value=s).font = Font(name=FONT, bold=s == "All")
        crit = (lambda rng: f'{rng},"<>"') if s == "All" else (lambda rng: f"{S},{a}")
        f = {
            2: f"=COUNTA({rng_of('Reel ID')})" if s == "All" else f"=COUNTIF({S},{a})",
            3: f'=COUNTIFS({rng_of("Posted date")},"<>")' if s == "All" else f'=COUNTIFS({S},{a},{rng_of("Posted date")},"<>")',
            4: f'=IFERROR(AVERAGEIFS({rng_of("Viewed vs swiped")},{crit(rng_of("Viewed vs swiped"))}),"")',
            5: f'=IFERROR(AVERAGEIFS({rng_of("Avg % viewed")},{crit(rng_of("Avg % viewed"))}),"")',
            6: f'=IFERROR(AVERAGEIFS({rng_of("Views (48h)")},{crit(rng_of("Views (48h)"))}),"")',
            7: f'=IFERROR(AVERAGEIFS({rng_of("Engagement")},{crit(rng_of("Engagement"))}),"")',
            8: f"=SUM({rng_of('Subs gained')})" if s == "All" else f"=SUMIFS({rng_of('Subs gained')},{S},{a})",
            9: f'=IFERROR(H{i}/SUMIFS({rng_of("Views (48h)")},{crit(rng_of("Views (48h)"))})*1000,"")',
        }
        if s == "All":
            f[4] = f'=IFERROR(AVERAGE({rng_of("Viewed vs swiped")}),"")'
            f[5] = f'=IFERROR(AVERAGE({rng_of("Avg % viewed")}),"")'
            f[6] = f'=IFERROR(AVERAGE({rng_of("Views (48h)")}),"")'
            f[7] = f'=IFERROR(AVERAGE({rng_of("Engagement")}),"")'
            f[9] = f'=IFERROR(H{i}/SUM({rng_of("Views (48h)")})*1000,"")'
        for j, formula in f.items():
            c = sm.cell(row=i, column=j, value=formula)
            c.font = Font(name=FONT, bold=s == "All")
            c.number_format = {4: "0%", 5: "0%", 6: "#,##0", 7: "0.0%", 9: "0.0"}.get(j, "#,##0")
    note_row = len(series) + 4
    sm.cell(row=note_row, column=1, value="Fills in as you add stats on the Reels tab. Kill a series after 8 posts if it's last on all three: viewed vs swiped, avg % viewed and subs per 1,000 views (STRATEGY.md).").font = Font(name=FONT, italic=True)

    wb.move_sheet("Reels", offset=-1)
    wb.active = 0
    OUT.parent.mkdir(parents=True, exist_ok=True)
    wb.save(OUT)
    print(f"Wrote {OUT.relative_to(ROOT)}: {len(rows)} reels" + (f", kept your entries for {len(kept)} reels" if kept else ""))


if __name__ == "__main__":
    main()
