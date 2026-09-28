// data/groups.js
// HillaryIsDancing canonical group/sub-unit membership database.
// Web cross-check refreshed: 2026-09-28.
//
// Project rules:
// - memberIds = EVERY officially debuted member (current + former), used by achievements.
// - Former members count toward "cover every member" achievements.
// - Pre-debut departures do NOT count unless the project rule changes later.
// - Sub-units reuse the exact same Person IDs as their parent group.
// - Collaboration stages/projects are NEVER invented as groups.

(() => {
  const root = window.HID_DATA = window.HID_DATA || {};

  const groups = {
  "twice": {
    "id": "twice",
    "name": "TWICE",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "nayeon",
      "jeongyeon",
      "momo",
      "sana",
      "jihyo",
      "mina",
      "dahyun",
      "chaeyoung",
      "tzuyu"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "nayeon",
      "jeongyeon",
      "momo",
      "sana",
      "jihyo",
      "mina",
      "dahyun",
      "chaeyoung",
      "tzuyu"
    ]
  },
  "misamo": {
    "id": "misamo",
    "name": "MISAMO",
    "kind": "subunit",
    "status": "active",
    "parentGroupId": "twice",
    "membershipComplete": true,
    "currentMemberIds": [
      "mina",
      "sana",
      "momo"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "mina",
      "sana",
      "momo"
    ]
  },
  "blackpink": {
    "id": "blackpink",
    "name": "BLACKPINK",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "jisoo",
      "jennie",
      "rose",
      "lisa"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "jisoo",
      "jennie",
      "rose",
      "lisa"
    ]
  },
  "aespa": {
    "id": "aespa",
    "name": "aespa",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "karina",
      "giselle",
      "winter",
      "ningning"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "karina",
      "giselle",
      "winter",
      "ningning"
    ]
  },
  "le_sserafim": {
    "id": "le_sserafim",
    "name": "LE SSERAFIM",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "sakura",
      "kim_chaewon",
      "huh_yunjin",
      "kazuha",
      "hong_eunchae"
    ],
    "formerMemberIds": [
      "kim_garam"
    ],
    "memberIds": [
      "sakura",
      "kim_chaewon",
      "huh_yunjin",
      "kazuha",
      "hong_eunchae",
      "kim_garam"
    ]
  },
  "gfriend": {
    "id": "gfriend",
    "name": "GFRIEND",
    "kind": "group",
    "status": "reunion",
    "membershipComplete": true,
    "currentMemberIds": [
      "sowon",
      "yerin",
      "eunha",
      "yuju",
      "sinb",
      "umji"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "sowon",
      "yerin",
      "eunha",
      "yuju",
      "sinb",
      "umji"
    ],
    "note": "Six-member reunion activities resumed for the 10th anniversary project in 2025."
  },
  "viviz": {
    "id": "viviz",
    "name": "VIVIZ",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "eunha",
      "sinb",
      "umji"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "eunha",
      "sinb",
      "umji"
    ],
    "note": "All three remain VIVIZ members; their BPM Entertainment contracts were terminated in March 2026."
  },
  "kiss_of_life": {
    "id": "kiss_of_life",
    "name": "KISS OF LIFE",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "julie",
      "natty",
      "belle",
      "haneul"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "julie",
      "natty",
      "belle",
      "haneul"
    ]
  },
  "fifty_fifty": {
    "id": "fifty_fifty",
    "name": "FIFTY FIFTY",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "keena",
      "chanelle_moon",
      "yewon",
      "hana",
      "athena"
    ],
    "formerMemberIds": [
      "saena",
      "sio",
      "aran"
    ],
    "memberIds": [
      "keena",
      "chanelle_moon",
      "yewon",
      "hana",
      "athena",
      "saena",
      "sio",
      "aran"
    ]
  },
  "newjeans": {
    "id": "newjeans",
    "name": "NewJeans",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "minji",
      "hanni",
      "haerin",
      "hyein"
    ],
    "formerMemberIds": [
      "danielle"
    ],
    "memberIds": [
      "minji",
      "hanni",
      "haerin",
      "hyein",
      "danielle"
    ],
    "note": "Danielle is a former member as of late 2025; official 2026 group content features Minji, Hanni, Haerin and Hyein."
  },
  "wjsn": {
    "id": "wjsn",
    "name": "WJSN Cosmic Girls",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "seola",
      "bona",
      "exy",
      "soobin",
      "luda",
      "dawon",
      "eunseo",
      "yeoreum",
      "dayoung",
      "yeonjung"
    ],
    "formerMemberIds": [
      "xuanyi",
      "cheng_xiao",
      "meiqi"
    ],
    "memberIds": [
      "seola",
      "bona",
      "exy",
      "soobin",
      "luda",
      "dawon",
      "eunseo",
      "yeoreum",
      "dayoung",
      "yeonjung",
      "xuanyi",
      "cheng_xiao",
      "meiqi"
    ]
  },
  "chocome": {
    "id": "chocome",
    "name": "CHOCOME",
    "kind": "subunit",
    "status": "inactive",
    "parentGroupId": "wjsn",
    "membershipComplete": true,
    "currentMemberIds": [
      "soobin",
      "luda",
      "yeoreum",
      "dayoung"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "soobin",
      "luda",
      "yeoreum",
      "dayoung"
    ]
  },
  "girls_generation": {
    "id": "girls_generation",
    "name": "Girls' Generation",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "taeyeon",
      "sunny",
      "tiffany",
      "hyoyeon",
      "yuri",
      "sooyoung",
      "yoona",
      "seohyun"
    ],
    "formerMemberIds": [
      "jessica"
    ],
    "memberIds": [
      "taeyeon",
      "sunny",
      "tiffany",
      "hyoyeon",
      "yuri",
      "sooyoung",
      "yoona",
      "seohyun",
      "jessica"
    ]
  },
  "izone": {
    "id": "izone",
    "name": "IZ*ONE",
    "kind": "group",
    "status": "disbanded",
    "membershipComplete": true,
    "currentMemberIds": [],
    "formerMemberIds": [
      "kwon_eunbi",
      "sakura",
      "kang_hyewon",
      "choi_yena",
      "lee_chaeyeon",
      "kim_chaewon",
      "kim_minju",
      "yabuki_nako",
      "honda_hitomi",
      "jo_yuri",
      "an_yujin",
      "jang_wonyoung"
    ],
    "memberIds": [
      "kwon_eunbi",
      "sakura",
      "kang_hyewon",
      "choi_yena",
      "lee_chaeyeon",
      "kim_chaewon",
      "kim_minju",
      "yabuki_nako",
      "honda_hitomi",
      "jo_yuri",
      "an_yujin",
      "jang_wonyoung"
    ]
  },
  "purple_kiss": {
    "id": "purple_kiss",
    "name": "Purple Kiss",
    "kind": "group",
    "status": "disbanded",
    "membershipComplete": true,
    "currentMemberIds": [],
    "formerMemberIds": [
      "na_goeun",
      "dosie",
      "ireh",
      "yuki",
      "chaein",
      "swan",
      "park_jieun"
    ],
    "memberIds": [
      "na_goeun",
      "dosie",
      "ireh",
      "yuki",
      "chaein",
      "swan",
      "park_jieun"
    ],
    "note": "Group activities officially concluded in November 2025."
  },
  "dreamcatcher": {
    "id": "dreamcatcher",
    "name": "Dreamcatcher",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "jiu",
      "sua",
      "siyeon",
      "handong",
      "yoohyeon",
      "dami",
      "gahyun"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "jiu",
      "sua",
      "siyeon",
      "handong",
      "yoohyeon",
      "dami",
      "gahyun"
    ]
  },
  "illit": {
    "id": "illit",
    "name": "ILLIT",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "yunah",
      "minju_illit",
      "moka",
      "wonhee",
      "iroha"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "yunah",
      "minju_illit",
      "moka",
      "wonhee",
      "iroha"
    ],
    "reviewNote": "Youngseo is excluded because she left before ILLIT officially debuted as a five-member group."
  },
  "ive": {
    "id": "ive",
    "name": "IVE",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "an_yujin",
      "gaeul",
      "rei",
      "jang_wonyoung",
      "liz",
      "leeseo"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "an_yujin",
      "gaeul",
      "rei",
      "jang_wonyoung",
      "liz",
      "leeseo"
    ]
  },
  "stayc": {
    "id": "stayc",
    "name": "STAYC",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "sumin",
      "sieun",
      "isa",
      "seeun",
      "yoon",
      "j"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "sumin",
      "sieun",
      "isa",
      "seeun",
      "yoon",
      "j"
    ]
  },
  "mamamoo": {
    "id": "mamamoo",
    "name": "MAMAMOO",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "solar",
      "moonbyul",
      "wheein",
      "hwasa"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "solar",
      "moonbyul",
      "wheein",
      "hwasa"
    ],
    "note": "All four reunited for full-group releases and touring in 2026."
  },
  "everglow": {
    "id": "everglow",
    "name": "EVERGLOW",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "e_u",
      "sihyeon",
      "onda",
      "aisha"
    ],
    "formerMemberIds": [
      "mia",
      "yiren"
    ],
    "memberIds": [
      "e_u",
      "sihyeon",
      "onda",
      "aisha",
      "mia",
      "yiren"
    ],
    "note": "The group resumed activities as four members under a new agency in 2025–2026."
  },
  "loona": {
    "id": "loona",
    "name": "LOONA",
    "kind": "group",
    "status": "inactive",
    "membershipComplete": true,
    "currentMemberIds": [
      "heejin",
      "hyunjin",
      "haseul",
      "yeojin",
      "vivi",
      "kim_lip",
      "jinsoul",
      "choerry",
      "yves",
      "gowon",
      "hyeju"
    ],
    "formerMemberIds": [
      "chuu"
    ],
    "memberIds": [
      "heejin",
      "hyunjin",
      "haseul",
      "yeojin",
      "vivi",
      "kim_lip",
      "jinsoul",
      "choerry",
      "yves",
      "gowon",
      "hyeju",
      "chuu"
    ]
  },
  "meovv": {
    "id": "meovv",
    "name": "MEOVV",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "sooin",
      "gawon",
      "anna",
      "narin",
      "ella"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "sooin",
      "gawon",
      "anna",
      "narin",
      "ella"
    ]
  },
  "katseye": {
    "id": "katseye",
    "name": "KATSEYE",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "sophia",
      "manon",
      "daniela",
      "lara",
      "megan",
      "yoonchae"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "sophia",
      "manon",
      "daniela",
      "lara",
      "megan",
      "yoonchae"
    ]
  },
  "xg": {
    "id": "xg",
    "name": "XG",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "jurin",
      "chisa",
      "hinata",
      "harvey",
      "juria",
      "maya",
      "cocona"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "jurin",
      "chisa",
      "hinata",
      "harvey",
      "juria",
      "maya",
      "cocona"
    ]
  },
  "nmixx": {
    "id": "nmixx",
    "name": "NMIXX",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "lily",
      "haewon",
      "sullyoon",
      "bae",
      "jiwoo",
      "kyujin"
    ],
    "formerMemberIds": [
      "jinni"
    ],
    "memberIds": [
      "lily",
      "haewon",
      "sullyoon",
      "bae",
      "jiwoo",
      "kyujin",
      "jinni"
    ]
  },
  "itzy": {
    "id": "itzy",
    "name": "ITZY",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "yeji",
      "lia",
      "ryujin",
      "chaeryeong",
      "yuna"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "yeji",
      "lia",
      "ryujin",
      "chaeryeong",
      "yuna"
    ]
  },
  "t_ara": {
    "id": "t_ara",
    "name": "T-ARA",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "qri",
      "eunjung",
      "hyomin",
      "jiyeon"
    ],
    "formerMemberIds": [
      "boram",
      "soyeon_tara",
      "hwayoung",
      "areum"
    ],
    "memberIds": [
      "qri",
      "eunjung",
      "hyomin",
      "jiyeon",
      "boram",
      "soyeon_tara",
      "hwayoung",
      "areum"
    ],
    "reviewNote": "Pre-debut lineup members Jiae and Jiwon remain excluded under the current 'officially debuted members only' rule."
  },
  "fx": {
    "id": "fx",
    "name": "f(x)",
    "kind": "group",
    "status": "inactive",
    "membershipComplete": true,
    "currentMemberIds": [
      "victoria",
      "amber",
      "luna",
      "krystal"
    ],
    "formerMemberIds": [
      "sulli"
    ],
    "memberIds": [
      "victoria",
      "amber",
      "luna",
      "krystal",
      "sulli"
    ]
  },
  "after_school": {
    "id": "after_school",
    "name": "AFTER SCHOOL",
    "kind": "group",
    "status": "inactive",
    "membershipComplete": true,
    "currentMemberIds": [],
    "formerMemberIds": [
      "kahi",
      "bekah",
      "soyoung_as",
      "jooyeon",
      "jungah",
      "uee",
      "raina",
      "nana",
      "lizzy",
      "e_young",
      "kaeun"
    ],
    "memberIds": [
      "kahi",
      "bekah",
      "soyoung_as",
      "jooyeon",
      "jungah",
      "uee",
      "raina",
      "nana",
      "lizzy",
      "e_young",
      "kaeun"
    ]
  },
  "fiestar": {
    "id": "fiestar",
    "name": "FIESTAR",
    "kind": "group",
    "status": "reunion",
    "membershipComplete": true,
    "currentMemberIds": [
      "jei",
      "linzy",
      "hyemi",
      "cao_lu",
      "yezi"
    ],
    "formerMemberIds": [
      "cheska"
    ],
    "memberIds": [
      "jei",
      "linzy",
      "hyemi",
      "cao_lu",
      "yezi",
      "cheska"
    ],
    "note": "The five-member lineup reunited in 2024; Cheska remains a former member."
  },
  "clc": {
    "id": "clc",
    "name": "CLC",
    "kind": "group",
    "status": "reunion",
    "membershipComplete": true,
    "currentMemberIds": [
      "seunghee",
      "yujin_clc",
      "seungyeon",
      "sorn",
      "yeeun",
      "elkie",
      "eunbin"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "seunghee",
      "yujin_clc",
      "seungyeon",
      "sorn",
      "yeeun",
      "elkie",
      "eunbin"
    ],
    "note": "All seven reunited for full-lineup concerts in August 2026; Cube had ended official group activities in 2022."
  },
  "i_dle": {
    "id": "i_dle",
    "name": "i-dle",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "miyeon_idle",
      "minnie_idle",
      "soyeon_idle",
      "yuqi_idle",
      "shuhua_idle"
    ],
    "formerMemberIds": [
      "soojin"
    ],
    "memberIds": [
      "miyeon_idle",
      "minnie_idle",
      "soyeon_idle",
      "yuqi_idle",
      "shuhua_idle",
      "soojin"
    ],
    "note": "Group formerly promoted as (G)I-DLE; Soojin is a former officially debuted member.",
    "sourceUrls": [
      "https://en.wikipedia.org/wiki/I-dle"
    ]
  },
  "babymonster": {
    "id": "babymonster",
    "name": "BABYMONSTER",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "ruka_babymonster",
      "pharita",
      "asa_babymonster",
      "ahyeon",
      "rami_babymonster",
      "rora",
      "chiquita"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "ruka_babymonster",
      "pharita",
      "asa_babymonster",
      "ahyeon",
      "rami_babymonster",
      "rora",
      "chiquita"
    ],
    "note": "YG official profile continues to list all seven members; temporary health-related absences do not change membership.",
    "sourceUrls": [
      "https://ygfamily.com/jp/artists/babymonster/profile"
    ]
  },
  "girls_day": {
    "id": "girls_day",
    "name": "Girl's Day",
    "kind": "group",
    "status": "inactive",
    "membershipComplete": true,
    "currentMemberIds": [
      "sojin_girlsday",
      "yura_girlsday",
      "minah_girlsday",
      "hyeri_girlsday"
    ],
    "formerMemberIds": [
      "jihae_girlsday",
      "jisun_girlsday",
      "jiin_girlsday"
    ],
    "memberIds": [
      "sojin_girlsday",
      "yura_girlsday",
      "minah_girlsday",
      "hyeri_girlsday",
      "jihae_girlsday",
      "jisun_girlsday",
      "jiin_girlsday"
    ],
    "note": "The four-member lineup has stated the group did not disband; group activities are on indefinite hiatus. Former debuted members remain in the achievement pool.",
    "sourceUrls": [
      "https://en.wikipedia.org/wiki/Girl%27s_Day"
    ]
  },
  "got7": {
    "id": "got7",
    "name": "GOT7",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "mark_got7",
      "jay_b",
      "jackson_got7",
      "jinyoung_got7",
      "youngjae_got7",
      "bambam",
      "yugyeom"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "mark_got7",
      "jay_b",
      "jackson_got7",
      "jinyoung_got7",
      "youngjae_got7",
      "bambam",
      "yugyeom"
    ],
    "sourceUrls": [
      "https://en.wikipedia.org/wiki/Got7"
    ]
  },
  "hearts2hearts": {
    "id": "hearts2hearts",
    "name": "Hearts2Hearts",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "carmen_h2h",
      "jiwoo_h2h",
      "yuha_h2h",
      "stella_h2h",
      "juun_h2h",
      "a_na_h2h",
      "ian_h2h",
      "ye_on_h2h"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "carmen_h2h",
      "jiwoo_h2h",
      "yuha_h2h",
      "stella_h2h",
      "juun_h2h",
      "a_na_h2h",
      "ian_h2h",
      "ye_on_h2h"
    ],
    "sourceUrls": [
      "https://en.wikipedia.org/wiki/Hearts2Hearts"
    ]
  },
  "kard": {
    "id": "kard",
    "name": "KARD",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "j_seph",
      "bm_kard",
      "somin_kard",
      "jiwoo_kard"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "j_seph",
      "bm_kard",
      "somin_kard",
      "jiwoo_kard"
    ],
    "sourceUrls": [
      "https://en.wikipedia.org/wiki/Kard_(group)"
    ]
  },
  "kep1er": {
    "id": "kep1er",
    "name": "Kep1er",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "yujin_clc",
      "xiaoting",
      "chaehyun",
      "dayeon_kep1er",
      "hikaru_kep1er",
      "huening_bahiyyih"
    ],
    "formerMemberIds": [
      "mashiro",
      "yeseo",
      "youngeun_kep1er"
    ],
    "memberIds": [
      "yujin_clc",
      "xiaoting",
      "chaehyun",
      "dayeon_kep1er",
      "hikaru_kep1er",
      "huening_bahiyyih",
      "mashiro",
      "yeseo",
      "youngeun_kep1er"
    ],
    "note": "Mashiro and Yeseo concluded Kep1er activities in 2024; Youngeun departed in March 2026. Historical achievement pool remains all nine officially debuted members.",
    "sourceUrls": [
      "https://kep1er.jp/profile/",
      "https://www.soompi.com/article/1664980wpp/7-kep1er-members-officially-extend-contracts-mashiro-and-yeseo-to-conclude-activities-with-group",
      "https://www.soompi.com/article/1823330wpp/kep1er-announces-youngeuns-departure-from-group"
    ]
  },
  "kiiikiii": {
    "id": "kiiikiii",
    "name": "KiiiKiii",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "jiyu_kiiikiii",
      "leesol",
      "sui_kiiikiii",
      "haum",
      "kya"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "jiyu_kiiikiii",
      "leesol",
      "sui_kiiikiii",
      "haum",
      "kya"
    ],
    "sourceUrls": [
      "https://www.starship-ent.com/musician/kiiikiii?page=1&tab=1"
    ]
  },
  "nature": {
    "id": "nature",
    "name": "NATURE",
    "kind": "group",
    "status": "disbanded",
    "membershipComplete": true,
    "currentMemberIds": [],
    "formerMemberIds": [
      "sohee_nature",
      "saebom",
      "aurora_nature",
      "lu_nature",
      "chaebin",
      "haru_nature",
      "loha",
      "uchae",
      "sunshine_nature",
      "gaga_nature"
    ],
    "memberIds": [
      "sohee_nature",
      "saebom",
      "aurora_nature",
      "lu_nature",
      "chaebin",
      "haru_nature",
      "loha",
      "uchae",
      "sunshine_nature",
      "gaga_nature"
    ],
    "note": "NATURE disbanded in April 2024. Gaga is included because she officially debuted; pre-debut member Yeolmae is excluded under the project rule.",
    "sourceUrls": [
      "https://en.wikipedia.org/wiki/Nature_(group)",
      "https://www.soompi.com/article/1657637wpp/nature-officially-announces-disbandment-after-6-years"
    ]
  },
  "nct_dream": {
    "id": "nct_dream",
    "name": "NCT DREAM",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "renjun",
      "jeno",
      "haechan",
      "jaemin",
      "chenle",
      "jisung_nct"
    ],
    "formerMemberIds": [
      "mark_nct"
    ],
    "memberIds": [
      "renjun",
      "jeno",
      "haechan",
      "jaemin",
      "chenle",
      "jisung_nct",
      "mark_nct"
    ],
    "note": "Mark concluded all NCT activities on April 8, 2026. He remains in the historical achievement pool as an officially debuted NCT DREAM member.",
    "sourceUrls": [
      "https://www.soompi.com/article/1830005wpp/breaking-mark-leaves-nct-an",
      "https://www.soompi.com/article/1864127wpp/all-nct-dream-members-renew-contracts-with-sm-entertainment"
    ]
  },
  "pixxie": {
    "id": "pixxie",
    "name": "PiXXiE",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "mabelz",
      "pimma",
      "ingkho"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "mabelz",
      "pimma",
      "ingkho"
    ],
    "sourceUrls": [
      "https://en.wikipedia.org/wiki/Pixxie"
    ]
  },
  "plave": {
    "id": "plave",
    "name": "PLAVE",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "yejun_plave",
      "noah_plave",
      "bamby",
      "eunho_plave",
      "hamin_plave"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "yejun_plave",
      "noah_plave",
      "bamby",
      "eunho_plave",
      "hamin_plave"
    ],
    "sourceUrls": [
      "https://plave-official.jp/profile"
    ]
  },
  "rescene": {
    "id": "rescene",
    "name": "RESCENE",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "woni_rescene",
      "liv_rescene",
      "minami_rescene",
      "may_rescene",
      "zena_rescene"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "woni_rescene",
      "liv_rescene",
      "minami_rescene",
      "may_rescene",
      "zena_rescene"
    ],
    "sourceUrls": [
      "https://en.wikipedia.org/wiki/Rescene"
    ]
  },
  "seventeen": {
    "id": "seventeen",
    "name": "SEVENTEEN",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "scoups",
      "jeonghan",
      "joshua_seventeen",
      "jun_seventeen",
      "hoshi",
      "wonwoo",
      "woozi",
      "dk_seventeen",
      "mingyu",
      "the8",
      "seungkwan",
      "vernon",
      "dino"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "scoups",
      "jeonghan",
      "joshua_seventeen",
      "jun_seventeen",
      "hoshi",
      "wonwoo",
      "woozi",
      "dk_seventeen",
      "mingyu",
      "the8",
      "seungkwan",
      "vernon",
      "dino"
    ],
    "sourceUrls": [
      "https://en.wikipedia.org/wiki/Seventeen_(South_Korean_band)"
    ]
  },
  "shinee": {
    "id": "shinee",
    "name": "SHINee",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "onew",
      "key_shinee",
      "minho_shinee",
      "taemin"
    ],
    "formerMemberIds": [
      "jonghyun"
    ],
    "memberIds": [
      "onew",
      "key_shinee",
      "minho_shinee",
      "taemin",
      "jonghyun"
    ],
    "sourceUrls": [
      "https://en.wikipedia.org/wiki/Shinee"
    ]
  },
  "triples": {
    "id": "triples",
    "name": "tripleS",
    "kind": "group",
    "status": "active",
    "membershipComplete": true,
    "currentMemberIds": [
      "triples_seoyeon",
      "triples_hyerin",
      "triples_jiwoo",
      "triples_chaeyeon",
      "triples_yooyeon",
      "triples_soomin",
      "triples_nakyoung",
      "triples_yubin",
      "triples_kaede",
      "triples_dahyun",
      "triples_kotone",
      "triples_yeonji",
      "triples_nien",
      "triples_sohyun",
      "triples_xinyu",
      "triples_mayu",
      "triples_lynn",
      "triples_joobin",
      "triples_hayeon",
      "triples_shion",
      "triples_chaewon",
      "triples_sullin",
      "triples_seoah",
      "triples_jiyeon"
    ],
    "formerMemberIds": [],
    "memberIds": [
      "triples_seoyeon",
      "triples_hyerin",
      "triples_jiwoo",
      "triples_chaeyeon",
      "triples_yooyeon",
      "triples_soomin",
      "triples_nakyoung",
      "triples_yubin",
      "triples_kaede",
      "triples_dahyun",
      "triples_kotone",
      "triples_yeonji",
      "triples_nien",
      "triples_sohyun",
      "triples_xinyu",
      "triples_mayu",
      "triples_lynn",
      "triples_joobin",
      "triples_hayeon",
      "triples_shion",
      "triples_chaewon",
      "triples_sullin",
      "triples_seoah",
      "triples_jiyeon"
    ],
    "sourceUrls": [
      "https://www.triples-official.jp/profile/"
    ]
  }
};

  const groupAliases = {
  "twice": "twice",
  "blackpink": "blackpink",
  "aespa": "aespa",
  "aspea": "aespa",
  "le sserafim": "le_sserafim",
  "le seerafim": "le_sserafim",
  "gfriend": "gfriend",
  "viviz": "viviz",
  "kiss of life": "kiss_of_life",
  "fifty fifty": "fifty_fifty",
  "newjeans": "newjeans",
  "new jeans": "newjeans",
  "wjsn cosmic girls": "wjsn",
  "wjsn": "wjsn",
  "girls' generation": "girls_generation",
  "iz*one": "izone",
  "izone": "izone",
  "purple kiss": "purple_kiss",
  "dreamcatcher": "dreamcatcher",
  "illit": "illit",
  "ive": "ive",
  "stayc": "stayc",
  "mamamoo": "mamamoo",
  "everglow": "everglow",
  "misamo": "misamo",
  "loona": "loona",
  "meovv": "meovv",
  "katseye": "katseye",
  "xg": "xg",
  "nmixx": "nmixx",
  "itzy": "itzy",
  "t-ara": "t_ara",
  "f(x)": "fx",
  "after school": "after_school",
  "fiestar": "fiestar",
  "clc": "clc",
  "chocome": "chocome",
  "wjsn chocome": "chocome",
  "(g)i-dle": "i_dle",
  "(g)idle": "i_dle",
  "gidle": "i_dle",
  "g-idle": "i_dle",
  "i-dle": "i_dle",
  "idle": "i_dle",
  "babymonster": "babymonster",
  "girl's day": "girls_day",
  "girls day": "girls_day",
  "girlsday": "girls_day",
  "got7": "got7",
  "hearts2hearts": "hearts2hearts",
  "kard": "kard",
  "kep1er": "kep1er",
  "kiiikiii": "kiiikiii",
  "nature": "nature",
  "nct dream": "nct_dream",
  "nctdream": "nct_dream",
  "pixxie": "pixxie",
  "plave": "plave",
  "rescene": "rescene",
  "seventeen": "seventeen",
  "shinee": "shinee",
  "triples": "triples",
  "triple s": "triples"
};

  function normalizeKey(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replaceAll("’", "'")
      .replace(/\s+/g, " ");
  }

  function resolveGroupId(name) {
    return groupAliases[normalizeKey(name)] || null;
  }

  function getGroup(groupId) {
    return groups[groupId] || null;
  }

  root.groups = groups;
  root.groupAliases = groupAliases;
  root.resolveGroupId = resolveGroupId;
  root.getGroup = getGroup;

  root.groupReview = {
    verifiedAt: "2026-09-28",
    formerMembersCount: true,
    preDebutMembersCount: false,
    unresolvedPolicyExamples: [
      "ILLIT / Youngseo",
      "T-ARA / pre-debut lineup Jiae and Jiwon"
    ]
  };
})();
