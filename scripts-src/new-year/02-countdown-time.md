# series: new-year | group: countdown-and-time | accent: #64D2FF | music: investigations

## 1507 | How the Times Square ball drop works
hook: The Times Square ball falls for one minute. | FALLS FOR *ONE MINUTE* | num: 60 | seconds | ball
- The ball slides down a pole on top of One Times Square. | DOWN A *POLE* | hero: ball Ball
- It starts its descent at 11:59 pm. | STARTS AT *11:59* | hero: clock 11:59 pm
- The first ball dropped on New Year's Eve, 1907. | SINCE *1907* | num: 1907 | first drop | calendar
- Today's ball is covered in thousands of crystal triangles and LEDs. | CRYSTAL + *LEDs* | grid: ball Ball; lightbulb LEDs; sparkle Crystal
- It touches down right as the clock turns midnight. | LANDS AT *MIDNIGHT* | hero: bell Midnight
fact: Ball drop tradition began 1907; ball starts descent at 11:59 pm and takes 60 seconds. Check Times Square Alliance page for current ball specs before quoting size/weight.
alt: A one-minute drop watched by a million people.
alt: Why the ball is timed to the second.
tags: timessquare, newyear, traditions

## 1508 | Who sees the New Year first
hook: One place sees New Year before everyone. | THE *FIRST* PLACE | hero: globe First
- The Line Islands of Kiribati run on UTC plus 14. | UTC *+14* | num: +14 | hours ahead of UTC | clock
- That's the furthest-ahead time zone on Earth. | THE *FURTHEST* AHEAD | hero: globe Time zone
- The last places to hit midnight sit at UTC minus 12. | LAST: UTC *−12* | hero: wave Baker Island
- So the same new year takes 26 hours to travel around the world. | *26 HOURS* TO CIRCLE | num: 26 | hours | globe
- Someone is always celebrating, somewhere. | *ALWAYS* SOMEWHERE | hero: crowd Celebrating
fact: Kiribati Line Islands UTC+14 (first); Baker Island UTC-12 (last). The 26-hour spread is 14 + 12. Verify in timeanddate.com.
alt: Midnight reaches this island first.
alt: The New Year takes 26 hours to arrive.
tags: timezones, newyear, geography

## 1509 | Why we have leap years
hook: Leap years exist because Earth is late. | EARTH IS *LATE* | hero: globe Earth
- Earth takes about 365.24 days to orbit the Sun. | *365.24* DAYS | num: 365.24 | days per orbit | orbit
- A 365-day calendar loses almost six hours every year. | LOSES *6 HOURS* | hero: hourglass Lost time
- Add a day every fourth year and it mostly lines up. | ONE EXTRA DAY *EVERY 4* | flow: calendar 365; calendar 365; calendar 366
- Except centuries, which skip it, unless divisible by 400. | THE *400* RULE | timeline: calendar Every 4 years; cross Skip centuries; check Unless 400
- Without that, the seasons would slowly drift. | SEASONS *DRIFT* | hero: snowflake Seasons
fact: Tropical year ~365.2422 days. Gregorian rule: divisible by 4, except centuries unless divisible by 400.
alt: Your calendar has a bug fix every four years.
alt: 2100 will not be a leap year.
tags: leapyear, calendar, astronomy

## 1510 | How the second is defined
hook: One second is nine billion vibrations. | A SECOND = *9 BILLION* | num: 9,192,631,770 | cesium vibrations | atom
- Atomic clocks count the vibrations of cesium-133 atoms. | COUNTING *ATOMS* | hero: atom Cesium
- Exactly 9,192,631,770 of them make one second. | *EXACTLY* THAT MANY | hero: clock One second
- Atoms are better timekeepers than the spinning Earth. | BETTER THAN *EARTH* | pair: globe Earth; atom Atom
- Good atomic clocks lose about a second in hundreds of millions of years. | *HUNDREDS OF MILLIONS* | hero: hourglass Barely drifts
- That precision is why your phone knows the exact time. | WHY YOUR PHONE *KNOWS* | hero: phone Exact time
fact: SI second = 9,192,631,770 periods of the Cs-133 hyperfine transition. Best optical clocks are far better; cesium fountain clocks lose roughly a second per hundreds of millions of years (NIST).
alt: The second has a very strange definition.
alt: What counts a second for the whole planet.
tags: time, atomicclock, physics

## 1511 | The leap second
hook: Sometimes the world adds a secret extra second. | THE *EXTRA* SECOND | hero: clock 23:59:60
- Earth's spin is slightly irregular, so it drifts from atomic time. | EARTH *DRIFTS* | pair: globe Earth; atom Atomic clock
- So timekeepers occasionally add a leap second to UTC. | ADD *ONE SECOND* | hero: clock +1 s
- It lands at the end of a day, so the clock shows 23:59:60. | 23:59:*60* | hero: clock 23:59:60
- Twenty-seven have been added since 1972. | *27* SINCE 1972 | num: 27 | leap seconds | calendar
- Software hates them, so the world voted to phase them out by 2035. | PHASED OUT *BY 2035* | hero: chip Software
fact: 27 leap seconds inserted 1972-2016 (none since). The 2022 CGPM resolution aims to stop using them by or before 2035. Verify at IERS / BIPM.
alt: A minute with 61 seconds.
alt: Why programmers fear the leap second.
tags: time, leapsecond, tech

## 1512 | The Year 2038 problem
hook: Computers have a second Y2K coming. | A SECOND *Y2K* | hero: chip 2038
- Many systems store time as seconds since 1 January 1970. | SECONDS SINCE *1970* | hero: calendar 1970
- On older 32-bit systems, that number has a limit. | A *32-BIT* LIMIT | hero: chip 32-bit
- It runs out on 19 January 2038. | RUNS OUT *19 JAN 2038* | num: 2038 | the limit | hourglass
- After that, the clock wraps around to 1901. | WRAPS TO *1901* | hero: loop-arrow Wraps
- The fix is simple: 64-bit time, which lasts billions of years. | FIX: *64-BIT* | hero: check 64-bit
fact: Signed 32-bit time_t overflows at 03:14:07 UTC on 19 Jan 2038 and wraps to 13 Dec 1901. 64-bit time_t lasts ~292 billion years.
alt: Your old router might break in 2038.
alt: The day 32-bit time runs out.
tags: tech, y2k, programming

## 1513 | Why Y2K was a real problem
hook: Y2K was real, and people fixed it. | Y2K *WAS REAL* | hero: chip Y2K
- Old programs saved the year as just two digits. | *TWO DIGITS* ONLY | hero: list 99
- So 2000 could look like 1900 to a computer. | 2000 = *1900?* | pair: calendar 1900; calendar 2000
- Teams spent years and huge sums checking code. | YEARS OF *FIXING* | hero: gear Fixing
- Midnight passed and almost nothing broke, because the work was done. | IT WORKED | hero: check Fixed
- Prevention looked like nothing happening. | NOTHING *HAPPENED* | hero: shield Prevented
fact: Y2K bug arose from two-digit year storage; large remediation effort preceded 1 Jan 2000; few failures occurred. Avoid quoting a cost figure without a source.
alt: The disaster that didn't happen, and why.
alt: Why Y2K was not a hoax.
tags: y2k, tech, history

## 1514 | Why January 1 is the start of the year
hook: January 1 is a choice, not nature. | NEW YEAR IS *A CHOICE* | hero: calendar Jan 1
- Nothing in space marks January 1 as special. | NOTHING *SPECIAL* | hero: orbit Orbit
- Early Roman years began in March. | ROME STARTED *IN MARCH* | hero: calendar March
- In 46 BC, Julius Caesar's calendar set January 1 as the start. | 46 BC: *JANUARY* | num: 46 BC | Caesar's calendar | calendar
- January was named after Janus, the two-faced god of doors. | JANUS: GOD OF *DOORS* | hero: door Janus
- A door looks back and forward, which suits a new year. | LOOKING *BOTH WAYS* | pair: arrow-right Back; arrow-right Forward
fact: Roman civil year began Jan 1 from 153 BC for consular term start; Julian calendar (46-45 BC) fixed it. Janus is the namesake. Confirm dates with Britannica/Oxford Classical Dictionary.
alt: Why the year doesn't start on the solstice.
alt: The god of doors started your year.
tags: calendar, history, newyear

## 1515 | Why a week has seven days
hook: Nothing in nature makes a seven-day week. | NATURE *HAS NO WEEK* | hero: calendar 7 days
- A day, a month and a year all come from astronomy. | DAY · MONTH · *YEAR* | grid: sun Day; moon Month; orbit Year
- A week doesn't match any cycle in the sky. | MATCHES *NOTHING* | hero: question Week
- The seven-day week traces back to ancient Babylon. | BACK TO *BABYLON* | hero: calendar Babylon
- Seven visible bodies moved across the sky, so the number stuck. | *SEVEN* WANDERERS | hero: star Sun, Moon, five planets
- It spread through religion and trade until it went global. | SPREAD *WORLDWIDE* | hero: globe Worldwide
fact: Seven-day week is cultural, not astronomical; often traced to Babylonian and Jewish traditions; the seven classical planets are commonly cited as influence on weekday names. Hedge with 'often traced'.
alt: A week is an invention.
alt: Why we all agree on seven days.
tags: calendar, time, history
