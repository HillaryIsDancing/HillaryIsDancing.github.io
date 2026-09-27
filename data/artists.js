// data/artists.js
// Person identity database.
// A person has ONE canonical ID even when they belong to multiple groups/sub-units.
// Group affiliations are derived from groups.js, including current vs former membership.

(() => {
  const root = window.HID_DATA = window.HID_DATA || {};
  const groups = root.groups || {};

  const people = {
    // TWICE / MISAMO
    nayeon: { id: "nayeon", name: "Nayeon", aliases: [] },
    jeongyeon: { id: "jeongyeon", name: "Jeongyeon", aliases: ["Jungyeon"] },
    momo: { id: "momo", name: "Momo", aliases: [] },
    sana: { id: "sana", name: "Sana", aliases: [] },
    jihyo: { id: "jihyo", name: "Jihyo", aliases: [] },
    mina: { id: "mina", name: "Mina", aliases: [] },
    dahyun: { id: "dahyun", name: "Dahyun", aliases: ["Da Hyun", "Da-hyun"] },
    chaeyoung: { id: "chaeyoung", name: "Chaeyoung", aliases: [] },
    tzuyu: { id: "tzuyu", name: "Tzuyu", aliases: [] },

    // BLACKPINK
    jisoo: { id: "jisoo", name: "Jisoo", aliases: [] },
    jennie: { id: "jennie", name: "Jennie", aliases: ["JENNIE"] },
    rose: { id: "rose", name: "Rosé", aliases: ["Rose", "ROSÉ"] },
    lisa: { id: "lisa", name: "Lisa", aliases: [] },

    // aespa
    karina: { id: "karina", name: "Karina", aliases: [] },
    giselle: { id: "giselle", name: "Giselle", aliases: [] },
    winter: { id: "winter", name: "Winter", aliases: [] },
    ningning: { id: "ningning", name: "Ningning", aliases: ["Ning Ning"] },

    // LE SSERAFIM / IZ*ONE
    sakura: { id: "sakura", name: "Sakura", aliases: ["Miyawaki Sakura"] },
    kim_chaewon: { id: "kim_chaewon", name: "Chaewon", aliases: ["Kim Chaewon"] },
    huh_yunjin: { id: "huh_yunjin", name: "Yunjin", aliases: ["Huh Yunjin"] },
    kazuha: { id: "kazuha", name: "Kazuha", aliases: [] },
    hong_eunchae: { id: "hong_eunchae", name: "Eunchae", aliases: ["Hong Eunchae"] },
    kim_garam: { id: "kim_garam", name: "Garam", aliases: ["Kim Garam"] },

    // GFRIEND / VIVIZ
    sowon: { id: "sowon", name: "Sowon", aliases: [] },
    yerin: { id: "yerin", name: "Yerin", aliases: [] },
    eunha: { id: "eunha", name: "Eunha", aliases: [] },
    yuju: { id: "yuju", name: "Yuju", aliases: [] },
    sinb: { id: "sinb", name: "SinB", aliases: ["Sinb"] },
    umji: { id: "umji", name: "Umji", aliases: [] },

    // KISS OF LIFE
    julie: { id: "julie", name: "Julie", aliases: [] },
    natty: { id: "natty", name: "Natty", aliases: [] },
    belle: { id: "belle", name: "Belle", aliases: [] },
    haneul: { id: "haneul", name: "Haneul", aliases: [] },

    // FIFTY FIFTY
    keena: { id: "keena", name: "Keena", aliases: [] },
    saena: { id: "saena", name: "Saena", aliases: [] },
    sio: { id: "sio", name: "Sio", aliases: [] },
    aran: { id: "aran", name: "Aran", aliases: [] },
    chanelle_moon: { id: "chanelle_moon", name: "Chanelle Moon", aliases: ["Chanelle"] },
    yewon: { id: "yewon", name: "Yewon", aliases: [] },
    hana: { id: "hana", name: "Hana", aliases: [] },
    athena: { id: "athena", name: "Athena", aliases: [] },

    // NewJeans
    minji: { id: "minji", name: "Minji", aliases: [] },
    hanni: { id: "hanni", name: "Hanni", aliases: [] },
    danielle: { id: "danielle", name: "Danielle", aliases: [] },
    haerin: { id: "haerin", name: "Haerin", aliases: [] },
    hyein: { id: "hyein", name: "Hyein", aliases: [] },

    // WJSN / CHOCOME
    seola: { id: "seola", name: "Seola", aliases: [] },
    xuanyi: { id: "xuanyi", name: "Xuanyi", aliases: ["Xuan Yi"] },
    bona: { id: "bona", name: "Bona", aliases: [] },
    exy: { id: "exy", name: "Exy", aliases: [] },
    soobin: { id: "soobin", name: "Soobin", aliases: [] },
    luda: { id: "luda", name: "Luda", aliases: [] },
    dawon: { id: "dawon", name: "Dawon", aliases: [] },
    eunseo: { id: "eunseo", name: "Eunseo", aliases: [] },
    cheng_xiao: { id: "cheng_xiao", name: "Cheng Xiao", aliases: ["Chengxiao"] },
    meiqi: { id: "meiqi", name: "Meiqi", aliases: ["Mei Qi"] },
    yeoreum: { id: "yeoreum", name: "Yeoreum", aliases: [] },
    dayoung: { id: "dayoung", name: "Dayoung", aliases: [] },
    yeonjung: { id: "yeonjung", name: "Yeonjung", aliases: [] },

    // Girls' Generation
    taeyeon: { id: "taeyeon", name: "Taeyeon", aliases: [] },
    sunny: { id: "sunny", name: "Sunny", aliases: [] },
    tiffany: { id: "tiffany", name: "Tiffany", aliases: ["Tiffany Young"] },
    hyoyeon: { id: "hyoyeon", name: "Hyoyeon", aliases: ["HYO"] },
    yuri: { id: "yuri", name: "Yuri", aliases: [] },
    sooyoung: { id: "sooyoung", name: "Sooyoung", aliases: [] },
    yoona: { id: "yoona", name: "Yoona", aliases: [] },
    seohyun: { id: "seohyun", name: "Seohyun", aliases: [] },
    jessica: { id: "jessica", name: "Jessica", aliases: ["Jessica Jung"] },

    // IZ*ONE remainder
    kwon_eunbi: { id: "kwon_eunbi", name: "Eunbi", aliases: ["Kwon Eunbi"] },
    kang_hyewon: { id: "kang_hyewon", name: "Hyewon", aliases: ["Kang Hyewon"] },
    choi_yena: { id: "choi_yena", name: "Yena", aliases: ["Choi Yena", "YENA"] },
    lee_chaeyeon: { id: "lee_chaeyeon", name: "Lee Chaeyeon", aliases: ["Chaeyeon", "LEE CHAE YEON"] },
    kim_minju: { id: "kim_minju", name: "Minju", aliases: ["Kim Minju"] },
    yabuki_nako: { id: "yabuki_nako", name: "Nako", aliases: ["Yabuki Nako"] },
    honda_hitomi: { id: "honda_hitomi", name: "Hitomi", aliases: ["Honda Hitomi"] },
    jo_yuri: { id: "jo_yuri", name: "Yuri", aliases: ["Jo Yuri"] },
        jang_wonyoung: { id: "jang_wonyoung", name: "Wonyoung", aliases: ["Jang Wonyoung"] },

    // Purple Kiss
    na_goeun: { id: "na_goeun", name: "Goeun", aliases: ["Na Goeun"] },
    dosie: { id: "dosie", name: "Dosie", aliases: [] },
    ireh: { id: "ireh", name: "Ireh", aliases: [] },
    yuki: { id: "yuki", name: "Yuki", aliases: [] },
    chaein: { id: "chaein", name: "Chaein", aliases: [] },
    swan: { id: "swan", name: "Swan", aliases: [] },
    park_jieun: { id: "park_jieun", name: "Jieun", aliases: ["Park Jieun"] },

    // Dreamcatcher
    jiu: { id: "jiu", name: "JiU", aliases: ["Jiu"] },
    sua: { id: "sua", name: "SuA", aliases: ["Sua"] },
    siyeon: { id: "siyeon", name: "Siyeon", aliases: [] },
    handong: { id: "handong", name: "Handong", aliases: [] },
    yoohyeon: { id: "yoohyeon", name: "Yoohyeon", aliases: ["Yoo Hyeon", "Yoo-hyeon"] },
    dami: { id: "dami", name: "Dami", aliases: [] },
    gahyun: { id: "gahyun", name: "Gahyun", aliases: ["Gahyeon"] },

    // ILLIT
    yunah: { id: "yunah", name: "Yunah", aliases: [] },
    minju_illit: { id: "minju_illit", name: "Minju", aliases: ["ILLIT Minju"] },
    moka: { id: "moka", name: "Moka", aliases: [] },
    wonhee: { id: "wonhee", name: "Wonhee", aliases: [] },
    iroha: { id: "iroha", name: "Iroha", aliases: [] },

    // IVE
    an_yujin: { id: "an_yujin", name: "Yujin", aliases: ["An Yujin", "Ahn Yujin"] },
    gaeul: { id: "gaeul", name: "Gaeul", aliases: [] },
    rei: { id: "rei", name: "Rei", aliases: [] },
    liz: { id: "liz", name: "Liz", aliases: [] },
    leeseo: { id: "leeseo", name: "Leeseo", aliases: [] },

    // STAYC
    sumin: { id: "sumin", name: "Sumin", aliases: [] },
    sieun: { id: "sieun", name: "Sieun", aliases: [] },
    isa: { id: "isa", name: "Isa", aliases: [] },
    seeun: { id: "seeun", name: "Seeun", aliases: [] },
    yoon: { id: "yoon", name: "Yoon", aliases: [] },
    j: { id: "j", name: "J", aliases: [] },

    // MAMAMOO
    solar: { id: "solar", name: "Solar", aliases: [] },
    moonbyul: { id: "moonbyul", name: "Moonbyul", aliases: [] },
    wheein: { id: "wheein", name: "Wheein", aliases: [] },
    hwasa: { id: "hwasa", name: "Hwasa", aliases: [] },

    // EVERGLOW
    e_u: { id: "e_u", name: "E:U", aliases: ["EU"] },
    sihyeon: { id: "sihyeon", name: "Sihyeon", aliases: [] },
    mia: { id: "mia", name: "Mia", aliases: [] },
    onda: { id: "onda", name: "Onda", aliases: [] },
    aisha: { id: "aisha", name: "Aisha", aliases: [] },
    yiren: { id: "yiren", name: "Yiren", aliases: [] },

    // LOONA
    heejin: { id: "heejin", name: "HeeJin", aliases: ["Heejin"] },
    hyunjin: { id: "hyunjin", name: "HyunJin", aliases: ["Hyunjin"] },
    haseul: { id: "haseul", name: "HaSeul", aliases: ["Haseul"] },
    yeojin: { id: "yeojin", name: "YeoJin", aliases: ["Yeojin"] },
    vivi: { id: "vivi", name: "ViVi", aliases: ["Vivi"] },
    kim_lip: { id: "kim_lip", name: "Kim Lip", aliases: [] },
    jinsoul: { id: "jinsoul", name: "JinSoul", aliases: ["Jinsoul"] },
    choerry: { id: "choerry", name: "Choerry", aliases: [] },
    yves: { id: "yves", name: "Yves", aliases: [] },
    chuu: { id: "chuu", name: "Chuu", aliases: [] },
    gowon: { id: "gowon", name: "Go Won", aliases: ["Gowon"] },
    hyeju: { id: "hyeju", name: "HyeJu", aliases: ["Olivia Hye", "Hyeju"] },

    // MEOVV
    sooin: { id: "sooin", name: "Sooin", aliases: [] },
    gawon: { id: "gawon", name: "Gawon", aliases: [] },
    anna: { id: "anna", name: "Anna", aliases: [] },
    narin: { id: "narin", name: "Narin", aliases: [] },
    ella: { id: "ella", name: "Ella", aliases: [] },

    // KATSEYE
    sophia: { id: "sophia", name: "Sophia", aliases: [] },
    manon: { id: "manon", name: "Manon", aliases: [] },
    daniela: { id: "daniela", name: "Daniela", aliases: [] },
    lara: { id: "lara", name: "Lara", aliases: [] },
    megan: { id: "megan", name: "Megan", aliases: [] },
    yoonchae: { id: "yoonchae", name: "Yoonchae", aliases: [] },

    // XG
    jurin: { id: "jurin", name: "Jurin", aliases: ["JURIN"] },
    chisa: { id: "chisa", name: "Chisa", aliases: [] },
    hinata: { id: "hinata", name: "Hinata", aliases: [] },
    harvey: { id: "harvey", name: "Harvey", aliases: [] },
    juria: { id: "juria", name: "Juria", aliases: [] },
    maya: { id: "maya", name: "Maya", aliases: [] },
    cocona: { id: "cocona", name: "Cocona", aliases: [] },

    // NMIXX
    lily: { id: "lily", name: "Lily", aliases: [] },
    haewon: { id: "haewon", name: "Haewon", aliases: [] },
    sullyoon: { id: "sullyoon", name: "Sullyoon", aliases: [] },
    bae: { id: "bae", name: "Bae", aliases: [] },
    jiwoo: { id: "jiwoo", name: "Jiwoo", aliases: [] },
    kyujin: { id: "kyujin", name: "Kyujin", aliases: [] },
    jinni: { id: "jinni", name: "Jini", aliases: ["Jinni"] },

    // ITZY
    yeji: { id: "yeji", name: "Yeji", aliases: [] },
    lia: { id: "lia", name: "Lia", aliases: [] },
    ryujin: { id: "ryujin", name: "Ryujin", aliases: [] },
    chaeryeong: { id: "chaeryeong", name: "Chaeryeong", aliases: [] },
    yuna: { id: "yuna", name: "Yuna", aliases: [] },

    // T-ARA
    boram: { id: "boram", name: "Boram", aliases: [] },
    qri: { id: "qri", name: "Qri", aliases: [] },
    soyeon_tara: { id: "soyeon_tara", name: "Soyeon", aliases: ["T-ARA Soyeon"] },
    eunjung: { id: "eunjung", name: "Eunjung", aliases: ["Elsie"] },
    hyomin: { id: "hyomin", name: "Hyomin", aliases: [] },
    jiyeon: { id: "jiyeon", name: "Jiyeon", aliases: [] },
    hwayoung: { id: "hwayoung", name: "Hwayoung", aliases: [] },
    areum: { id: "areum", name: "Areum", aliases: [] },

    // f(x)
    victoria: { id: "victoria", name: "Victoria", aliases: [] },
    amber: { id: "amber", name: "Amber", aliases: ["Amber Liu"] },
    luna: { id: "luna", name: "Luna", aliases: [] },
    sulli: { id: "sulli", name: "Sulli", aliases: [] },
    krystal: { id: "krystal", name: "Krystal", aliases: ["Krystal Jung"] },

    // AFTER SCHOOL
    kahi: { id: "kahi", name: "Kahi", aliases: [] },
    bekah: { id: "bekah", name: "Bekah", aliases: [] },
    soyoung_as: { id: "soyoung_as", name: "Soyoung", aliases: ["After School Soyoung"] },
    jooyeon: { id: "jooyeon", name: "Jooyeon", aliases: [] },
    jungah: { id: "jungah", name: "Jungah", aliases: [] },
    uee: { id: "uee", name: "Uee", aliases: ["UEE"] },
    raina: { id: "raina", name: "Raina", aliases: [] },
    nana: { id: "nana", name: "Nana", aliases: [] },
    lizzy: { id: "lizzy", name: "Lizzy", aliases: [] },
    e_young: { id: "e_young", name: "E-Young", aliases: ["Eyoung"] },
    kaeun: { id: "kaeun", name: "Kaeun", aliases: [] },

    // FIESTAR
    jei: { id: "jei", name: "Jei", aliases: [] },
    linzy: { id: "linzy", name: "Linzy", aliases: [] },
    hyemi: { id: "hyemi", name: "Hyemi", aliases: [] },
    cao_lu: { id: "cao_lu", name: "Cao Lu", aliases: [] },
    yezi: { id: "yezi", name: "Yezi", aliases: [] },
    cheska: { id: "cheska", name: "Cheska", aliases: [] },

    // CLC
    seunghee: { id: "seunghee", name: "Seunghee", aliases: [] },
    yujin_clc: { id: "yujin_clc", name: "Yujin", aliases: ["CLC Yujin"] },
    seungyeon: { id: "seungyeon", name: "Seungyeon", aliases: [] },
    sorn: { id: "sorn", name: "Sorn", aliases: [] },
    yeeun: { id: "yeeun", name: "Yeeun", aliases: [] },
    elkie: { id: "elkie", name: "Elkie", aliases: [] },
    eunbin: { id: "eunbin", name: "Eunbin", aliases: [] },

    // Common solo-stage artists already present in the current website data
    soojin: { id: "soojin", name: "Soojin", aliases: ["SOOJIN"] },
    seulgi: { id: "seulgi", name: "Seulgi", aliases: ["SEULGI"] }
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

  // Build memberships from groups.js so membership truth lives in one place.
  // groupIds = every official historical affiliation.
  // currentGroupIds / formerGroupIds preserve present-vs-former membership separately.
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

      if (!person.groupIds.includes(group.id)) {
        person.groupIds.push(group.id);
      }
    });

    (group.currentMemberIds || []).forEach(personId => {
      const person = people[personId];
      if (person && !person.currentGroupIds.includes(group.id)) {
        person.currentGroupIds.push(group.id);
      }
    });

    (group.formerMemberIds || []).forEach(personId => {
      const person = people[personId];
      if (person && !person.formerGroupIds.includes(group.id)) {
        person.formerGroupIds.push(group.id);
      }
    });
  });

  const globalNameIndex = new Map();

  Object.values(people).forEach(person => {
    [person.name, ...(person.aliases || [])].forEach(name => {
      const key = normalizeName(name);
      if (!key) return;
      if (!globalNameIndex.has(key)) globalNameIndex.set(key, []);
      globalNameIndex.get(key).push(person.id);
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

      return [person.name, ...(person.aliases || [])]
        .map(normalizeName)
        .includes(key);
    });

    return candidates.length === 1 ? candidates[0] : null;
  }

  function resolvePersonGlobally(rawName) {
    const matches = globalNameIndex.get(normalizeName(rawName)) || [];
    return matches.length === 1 ? matches[0] : null;
  }

  function getPerson(personId) {
    return people[personId] || null;
  }

  // When the source artist itself is a solo act, this can resolve the person
  // even if dancerRole is blank.
  const soloArtistAliases = {
    "jennie": "jennie",
    "yena": "choi_yena",
    "soojin": "soojin",
    "seulgi": "seulgi",
    "lee chae yeon": "lee_chaeyeon",
    "lee chaeyeon": "lee_chaeyeon"
  };

  function resolveSoloArtistPersonId(sourceArtistName) {
    return soloArtistAliases[normalizeName(sourceArtistName)] || null;
  }

  root.people = people;
  root.getPerson = getPerson;
  root.resolvePersonInGroup = resolvePersonInGroup;
  root.resolvePersonGlobally = resolvePersonGlobally;
  root.resolveSoloArtistPersonId = resolveSoloArtistPersonId;
  root.normalizePersonName = normalizeName;
})();
