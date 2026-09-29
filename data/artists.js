// data/artists.js
// Person identity database.
// A person has ONE canonical ID even when they belong to multiple groups/sub-units.
// Group affiliations are derived from groups.js, including current vs former membership.
// Web cross-check refreshed: 2026-09-28.

(() => {
  const root = window.HID_DATA = window.HID_DATA || {};
  const groups = root.groups || {};

  const people = {
  "nayeon": {
    "id": "nayeon",
    "name": "Nayeon",
    "aliases": []
  },
  "jeongyeon": {
    "id": "jeongyeon",
    "name": "Jeongyeon",
    "aliases": [
      "Jungyeon"
    ]
  },
  "momo": {
    "id": "momo",
    "name": "Momo",
    "aliases": []
  },
  "sana": {
    "id": "sana",
    "name": "Sana",
    "aliases": []
  },
  "jihyo": {
    "id": "jihyo",
    "name": "Jihyo",
    "aliases": []
  },
  "mina": {
    "id": "mina",
    "name": "Mina",
    "aliases": []
  },
  "dahyun": {
    "id": "dahyun",
    "name": "Dahyun",
    "aliases": [
      "Da Hyun",
      "Da-hyun"
    ]
  },
  "chaeyoung": {
    "id": "chaeyoung",
    "name": "Chaeyoung",
    "aliases": []
  },
  "tzuyu": {
    "id": "tzuyu",
    "name": "Tzuyu",
    "aliases": []
  },
  "jisoo": {
    "id": "jisoo",
    "name": "Jisoo",
    "aliases": []
  },
  "jennie": {
    "id": "jennie",
    "name": "Jennie",
    "aliases": [
      "JENNIE"
    ]
  },
  "rose": {
    "id": "rose",
    "name": "Rosé",
    "aliases": [
      "Rose",
      "ROSÉ"
    ]
  },
  "lisa": {
    "id": "lisa",
    "name": "Lisa",
    "aliases": []
  },
  "karina": {
    "id": "karina",
    "name": "Karina",
    "aliases": []
  },
  "giselle": {
    "id": "giselle",
    "name": "Giselle",
    "aliases": []
  },
  "winter": {
    "id": "winter",
    "name": "Winter",
    "aliases": []
  },
  "ningning": {
    "id": "ningning",
    "name": "Ningning",
    "aliases": [
      "Ning Ning"
    ]
  },
  "sakura": {
    "id": "sakura",
    "name": "Sakura",
    "aliases": [
      "Miyawaki Sakura"
    ]
  },
  "kim_chaewon": {
    "id": "kim_chaewon",
    "name": "Chaewon",
    "aliases": [
      "Kim Chaewon"
    ]
  },
  "huh_yunjin": {
    "id": "huh_yunjin",
    "name": "Yunjin",
    "aliases": [
      "Huh Yunjin"
    ]
  },
  "kazuha": {
    "id": "kazuha",
    "name": "Kazuha",
    "aliases": []
  },
  "hong_eunchae": {
    "id": "hong_eunchae",
    "name": "Eunchae",
    "aliases": [
      "Hong Eunchae"
    ]
  },
  "kim_garam": {
    "id": "kim_garam",
    "name": "Garam",
    "aliases": [
      "Kim Garam"
    ]
  },
  "sowon": {
    "id": "sowon",
    "name": "Sowon",
    "aliases": []
  },
  "yerin": {
    "id": "yerin",
    "name": "Yerin",
    "aliases": []
  },
  "eunha": {
    "id": "eunha",
    "name": "Eunha",
    "aliases": []
  },
  "yuju": {
    "id": "yuju",
    "name": "Yuju",
    "aliases": []
  },
  "sinb": {
    "id": "sinb",
    "name": "SinB",
    "aliases": [
      "Sinb"
    ]
  },
  "umji": {
    "id": "umji",
    "name": "Umji",
    "aliases": []
  },
  "julie": {
    "id": "julie",
    "name": "Julie",
    "aliases": []
  },
  "natty": {
    "id": "natty",
    "name": "Natty",
    "aliases": []
  },
  "belle": {
    "id": "belle",
    "name": "Belle",
    "aliases": []
  },
  "haneul": {
    "id": "haneul",
    "name": "Haneul",
    "aliases": []
  },
  "keena": {
    "id": "keena",
    "name": "Keena",
    "aliases": []
  },
  "saena": {
    "id": "saena",
    "name": "Saena",
    "aliases": []
  },
  "sio": {
    "id": "sio",
    "name": "Sio",
    "aliases": []
  },
  "aran": {
    "id": "aran",
    "name": "Aran",
    "aliases": []
  },
  "chanelle_moon": {
    "id": "chanelle_moon",
    "name": "Chanelle Moon",
    "aliases": [
      "Chanelle"
    ]
  },
  "yewon": {
    "id": "yewon",
    "name": "Yewon",
    "aliases": []
  },
  "hana": {
    "id": "hana",
    "name": "Hana",
    "aliases": []
  },
  "athena": {
    "id": "athena",
    "name": "Athena",
    "aliases": []
  },
  "minji": {
    "id": "minji",
    "name": "Minji",
    "aliases": []
  },
  "hanni": {
    "id": "hanni",
    "name": "Hanni",
    "aliases": []
  },
  "danielle": {
    "id": "danielle",
    "name": "Danielle",
    "aliases": []
  },
  "haerin": {
    "id": "haerin",
    "name": "Haerin",
    "aliases": []
  },
  "hyein": {
    "id": "hyein",
    "name": "Hyein",
    "aliases": []
  },
  "seola": {
    "id": "seola",
    "name": "Seola",
    "aliases": []
  },
  "xuanyi": {
    "id": "xuanyi",
    "name": "Xuanyi",
    "aliases": [
      "Xuan Yi"
    ]
  },
  "bona": {
    "id": "bona",
    "name": "Bona",
    "aliases": []
  },
  "exy": {
    "id": "exy",
    "name": "Exy",
    "aliases": []
  },
  "soobin": {
    "id": "soobin",
    "name": "Soobin",
    "aliases": []
  },
  "luda": {
    "id": "luda",
    "name": "Luda",
    "aliases": []
  },
  "dawon": {
    "id": "dawon",
    "name": "Dawon",
    "aliases": []
  },
  "eunseo": {
    "id": "eunseo",
    "name": "Eunseo",
    "aliases": []
  },
  "cheng_xiao": {
    "id": "cheng_xiao",
    "name": "Cheng Xiao",
    "aliases": [
      "Chengxiao"
    ]
  },
  "meiqi": {
    "id": "meiqi",
    "name": "Meiqi",
    "aliases": [
      "Mei Qi"
    ]
  },
  "yeoreum": {
    "id": "yeoreum",
    "name": "Yeoreum",
    "aliases": []
  },
  "dayoung": {
    "id": "dayoung",
    "name": "Dayoung",
    "aliases": []
  },
  "yeonjung": {
    "id": "yeonjung",
    "name": "Yeonjung",
    "aliases": []
  },
  "taeyeon": {
    "id": "taeyeon",
    "name": "Taeyeon",
    "aliases": []
  },
  "sunny": {
    "id": "sunny",
    "name": "Sunny",
    "aliases": []
  },
  "tiffany": {
    "id": "tiffany",
    "name": "Tiffany",
    "aliases": [
      "Tiffany Young"
    ]
  },
  "hyoyeon": {
    "id": "hyoyeon",
    "name": "Hyoyeon",
    "aliases": [
      "HYO"
    ]
  },
  "yuri": {
    "id": "yuri",
    "name": "Yuri",
    "aliases": []
  },
  "sooyoung": {
    "id": "sooyoung",
    "name": "Sooyoung",
    "aliases": []
  },
  "yoona": {
    "id": "yoona",
    "name": "Yoona",
    "aliases": []
  },
  "seohyun": {
    "id": "seohyun",
    "name": "Seohyun",
    "aliases": []
  },
  "jessica": {
    "id": "jessica",
    "name": "Jessica",
    "aliases": [
      "Jessica Jung"
    ]
  },
  "kwon_eunbi": {
    "id": "kwon_eunbi",
    "name": "Eunbi",
    "aliases": [
      "Kwon Eunbi"
    ]
  },
  "kang_hyewon": {
    "id": "kang_hyewon",
    "name": "Hyewon",
    "aliases": [
      "Kang Hyewon"
    ]
  },
  "choi_yena": {
    "id": "choi_yena",
    "name": "Yena",
    "aliases": [
      "Choi Yena",
      "YENA"
    ]
  },
  "lee_chaeyeon": {
    "id": "lee_chaeyeon",
    "name": "Lee Chaeyeon",
    "aliases": [
      "Chaeyeon",
      "LEE CHAE YEON"
    ]
  },
  "kim_minju": {
    "id": "kim_minju",
    "name": "Minju",
    "aliases": [
      "Kim Minju"
    ]
  },
  "yabuki_nako": {
    "id": "yabuki_nako",
    "name": "Nako",
    "aliases": [
      "Yabuki Nako"
    ]
  },
  "honda_hitomi": {
    "id": "honda_hitomi",
    "name": "Hitomi",
    "aliases": [
      "Honda Hitomi"
    ]
  },
  "jo_yuri": {
    "id": "jo_yuri",
    "name": "Yuri",
    "aliases": [
      "Jo Yuri"
    ]
  },
  "jang_wonyoung": {
    "id": "jang_wonyoung",
    "name": "Wonyoung",
    "aliases": [
      "Jang Wonyoung"
    ]
  },
  "na_goeun": {
    "id": "na_goeun",
    "name": "Goeun",
    "aliases": [
      "Na Goeun"
    ]
  },
  "dosie": {
    "id": "dosie",
    "name": "Dosie",
    "aliases": []
  },
  "ireh": {
    "id": "ireh",
    "name": "Ireh",
    "aliases": []
  },
  "yuki": {
    "id": "yuki",
    "name": "Yuki",
    "aliases": []
  },
  "chaein": {
    "id": "chaein",
    "name": "Chaein",
    "aliases": []
  },
  "swan": {
    "id": "swan",
    "name": "Swan",
    "aliases": []
  },
  "park_jieun": {
    "id": "park_jieun",
    "name": "Jieun",
    "aliases": [
      "Park Jieun"
    ]
  },
  "jiu": {
    "id": "jiu",
    "name": "JiU",
    "aliases": [
      "Jiu"
    ]
  },
  "sua": {
    "id": "sua",
    "name": "SuA",
    "aliases": [
      "Sua"
    ]
  },
  "siyeon": {
    "id": "siyeon",
    "name": "Siyeon",
    "aliases": []
  },
  "handong": {
    "id": "handong",
    "name": "Handong",
    "aliases": []
  },
  "yoohyeon": {
    "id": "yoohyeon",
    "name": "Yoohyeon",
    "aliases": [
      "Yoo Hyeon",
      "Yoo-hyeon"
    ]
  },
  "dami": {
    "id": "dami",
    "name": "Dami",
    "aliases": []
  },
  "gahyun": {
    "id": "gahyun",
    "name": "Gahyun",
    "aliases": [
      "Gahyeon"
    ]
  },
  "yunah": {
    "id": "yunah",
    "name": "Yunah",
    "aliases": []
  },
  "minju_illit": {
    "id": "minju_illit",
    "name": "Minju",
    "aliases": [
      "ILLIT Minju"
    ]
  },
  "moka": {
    "id": "moka",
    "name": "Moka",
    "aliases": []
  },
  "wonhee": {
    "id": "wonhee",
    "name": "Wonhee",
    "aliases": []
  },
  "iroha": {
    "id": "iroha",
    "name": "Iroha",
    "aliases": []
  },
  "an_yujin": {
    "id": "an_yujin",
    "name": "Yujin",
    "aliases": [
      "An Yujin",
      "Ahn Yujin"
    ]
  },
  "gaeul": {
    "id": "gaeul",
    "name": "Gaeul",
    "aliases": []
  },
  "rei": {
    "id": "rei",
    "name": "Rei",
    "aliases": []
  },
  "liz": {
    "id": "liz",
    "name": "Liz",
    "aliases": []
  },
  "leeseo": {
    "id": "leeseo",
    "name": "Leeseo",
    "aliases": []
  },
  "sumin": {
    "id": "sumin",
    "name": "Sumin",
    "aliases": []
  },
  "sieun": {
    "id": "sieun",
    "name": "Sieun",
    "aliases": []
  },
  "isa": {
    "id": "isa",
    "name": "Isa",
    "aliases": []
  },
  "seeun": {
    "id": "seeun",
    "name": "Seeun",
    "aliases": []
  },
  "yoon": {
    "id": "yoon",
    "name": "Yoon",
    "aliases": []
  },
  "j": {
    "id": "j",
    "name": "J",
    "aliases": []
  },
  "solar": {
    "id": "solar",
    "name": "Solar",
    "aliases": []
  },
  "moonbyul": {
    "id": "moonbyul",
    "name": "Moonbyul",
    "aliases": []
  },
  "wheein": {
    "id": "wheein",
    "name": "Wheein",
    "aliases": []
  },
  "hwasa": {
    "id": "hwasa",
    "name": "Hwasa",
    "aliases": []
  },
  "e_u": {
    "id": "e_u",
    "name": "E:U",
    "aliases": [
      "EU"
    ]
  },
  "sihyeon": {
    "id": "sihyeon",
    "name": "Sihyeon",
    "aliases": []
  },
  "mia": {
    "id": "mia",
    "name": "Mia",
    "aliases": []
  },
  "onda": {
    "id": "onda",
    "name": "Onda",
    "aliases": []
  },
  "aisha": {
    "id": "aisha",
    "name": "Aisha",
    "aliases": []
  },
  "yiren": {
    "id": "yiren",
    "name": "Yiren",
    "aliases": []
  },
  "heejin": {
    "id": "heejin",
    "name": "HeeJin",
    "aliases": [
      "Heejin"
    ]
  },
  "hyunjin": {
    "id": "hyunjin",
    "name": "HyunJin",
    "aliases": [
      "Hyunjin"
    ]
  },
  "haseul": {
    "id": "haseul",
    "name": "HaSeul",
    "aliases": [
      "Haseul"
    ]
  },
  "yeojin": {
    "id": "yeojin",
    "name": "YeoJin",
    "aliases": [
      "Yeojin"
    ]
  },
  "vivi": {
    "id": "vivi",
    "name": "ViVi",
    "aliases": [
      "Vivi"
    ]
  },
  "kim_lip": {
    "id": "kim_lip",
    "name": "Kim Lip",
    "aliases": []
  },
  "jinsoul": {
    "id": "jinsoul",
    "name": "JinSoul",
    "aliases": [
      "Jinsoul"
    ]
  },
  "choerry": {
    "id": "choerry",
    "name": "Choerry",
    "aliases": []
  },
  "yves": {
    "id": "yves",
    "name": "Yves",
    "aliases": []
  },
  "chuu": {
    "id": "chuu",
    "name": "Chuu",
    "aliases": []
  },
  "gowon": {
    "id": "gowon",
    "name": "Go Won",
    "aliases": [
      "Gowon"
    ]
  },
  "hyeju": {
    "id": "hyeju",
    "name": "HyeJu",
    "aliases": [
      "Olivia Hye",
      "Hyeju"
    ]
  },
  "sooin": {
    "id": "sooin",
    "name": "Sooin",
    "aliases": []
  },
  "gawon": {
    "id": "gawon",
    "name": "Gawon",
    "aliases": []
  },
  "anna": {
    "id": "anna",
    "name": "Anna",
    "aliases": []
  },
  "narin": {
    "id": "narin",
    "name": "Narin",
    "aliases": []
  },
  "ella": {
    "id": "ella",
    "name": "Ella",
    "aliases": []
  },
  "sophia": {
    "id": "sophia",
    "name": "Sophia",
    "aliases": []
  },
  "manon": {
    "id": "manon",
    "name": "Manon",
    "aliases": []
  },
  "daniela": {
    "id": "daniela",
    "name": "Daniela",
    "aliases": []
  },
  "lara": {
    "id": "lara",
    "name": "Lara",
    "aliases": []
  },
  "megan": {
    "id": "megan",
    "name": "Megan",
    "aliases": []
  },
  "yoonchae": {
    "id": "yoonchae",
    "name": "Yoonchae",
    "aliases": []
  },
  "jurin": {
    "id": "jurin",
    "name": "Jurin",
    "aliases": [
      "JURIN"
    ]
  },
  "chisa": {
    "id": "chisa",
    "name": "Chisa",
    "aliases": []
  },
  "hinata": {
    "id": "hinata",
    "name": "Hinata",
    "aliases": []
  },
  "harvey": {
    "id": "harvey",
    "name": "Harvey",
    "aliases": []
  },
  "juria": {
    "id": "juria",
    "name": "Juria",
    "aliases": []
  },
  "maya": {
    "id": "maya",
    "name": "Maya",
    "aliases": []
  },
  "cocona": {
    "id": "cocona",
    "name": "Cocona",
    "aliases": []
  },
  "lily": {
    "id": "lily",
    "name": "Lily",
    "aliases": []
  },
  "haewon": {
    "id": "haewon",
    "name": "Haewon",
    "aliases": []
  },
  "sullyoon": {
    "id": "sullyoon",
    "name": "Sullyoon",
    "aliases": []
  },
  "bae": {
    "id": "bae",
    "name": "Bae",
    "aliases": []
  },
  "jiwoo": {
    "id": "jiwoo",
    "name": "Jiwoo",
    "aliases": []
  },
  "kyujin": {
    "id": "kyujin",
    "name": "Kyujin",
    "aliases": []
  },
  "jinni": {
    "id": "jinni",
    "name": "Jini",
    "aliases": [
      "Jinni"
    ]
  },
  "yeji": {
    "id": "yeji",
    "name": "Yeji",
    "aliases": []
  },
  "lia": {
    "id": "lia",
    "name": "Lia",
    "aliases": []
  },
  "ryujin": {
    "id": "ryujin",
    "name": "Ryujin",
    "aliases": []
  },
  "chaeryeong": {
    "id": "chaeryeong",
    "name": "Chaeryeong",
    "aliases": []
  },
  "yuna": {
    "id": "yuna",
    "name": "Yuna",
    "aliases": []
  },
  "boram": {
    "id": "boram",
    "name": "Boram",
    "aliases": []
  },
  "qri": {
    "id": "qri",
    "name": "Qri",
    "aliases": []
  },
  "soyeon_tara": {
    "id": "soyeon_tara",
    "name": "Soyeon",
    "aliases": [
      "T-ARA Soyeon"
    ]
  },
  "eunjung": {
    "id": "eunjung",
    "name": "Eunjung",
    "aliases": [
      "Elsie"
    ]
  },
  "hyomin": {
    "id": "hyomin",
    "name": "Hyomin",
    "aliases": []
  },
  "jiyeon": {
    "id": "jiyeon",
    "name": "Jiyeon",
    "aliases": []
  },
  "hwayoung": {
    "id": "hwayoung",
    "name": "Hwayoung",
    "aliases": []
  },
  "areum": {
    "id": "areum",
    "name": "Areum",
    "aliases": []
  },
  "victoria": {
    "id": "victoria",
    "name": "Victoria",
    "aliases": []
  },
  "amber": {
    "id": "amber",
    "name": "Amber",
    "aliases": [
      "Amber Liu"
    ]
  },
  "luna": {
    "id": "luna",
    "name": "Luna",
    "aliases": []
  },
  "sulli": {
    "id": "sulli",
    "name": "Sulli",
    "aliases": []
  },
  "krystal": {
    "id": "krystal",
    "name": "Krystal",
    "aliases": [
      "Krystal Jung"
    ]
  },
  "kahi": {
    "id": "kahi",
    "name": "Kahi",
    "aliases": []
  },
  "bekah": {
    "id": "bekah",
    "name": "Bekah",
    "aliases": []
  },
  "soyoung_as": {
    "id": "soyoung_as",
    "name": "Soyoung",
    "aliases": [
      "After School Soyoung"
    ]
  },
  "jooyeon": {
    "id": "jooyeon",
    "name": "Jooyeon",
    "aliases": []
  },
  "jungah": {
    "id": "jungah",
    "name": "Jungah",
    "aliases": []
  },
  "uee": {
    "id": "uee",
    "name": "Uee",
    "aliases": [
      "UEE"
    ]
  },
  "raina": {
    "id": "raina",
    "name": "Raina",
    "aliases": []
  },
  "nana": {
    "id": "nana",
    "name": "Nana",
    "aliases": []
  },
  "lizzy": {
    "id": "lizzy",
    "name": "Lizzy",
    "aliases": []
  },
  "e_young": {
    "id": "e_young",
    "name": "E-Young",
    "aliases": [
      "Eyoung"
    ]
  },
  "kaeun": {
    "id": "kaeun",
    "name": "Kaeun",
    "aliases": []
  },
  "jei": {
    "id": "jei",
    "name": "Jei",
    "aliases": []
  },
  "linzy": {
    "id": "linzy",
    "name": "Linzy",
    "aliases": []
  },
  "hyemi": {
    "id": "hyemi",
    "name": "Hyemi",
    "aliases": []
  },
  "cao_lu": {
    "id": "cao_lu",
    "name": "Cao Lu",
    "aliases": []
  },
  "yezi": {
    "id": "yezi",
    "name": "Yezi",
    "aliases": []
  },
  "cheska": {
    "id": "cheska",
    "name": "Cheska",
    "aliases": []
  },
  "seunghee": {
    "id": "seunghee",
    "name": "Seunghee",
    "aliases": []
  },
  "yujin_clc": {
    "id": "yujin_clc",
    "name": "Yujin",
    "aliases": [
      "CLC Yujin",
      "Choi Yujin",
      "Kep1er Yujin"
    ]
  },
  "seungyeon": {
    "id": "seungyeon",
    "name": "Seungyeon",
    "aliases": []
  },
  "sorn": {
    "id": "sorn",
    "name": "Sorn",
    "aliases": []
  },
  "yeeun": {
    "id": "yeeun",
    "name": "Yeeun",
    "aliases": []
  },
  "elkie": {
    "id": "elkie",
    "name": "Elkie",
    "aliases": []
  },
  "eunbin": {
    "id": "eunbin",
    "name": "Eunbin",
    "aliases": []
  },
  "soojin": {
    "id": "soojin",
    "name": "Soojin",
    "aliases": [
      "SOOJIN"
    ]
  },
  "seulgi": {
    "id": "seulgi",
    "name": "Seulgi",
    "aliases": [
      "SEULGI"
    ]
  },
  "miyeon_idle": {
    "id": "miyeon_idle",
    "name": "Miyeon",
    "aliases": [
      "Cho Miyeon"
    ]
  },
  "minnie_idle": {
    "id": "minnie_idle",
    "name": "Minnie",
    "aliases": [
      "Nicha Yontararak"
    ]
  },
  "soyeon_idle": {
    "id": "soyeon_idle",
    "name": "Soyeon",
    "aliases": [
      "Jeon Soyeon"
    ]
  },
  "yuqi_idle": {
    "id": "yuqi_idle",
    "name": "Yuqi",
    "aliases": [
      "Song Yuqi"
    ]
  },
  "shuhua_idle": {
    "id": "shuhua_idle",
    "name": "Shuhua",
    "aliases": [
      "Yeh Shuhua"
    ]
  },
  "ruka_babymonster": {
    "id": "ruka_babymonster",
    "name": "Ruka",
    "aliases": []
  },
  "pharita": {
    "id": "pharita",
    "name": "Pharita",
    "aliases": []
  },
  "asa_babymonster": {
    "id": "asa_babymonster",
    "name": "Asa",
    "aliases": []
  },
  "ahyeon": {
    "id": "ahyeon",
    "name": "Ahyeon",
    "aliases": []
  },
  "rami_babymonster": {
    "id": "rami_babymonster",
    "name": "Rami",
    "aliases": []
  },
  "rora": {
    "id": "rora",
    "name": "Rora",
    "aliases": []
  },
  "chiquita": {
    "id": "chiquita",
    "name": "Chiquita",
    "aliases": []
  },
  "sojin_girlsday": {
    "id": "sojin_girlsday",
    "name": "Sojin",
    "aliases": []
  },
  "yura_girlsday": {
    "id": "yura_girlsday",
    "name": "Yura",
    "aliases": []
  },
  "minah_girlsday": {
    "id": "minah_girlsday",
    "name": "Minah",
    "aliases": []
  },
  "hyeri_girlsday": {
    "id": "hyeri_girlsday",
    "name": "Hyeri",
    "aliases": []
  },
  "jihae_girlsday": {
    "id": "jihae_girlsday",
    "name": "Jihae",
    "aliases": []
  },
  "jisun_girlsday": {
    "id": "jisun_girlsday",
    "name": "Jisun",
    "aliases": []
  },
  "jiin_girlsday": {
    "id": "jiin_girlsday",
    "name": "Jiin",
    "aliases": []
  },
  "jay_b": {
    "id": "jay_b",
    "name": "Jay B",
    "aliases": [
      "JB"
    ]
  },
  "mark_got7": {
    "id": "mark_got7",
    "name": "Mark",
    "aliases": [
      "Mark Tuan"
    ]
  },
  "jackson_got7": {
    "id": "jackson_got7",
    "name": "Jackson",
    "aliases": [
      "Jackson Wang"
    ]
  },
  "jinyoung_got7": {
    "id": "jinyoung_got7",
    "name": "Jinyoung",
    "aliases": [
      "Park Jinyoung"
    ]
  },
  "youngjae_got7": {
    "id": "youngjae_got7",
    "name": "Youngjae",
    "aliases": []
  },
  "bambam": {
    "id": "bambam",
    "name": "BamBam",
    "aliases": []
  },
  "yugyeom": {
    "id": "yugyeom",
    "name": "Yugyeom",
    "aliases": []
  },
  "carmen_h2h": {
    "id": "carmen_h2h",
    "name": "Carmen",
    "aliases": []
  },
  "jiwoo_h2h": {
    "id": "jiwoo_h2h",
    "name": "Jiwoo",
    "aliases": [
      "Hearts2Hearts Jiwoo"
    ]
  },
  "yuha_h2h": {
    "id": "yuha_h2h",
    "name": "Yuha",
    "aliases": []
  },
  "stella_h2h": {
    "id": "stella_h2h",
    "name": "Stella",
    "aliases": []
  },
  "juun_h2h": {
    "id": "juun_h2h",
    "name": "Juun",
    "aliases": []
  },
  "a_na_h2h": {
    "id": "a_na_h2h",
    "name": "A-na",
    "aliases": [
      "A Na"
    ]
  },
  "ian_h2h": {
    "id": "ian_h2h",
    "name": "Ian",
    "aliases": [
      "Hearts2Hearts Ian"
    ]
  },
  "ye_on_h2h": {
    "id": "ye_on_h2h",
    "name": "Ye-on",
    "aliases": [
      "Yeon",
      "Ye On"
    ]
  },
  "j_seph": {
    "id": "j_seph",
    "name": "J.Seph",
    "aliases": [
      "J Seph",
      "J.Seph"
    ]
  },
  "bm_kard": {
    "id": "bm_kard",
    "name": "BM",
    "aliases": []
  },
  "somin_kard": {
    "id": "somin_kard",
    "name": "Somin",
    "aliases": [
      "KARD Somin"
    ]
  },
  "jiwoo_kard": {
    "id": "jiwoo_kard",
    "name": "Jiwoo",
    "aliases": [
      "KARD Jiwoo"
    ]
  },
  "xiaoting": {
    "id": "xiaoting",
    "name": "Xiaoting",
    "aliases": [
      "Shen Xiaoting"
    ]
  },
  "chaehyun": {
    "id": "chaehyun",
    "name": "Chaehyun",
    "aliases": [
      "Kim Chaehyun"
    ]
  },
  "dayeon_kep1er": {
    "id": "dayeon_kep1er",
    "name": "Dayeon",
    "aliases": [
      "Kim Dayeon"
    ]
  },
  "hikaru_kep1er": {
    "id": "hikaru_kep1er",
    "name": "Hikaru",
    "aliases": [
      "Ezaki Hikaru"
    ]
  },
  "huening_bahiyyih": {
    "id": "huening_bahiyyih",
    "name": "Huening Bahiyyih",
    "aliases": [
      "Bahiyyih"
    ]
  },
  "youngeun_kep1er": {
    "id": "youngeun_kep1er",
    "name": "Youngeun",
    "aliases": [
      "Seo Youngeun"
    ]
  },
  "mashiro": {
    "id": "mashiro",
    "name": "Mashiro",
    "aliases": [
      "Sakamoto Mashiro"
    ]
  },
  "yeseo": {
    "id": "yeseo",
    "name": "Yeseo",
    "aliases": [
      "Kang Yeseo"
    ]
  },
  "jiyu_kiiikiii": {
    "id": "jiyu_kiiikiii",
    "name": "Jiyu",
    "aliases": []
  },
  "leesol": {
    "id": "leesol",
    "name": "Leesol",
    "aliases": []
  },
  "sui_kiiikiii": {
    "id": "sui_kiiikiii",
    "name": "Sui",
    "aliases": []
  },
  "haum": {
    "id": "haum",
    "name": "Haum",
    "aliases": []
  },
  "kya": {
    "id": "kya",
    "name": "Kya",
    "aliases": []
  },
  "sohee_nature": {
    "id": "sohee_nature",
    "name": "Sohee",
    "aliases": []
  },
  "saebom": {
    "id": "saebom",
    "name": "Saebom",
    "aliases": []
  },
  "aurora_nature": {
    "id": "aurora_nature",
    "name": "Aurora",
    "aliases": []
  },
  "lu_nature": {
    "id": "lu_nature",
    "name": "Lu",
    "aliases": []
  },
  "chaebin": {
    "id": "chaebin",
    "name": "Chaebin",
    "aliases": []
  },
  "haru_nature": {
    "id": "haru_nature",
    "name": "Haru",
    "aliases": []
  },
  "loha": {
    "id": "loha",
    "name": "Loha",
    "aliases": []
  },
  "uchae": {
    "id": "uchae",
    "name": "Uchae",
    "aliases": []
  },
  "sunshine_nature": {
    "id": "sunshine_nature",
    "name": "Sunshine",
    "aliases": []
  },
  "gaga_nature": {
    "id": "gaga_nature",
    "name": "Gaga",
    "aliases": []
  },
  "renjun": {
    "id": "renjun",
    "name": "Renjun",
    "aliases": []
  },
  "jeno": {
    "id": "jeno",
    "name": "Jeno",
    "aliases": []
  },
  "haechan": {
    "id": "haechan",
    "name": "Haechan",
    "aliases": []
  },
  "jaemin": {
    "id": "jaemin",
    "name": "Jaemin",
    "aliases": []
  },
  "chenle": {
    "id": "chenle",
    "name": "Chenle",
    "aliases": []
  },
  "jisung_nct": {
    "id": "jisung_nct",
    "name": "Jisung",
    "aliases": [
      "NCT Jisung"
    ]
  },
  "mark_nct": {
    "id": "mark_nct",
    "name": "Mark",
    "aliases": [
      "Mark Lee",
      "NCT Mark"
    ]
  },
  "mabelz": {
    "id": "mabelz",
    "name": "Mabelz",
    "aliases": [
      "Mabel"
    ]
  },
  "pimma": {
    "id": "pimma",
    "name": "Pimma",
    "aliases": []
  },
  "ingkho": {
    "id": "ingkho",
    "name": "Ingkho",
    "aliases": []
  },
  "yejun_plave": {
    "id": "yejun_plave",
    "name": "Yejun",
    "aliases": []
  },
  "noah_plave": {
    "id": "noah_plave",
    "name": "Noah",
    "aliases": []
  },
  "bamby": {
    "id": "bamby",
    "name": "Bamby",
    "aliases": []
  },
  "eunho_plave": {
    "id": "eunho_plave",
    "name": "Eunho",
    "aliases": []
  },
  "hamin_plave": {
    "id": "hamin_plave",
    "name": "Hamin",
    "aliases": []
  },
  "woni_rescene": {
    "id": "woni_rescene",
    "name": "Woni",
    "aliases": []
  },
  "liv_rescene": {
    "id": "liv_rescene",
    "name": "Liv",
    "aliases": []
  },
  "minami_rescene": {
    "id": "minami_rescene",
    "name": "Minami",
    "aliases": []
  },
  "may_rescene": {
    "id": "may_rescene",
    "name": "May",
    "aliases": []
  },
  "zena_rescene": {
    "id": "zena_rescene",
    "name": "Zena",
    "aliases": []
  },
  "scoups": {
    "id": "scoups",
    "name": "S.Coups",
    "aliases": [
      "S Coups"
    ]
  },
  "jeonghan": {
    "id": "jeonghan",
    "name": "Jeonghan",
    "aliases": []
  },
  "joshua_seventeen": {
    "id": "joshua_seventeen",
    "name": "Joshua",
    "aliases": [
      "Joshua Hong"
    ]
  },
  "jun_seventeen": {
    "id": "jun_seventeen",
    "name": "Jun",
    "aliases": [
      "SEVENTEEN Jun"
    ]
  },
  "hoshi": {
    "id": "hoshi",
    "name": "Hoshi",
    "aliases": []
  },
  "wonwoo": {
    "id": "wonwoo",
    "name": "Wonwoo",
    "aliases": []
  },
  "woozi": {
    "id": "woozi",
    "name": "Woozi",
    "aliases": []
  },
  "dk_seventeen": {
    "id": "dk_seventeen",
    "name": "DK",
    "aliases": [
      "Dokyeom",
      "Lee Seokmin"
    ]
  },
  "mingyu": {
    "id": "mingyu",
    "name": "Mingyu",
    "aliases": []
  },
  "the8": {
    "id": "the8",
    "name": "The8",
    "aliases": [
      "THE 8",
      "Xu Minghao"
    ]
  },
  "seungkwan": {
    "id": "seungkwan",
    "name": "Seungkwan",
    "aliases": [
      "Boo Seungkwan"
    ]
  },
  "vernon": {
    "id": "vernon",
    "name": "Vernon",
    "aliases": []
  },
  "dino": {
    "id": "dino",
    "name": "Dino",
    "aliases": []
  },
  "onew": {
    "id": "onew",
    "name": "Onew",
    "aliases": []
  },
  "key_shinee": {
    "id": "key_shinee",
    "name": "Key",
    "aliases": [
      "SHINee Key"
    ]
  },
  "minho_shinee": {
    "id": "minho_shinee",
    "name": "Minho",
    "aliases": [
      "SHINee Minho"
    ]
  },
  "taemin": {
    "id": "taemin",
    "name": "Taemin",
    "aliases": []
  },
  "jonghyun": {
    "id": "jonghyun",
    "name": "Jonghyun",
    "aliases": [
      "Kim Jong-hyun"
    ]
  },
  "sunmi": {
    "id": "sunmi",
    "name": "Sunmi",
    "aliases": [
      "SUNMI",
      "Lee Sun-mi"
    ]
  },
  "triples_seoyeon": {
    "id": "triples_seoyeon",
    "name": "SeoYeon",
    "aliases": [
      "Seoyeon"
    ]
  },
  "triples_hyerin": {
    "id": "triples_hyerin",
    "name": "HyeRin",
    "aliases": [
      "Hyerin"
    ]
  },
  "triples_jiwoo": {
    "id": "triples_jiwoo",
    "name": "JiWoo",
    "aliases": [
      "Jiwoo"
    ]
  },
  "triples_chaeyeon": {
    "id": "triples_chaeyeon",
    "name": "ChaeYeon",
    "aliases": [
      "Chaeyeon"
    ]
  },
  "triples_yooyeon": {
    "id": "triples_yooyeon",
    "name": "YooYeon",
    "aliases": [
      "Yooyeon"
    ]
  },
  "triples_soomin": {
    "id": "triples_soomin",
    "name": "SooMin",
    "aliases": [
      "Soomin"
    ]
  },
  "triples_nakyoung": {
    "id": "triples_nakyoung",
    "name": "NaKyoung",
    "aliases": [
      "Nakyoung"
    ]
  },
  "triples_yubin": {
    "id": "triples_yubin",
    "name": "YuBin",
    "aliases": [
      "Yubin"
    ]
  },
  "triples_kaede": {
    "id": "triples_kaede",
    "name": "Kaede",
    "aliases": []
  },
  "triples_dahyun": {
    "id": "triples_dahyun",
    "name": "DaHyun",
    "aliases": [
      "Dahyun"
    ]
  },
  "triples_kotone": {
    "id": "triples_kotone",
    "name": "Kotone",
    "aliases": []
  },
  "triples_yeonji": {
    "id": "triples_yeonji",
    "name": "YeonJi",
    "aliases": [
      "Yeonji"
    ]
  },
  "triples_nien": {
    "id": "triples_nien",
    "name": "Nien",
    "aliases": []
  },
  "triples_sohyun": {
    "id": "triples_sohyun",
    "name": "SoHyun",
    "aliases": [
      "Sohyun"
    ]
  },
  "triples_xinyu": {
    "id": "triples_xinyu",
    "name": "Xinyu",
    "aliases": []
  },
  "triples_mayu": {
    "id": "triples_mayu",
    "name": "Mayu",
    "aliases": []
  },
  "triples_lynn": {
    "id": "triples_lynn",
    "name": "Lynn",
    "aliases": []
  },
  "triples_joobin": {
    "id": "triples_joobin",
    "name": "JooBin",
    "aliases": [
      "Joobin",
      "Joo Bin"
    ]
  },
  "triples_hayeon": {
    "id": "triples_hayeon",
    "name": "HaYeon",
    "aliases": [
      "Hayeon"
    ]
  },
  "triples_shion": {
    "id": "triples_shion",
    "name": "ShiOn",
    "aliases": [
      "Shion"
    ]
  },
  "triples_chaewon": {
    "id": "triples_chaewon",
    "name": "ChaeWon",
    "aliases": [
      "Chaewon"
    ]
  },
  "triples_sullin": {
    "id": "triples_sullin",
    "name": "Sullin",
    "aliases": []
  },
  "triples_seoah": {
    "id": "triples_seoah",
    "name": "SeoAh",
    "aliases": [
      "Seoah"
    ]
  },
  "triples_jiyeon": {
    "id": "triples_jiyeon",
    "name": "JiYeon",
    "aliases": [
      "Jiyeon"
    ]
  },
  "boa": {
    "id": "boa",
    "name": "BoA",
    "aliases": [
      "BOA"
    ]
  },
  "wendy": {
    "id": "wendy",
    "name": "Wendy",
    "aliases": [
      "Red Velvet Wendy"
    ]
  }
};

  function normalizeName(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replaceAll("’", "'")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  Object.values(people).forEach(person => {
    person.groupIds = [];
    person.currentGroupIds = [];
    person.formerGroupIds = [];
  });

  Object.values(groups).forEach(group => {
    (group.memberIds || []).forEach(personId => {
      const person = people[personId];
      if (!person) {
        console.warn(`[HID_DATA] Missing person record for ${personId} used by ${group.id}`);
        return;
      }
      if (!person.groupIds.includes(group.id)) person.groupIds.push(group.id);
    });

    (group.currentMemberIds || []).forEach(personId => {
      const person = people[personId];
      if (person && !person.currentGroupIds.includes(group.id)) person.currentGroupIds.push(group.id);
    });

    (group.formerMemberIds || []).forEach(personId => {
      const person = people[personId];
      if (person && !person.formerGroupIds.includes(group.id)) person.formerGroupIds.push(group.id);
    });
  });

  function resolvePersonInGroup(groupId, rawName) {
    const group = groups[groupId];
    if (!group) return null;
    const key = normalizeName(rawName);
    if (!key) return null;

    const candidates = (group.memberIds || []).filter(personId => {
      const person = people[personId];
      if (!person) return false;
      return [person.name, ...(person.aliases || [])].map(normalizeName).includes(key);
    });

    return candidates.length === 1 ? candidates[0] : null;
  }

  function getPerson(personId) {
    return people[personId] || null;
  }

  const soloArtistAliases = {
  "jennie": "jennie",
  "yena": "choi_yena",
  "soojin": "soojin",
  "seulgi": "seulgi",
  "lee chae yeon": "lee_chaeyeon",
  "lee chaeyeon": "lee_chaeyeon",
  "sunmi": "sunmi"
};

  function resolveSoloArtistPersonId(sourceArtistName) {
    return soloArtistAliases[normalizeName(sourceArtistName)] || null;
  }

  root.people = people;
  root.getPerson = getPerson;
  root.resolvePersonInGroup = resolvePersonInGroup;
  root.resolveSoloArtistPersonId = resolveSoloArtistPersonId;
  root.normalizePersonName = normalizeName;
})();
