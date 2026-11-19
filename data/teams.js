/* =====================================================================
   LCK 스토브리그 데이터
   ---------------------------------------------------------------------
   이 파일만 수정하면 페이지에 반영됩니다.

   season  : 다가오는 시즌. 계약 종료 연도(until)가 season-1 이하이면 '만료'.
   선수    : { pos, nick, name, until, ended, rumor, rumorNote, note }
     pos   : "TOP" | "JGL" | "MID" | "BOT" | "SUP"
     until : 계약 종료 시즌(연도). 모르면 null
     ended : true 로 두면 'FA' (팀이 계약 종료를 공식 발표한 확정 FA)
             없으면 until 기준으로 '만료'(재계약/이적 미정) 또는 'n년' 표시
     rumor : true 로 두면 '미확정' 체크 시에만 표시 (루머/미발표 영입 등)
     rumorNote : '미확정' 체크 시에만 보이는 메모 (예: "→ KRX설", "재계약설")
     note  : 이름 옆 짧은 메모, 항상 표시 (예: "← HLE", "재계약")
   코치진  : { role, nick, name, until, ended, rumor, rumorNote, note }
             role: "감독" | "코치" | "전력분석관" ...
             1군 최대 4명 (LCK 규정: 감독 1 + 코치 최대 3)

   예시)
     { pos: "MID", nick: "Faker", name: "이상혁", until: 2029 },
     { pos: "TOP", nick: "Kiin", name: "김기인", until: 2026, ended: true },        // FA 확정
     { pos: "TOP", nick: "Zeus", name: "최우제", until: null, rumor: true, note: "← HLE" },
   ===================================================================== */

window.STOVE = {
  season: 2027,
  updated: "2026-11-17",

  teams: [
  {
    id: "gen", name: "Gen.G", color: "#aa8a50",
    logo: "assets/logos/gen.png",
    players: [
      { pos: "MID", nick: "Chovy", name: "정지훈", until: 2027 },
      { pos: "BOT", nick: "Ruler", name: "박재혁", until: 2027 },
      { pos: "SUP", nick: "Duro", name: "주민규", until: 2027 },
      { pos: "TOP", nick: "Siwoo", name: "전시우", until: null, rumor: true, note: "← DK" },
      { pos: "JGL", nick: "Sharvel", name: "김단우", until: null, rumor: true, note: "← DNS" },
    ],
    staff: [
      { role: "감독", nick: "Ryu", name: "류상욱", until: 2028 },
      { role: "코치", nick: "Lyn", name: "김다빈", until: 2026, ended: true },
      { role: "코치", nick: "Nova", name: "박찬호", until: 2026, ended: true },
    ],
    second: {
      name: "Gen.G Global Academy",
      players: [
        { pos: "TOP", nick: "Ripple", name: "변종민", until: 2026, ended: true },
        { pos: "JGL", nick: "Courage", name: "전현민", until: 2026, ended: true },
        { pos: "BOT", nick: "MUDAI", name: "이선규", until: 2026, ended: true },
        { pos: "SUP", nick: "Lumos", name: "김재민", until: 2026, ended: true },
        { pos: "SUP", nick: "SIRIUSS", name: "고건", until: 2026, ended: true },
      ],
      staff: [
        { role: "감독", nick: "Jerry", name: "강성준", until: 2026, ended: true },
      ],
    },
  },
  {
    id: "hle", name: "한화생명e스포츠", color: "#f47b20",
    logo: "assets/logos/hle.png",
    players: [
      { pos: "TOP", nick: "Zeus", name: "최우제", until: 2026, ended: true, rumorNote: "→ T1설" },
      { pos: "JGL", nick: "Kanavi", name: "서진혁", until: 2026, ended: true, rumorNote: "→ KRX설" },
      { pos: "MID", nick: "Zeka", name: "김건우", until: 2027 },
      { pos: "BOT", nick: "Gumayusi", name: "이민형", until: 2027 },
      { pos: "SUP", nick: "Delight", name: "유환중", until: 2027 },
      { pos: "SUP", nick: "Career", name: "오형석", until: 2027, note: "← DK" },
      { pos: "TOP", nick: "Kiin", name: "김기인", until: 2027, note: "← GEN" },
      { pos: "TOP", nick: "Siwoo", name: "전시우", until: null, rumor: true, note: "← DK" },
      { pos: "JGL", nick: "Canyon", name: "김건부", until: 2027, note: "← GEN · 1+1(선수)" },
      { pos: "SUP", nick: "Cloud", name: "문현호", until: null, rumor: true, note: "← T1 2군 · Delight와 경합" },
    ],
    staff: [
      { role: "감독", nick: "Homme", name: "윤성영", until: 2026, ended: true },
      { role: "감독", nick: "Mowgli", name: "이재하", until: 2027, note: "코치 → 감독" },
      { role: "코치", nick: "Sin", name: "연형모", until: 2026, ended: true },
      { role: "코치", nick: "Life", name: "김정민", until: null, rumor: true, note: "← DNS (선수)" },
      { role: "코치", nick: "Sonstar", name: "손승익", until: null, rumor: true, note: "← KT" },
    ],
    second: {
      name: "Hanwha Life Esports Challengers",
      players: [
        { pos: "TOP", nick: "Panther", name: "박지호", until: 2026 },
        { pos: "JGL", nick: "Jackal", name: "이수민", until: 2026 },
        { pos: "MID", nick: "Cracker", name: "이정욱", until: 2026, ended: true },
        { pos: "MID", nick: "Valiant", name: "한강현", until: 2026, ended: true },
        { pos: "BOT", nick: "Pyeonsik", name: "편민기", until: 2026 },
      ],
      staff: [
        { role: "감독", nick: "Sensation", name: "김동현", until: 2027 },
      ],
    },
  },
  {
    id: "t1", name: "T1", color: "#e4002b",
    logo: "assets/logos/t1.png",
    players: [
      { pos: "TOP", nick: "Doran", name: "최현준", until: 2026, ended: true, rumorNote: "→ KRX설" },
      { pos: "JGL", nick: "Oner", name: "문현준", until: 2028 },
      { pos: "MID", nick: "Faker", name: "이상혁", until: 2029 },
      { pos: "BOT", nick: "Peyz", name: "김수환", until: 2028 },
      { pos: "SUP", nick: "Keria", name: "류민석", until: 2029 },
      { pos: "TOP", nick: "Zeus", name: "최우제", until: null, rumor: true, note: "← HLE" },
    ],
    staff: [
      { role: "감독", nick: "kkOma", name: "김정균", until: 2026 },
      { role: "감독대행", nick: "Tom", name: "임재현", until: 2026, rumorNote: "코치 잔류설" },
      { role: "코치", nick: "Mata", name: "조세형", until: 2026 },
      { role: "코치", nick: "Easyhoon", name: "이지훈", until: 2026 },
      { role: "코치", nick: "UmTi", name: "엄성현", until: null, rumor: true },
      { role: "감독", nick: "Roach", name: "김강희", until: null, rumor: true },
      { role: "코치", nick: "Sky", name: "김하늘", until: null, rumor: true },
    ],
    second: {
      name: "T1 Esports Academy",
      players: [
        { pos: "TOP", nick: "Guardian", name: "성태효", until: 2026 },
        { pos: "TOP", nick: "Haetae", name: "심수현", until: 2026, rumorNote: "→ BFX설" },
        { pos: "JGL", nick: "Carim", name: "오재승", until: 2026 },
        { pos: "JGL", nick: "Painter", name: "김은후", until: 2026 },
        { pos: "MID", nick: "Guti", name: "문정환", until: 2026, ended: true },
        { pos: "BOT", nick: "Cypher", name: "김유준", until: 2026, ended: true },
        { pos: "BOT", nick: "Eclipse", name: "김민준", until: 2026 },
        { pos: "SUP", nick: "Cloud", name: "문현호", until: 2026, ended: true, rumorNote: "→ HLE설" },
      ],
      staff: [
        { role: "감독", nick: "DooTi", name: "최두성", until: 2026 },
        { role: "코치", nick: "Nagne", name: "김상문", until: 2026 },
      ],
    },
  },
  {
    id: "kt", name: "KT 롤스터", color: "#e60012",
    logo: "assets/logos/kt.png",
    players: [
      { pos: "TOP", nick: "PerfecT", name: "이승민", until: 2028 },
      { pos: "MID", nick: "Bdd", name: "곽보성", until: 2028 },
      { pos: "BOT", nick: "Jiwoo", name: "정지우", until: 2026, ended: true },
      { pos: "SUP", nick: "Effort", name: "이상호", until: 2026, ended: true },
      { pos: "JGL", nick: "Raptor", name: "전어진", until: 2027, note: "← BFX" },
      { pos: "BOT", nick: "Taeyoon", name: "김태윤", until: null, rumor: true, note: "← BFX" },
      { pos: "SUP", nick: "Kellin", name: "김형규", until: null, rumor: true, note: "← BFX" },
    ],
    staff: [
      { role: "감독", nick: "Score", name: "고동빈", until: 2029 },
      { role: "코치", nick: "Museong", name: "김무성", until: 2027 },
      { role: "코치", nick: "Sonstar", name: "손승익", until: 2026, ended: true, rumorNote: "→ HLE설" },
      { role: "전력분석관", nick: "Highness", name: "박지원", until: null },
    ],
    second: {
      name: "KT Rolster Challengers",
      players: [
        { pos: "TOP", nick: "Sero", name: "안효찬", until: 2027 },
        { pos: "JGL", nick: "Sylvie", name: "이승복", until: 2026, ended: true },
        { pos: "MID", nick: "Hwichan", name: "정휘찬", until: 2027 },
        { pos: "BOT", nick: "FenRir", name: "박강준", until: 2027 },
        { pos: "BOT", nick: "Ghost", name: "장용준", until: 2026, ended: true },
      ],
      staff: [
        { role: "감독", nick: "Spark", name: "강병률", until: 2026, ended: true },
        { role: "코치", nick: "Lilac", name: "전호진", until: 2026, ended: true },
      ],
    },
  },
  {
    id: "dk", name: "디플러스 기아", color: "#20c3b8",
    logo: "assets/logos/dk.png",
    players: [
      { pos: "TOP", nick: "Siwoo", name: "전시우", until: 2027, rumorNote: "→ GEN/HLE설" },
      { pos: "JGL", nick: "Lucid", name: "최용혁", until: 2027 },
      { pos: "MID", nick: "ShowMaker", name: "허수", until: 2026 },
      { pos: "BOT", nick: "Smash", name: "신금재", until: 2026 },
    ],
    staff: [
      { role: "감독", nick: "cvMax", name: "김대호", until: 2026, rumorNote: "→ KRX설" },
      { role: "코치", nick: "Hachani", name: "하승찬", until: 2026 },
      { role: "코치", nick: "PoohManDu", name: "이정현", until: 2026 },
    ],
    second: {
      name: "Dplus Kia Challengers",
      players: [
        { pos: "TOP", nick: "Jaehyuk", name: "권재혁", until: 2027 },
        { pos: "TOP", nick: "Nevid", name: "박민우", until: 2027 },
        { pos: "JGL", nick: "Solid", name: "남현서", until: 2029 },
        { pos: "BOT", nick: "Wayne", name: "황서현", until: 2026, ended: true },
        { pos: "SUP", nick: "Loopy", name: "김동현", until: 2026, ended: true },
      ],
      staff: [
        { role: "감독", nick: "Woong", name: "김선웅", until: 2026 },
        { role: "코치", nick: "Sungmin", name: "고성민", until: 2026 },
      ],
    },
  },
  {
    id: "bfx", name: "BNK 피어엑스", color: "#f5a800",
    logo: "assets/logos/bfx.png",
    players: [
      { pos: "TOP", nick: "Clear", name: "송현민", until: 2026, ended: true },
      { pos: "MID", nick: "Daystar", name: "유지명", until: 2026, ended: true },
      { pos: "MID", nick: "VicLa", name: "이대광", until: 2027 },
      { pos: "BOT", nick: "Taeyoon", name: "김태윤", until: 2026, ended: true, rumorNote: "→ KT설" },
      { pos: "SUP", nick: "Kellin", name: "김형규", until: 2026, ended: true, rumorNote: "→ KT설" },
      { pos: "TOP", nick: "Hoya", name: "윤용호", until: null, rumor: true, note: "Hoya/Burdol/Haetae 중" },
      { pos: "TOP", nick: "Burdol", name: "노태윤", until: null, rumor: true, note: "Hoya/Burdol/Haetae 중" },
      { pos: "TOP", nick: "Haetae", name: "심수현", until: null, rumor: true, note: "← T1 2군 · Hoya/Burdol/Haetae 중" },
      { pos: "JGL", nick: "Vincenzo", name: "하승민", until: 2028, note: "← KRX" },
      { pos: "BOT", nick: "Noah", name: "오현택", until: null, rumor: true },
      { pos: "SUP", nick: "Quantum", name: "손정환", until: null, rumor: true, note: "← DNS 2군" },
    ],
    staff: [
      { role: "총감독", nick: "Edo", name: "박준석", until: null },
      { role: "감독", nick: "Rather", name: "신형섭", until: 2028 },
      { role: "코치", nick: "Lira", name: "남태유", until: 2027 },
    ],
    second: {
      name: "BNK FEARX Youth",
      players: [
        { pos: "TOP", nick: "Kangin", name: "최강인", until: 2026, ended: true },
        { pos: "JGL", nick: "Grizzly", name: "조승훈", until: 2026 },
        { pos: "JGL", nick: "Zephyr", name: "황혁수", until: 2026, ended: true },
        { pos: "MID", nick: "MG", name: "이지훈", until: 2026, ended: true },
        { pos: "BOT", nick: "Slayer", name: "김진영", until: 2026, ended: true },
      ],
      staff: [
        { role: "코치", nick: "Key", name: "김한기", until: 2026 },
      ],
    },
  },
  {
    id: "ns", name: "농심 레드포스", color: "#d7282f",
    logo: "assets/logos/ns.png",
    players: [
      { pos: "TOP", nick: "Kingen", name: "황성훈", until: 2028, note: "재계약" },
      { pos: "JGL", nick: "Sponge", name: "배영준", until: 2026, ended: true },
      { pos: "MID", nick: "Calix", name: "선현빈", until: 2028, note: "재계약" },
      { pos: "MID", nick: "Scout", name: "이예찬", until: 2026, ended: true, rumorNote: "→ KRX설" },
      { pos: "BOT", nick: "Diable", name: "남대근", until: 2026, ended: true },
      { pos: "SUP", nick: "Lehends", name: "손시우", until: 2026, ended: true, rumorNote: "→ DNS설" },
      { pos: "JGL", nick: "Pyosik", name: "홍창현", until: null, rumor: true, note: "← DNS" },
      { pos: "BOT", nick: "Deft", name: "김혁규", until: 2027 },
      { pos: "SUP", nick: "Andil", name: "문관빈", until: null, rumor: true, note: "← KRX" },
    ],
    staff: [
      { role: "감독", nick: "DanDy", name: "최인규", until: 2027 },
      { role: "코치", nick: "Chelly", name: "박승진", until: 2027 },
    ],
    second: {
      name: "Nongshim Esports Academy",
      players: [
        { pos: "TOP", nick: "Janus", name: "엄예준", until: 2027 },
        { pos: "JGL", nick: "MihawK", name: "김주형", until: 2027 },
        { pos: "MID", nick: "Kemish", name: "김시훈", until: 2027, note: "← GEN 2군" },
        { pos: "BOT", nick: "Lucy", name: "현수훈", until: 2027, note: "재계약" },
        { pos: "SUP", nick: "Pleata", name: "손민우", until: 2026, ended: true },
        { pos: "SUP", nick: "Pollu", name: "오동규", until: 2027, note: "← KT 2군" },
      ],
      staff: [
        { role: "코치", nick: "bon0", name: "김기범", until: 2028 },
      ],
    },
  },
  {
    id: "dns", name: "DN 수퍼스", color: "#3d6cf5",
    logo: "assets/logos/dns.webp",
    players: [
      { pos: "TOP", nick: "DuDu", name: "이동주", until: 2028 },
      { pos: "JGL", nick: "Pyosik", name: "홍창현", until: 2026, ended: true, rumorNote: "→ NS설" },
      { pos: "JGL", nick: "Sharvel", name: "김단우", until: 2026, ended: true, rumorNote: "→ GEN설" },
      { pos: "MID", nick: "Clozer", name: "이주현", until: 2026, ended: true },
      { pos: "BOT", nick: "deokdam", name: "서대길", until: 2027 },
      { pos: "SUP", nick: "Bluffing", name: "박규용", until: 2028, note: "← HLE 2군" },
      { pos: "SUP", nick: "Life", name: "김정민", until: 2026, ended: true, rumorNote: "→ HLE 코치설" },
      { pos: "SUP", nick: "Peter", name: "정윤수", until: 2026, ended: true },
      { pos: "JGL", nick: "Cuzz", name: "문우찬", until: 2027, note: "← KT" },
      { pos: "MID", nick: "Ucal", name: "손우현", until: 2027, note: "← KRX" },
      { pos: "SUP", nick: "Lehends", name: "손시우", until: null, rumor: true, note: "← NS" },
    ],
    staff: [
      { role: "감독", nick: "Ggoong", name: "유병준", until: 2028 },
      { role: "코치", nick: "Minit", name: "양현민", until: 2027 },
      { role: "코치", nick: "Crazy", name: "김재희", until: 2027, note: "← NS" },
      { role: "전력분석관", nick: "Millimas", name: "김건우", until: 2026, ended: true },
    ],
    second: {
      name: "DN SOOPers Challengers",
      players: [
        { pos: "TOP", nick: "Lancer", name: "한정흠", until: 2026, ended: true },
        { pos: "JGL", nick: "DDoiV", name: "방문영", until: 2026, ended: true },
        { pos: "MID", nick: "Flip", name: "김상욱", until: 2026 },
        { pos: "BOT", nick: "Enosh", name: "곽규준", until: 2026, ended: true },
        { pos: "SUP", nick: "Quantum", name: "손정환", until: 2026, ended: true, rumorNote: "→ BFX설" },
      ],
      staff: [
        { role: "감독", nick: "RapidStar", name: "정민성", until: 2026, ended: true },
        { role: "코치", nick: "Cube", name: "김창성", until: 2028 },
      ],
    },
  },
  {
    id: "bro", name: "한진 브리온", color: "#0d8f5b",
    logo: "assets/logos/bro.png",
    players: [
      { pos: "TOP", nick: "Casting", name: "신민제", until: 2027 },
      { pos: "JGL", nick: "GIDEON", name: "김민성", until: 2027 },
      { pos: "MID", nick: "Pungyeon", name: "이종혁", until: 2026, ended: true },
      { pos: "MID", nick: "Roamer", name: "조우진", until: 2027 },
      { pos: "MID", nick: "SeTab", name: "송경진", until: 2027, note: "← NS 2군" },
      { pos: "BOT", nick: "Teddy", name: "박진성", until: 2027 },
      { pos: "SUP", nick: "Namgung", name: "남궁성훈", until: 2027 },
    ],
    staff: [
      { role: "감독", nick: "Ssong", name: "김상수", until: 2027 },
      { role: "코치", nick: "Duke", name: "이호성", until: 2026, ended: true },
      { role: "코치", nick: "OnFleek", name: "김장겸", until: 2027 },
      { role: "코치", nick: "Ssumday", name: "김찬호", until: null, note: "← 2군" },
      { role: "전력분석관", nick: "Wish", name: "신동석", until: null, note: "← 2군" },
    ],
    second: {
      name: "HANJIN BRION Challengers",
      players: [
        { pos: "TOP", nick: "DDahyuk", name: "안민혁", until: 2026, ended: true },
        { pos: "MID", nick: "Tempester", name: "오영웅", until: 2026, ended: true },
        { pos: "BOT", nick: "OddEye", name: "조형진", until: 2027, note: "재계약" },
        { pos: "SUP", nick: "PlanB", name: "홍준석", until: 2027, note: "재계약" },
        { pos: "TOP", nick: "nonnein", name: "김병우", until: 2027, note: "콜업" },
        { pos: "JGL", nick: "IDEA", name: "정하늘", until: 2027, note: "콜업" },
        { pos: "MID", nick: "Garden", name: "설정원", until: 2027, note: "← DK 2군" },
      ],
      staff: [
        { role: "코치", nick: "Poss", name: "김민철", until: 2027 },
      ],
    },
  },
  {
    id: "krx", name: "키움 DRX", color: "#8b1e3f",
    logo: "assets/logos/krx.png",
    players: [
      { pos: "TOP", nick: "Frog", name: "이민회", until: 2026, ended: true },
      { pos: "JGL", nick: "Willer", name: "김정현", until: 2026, ended: true },
      { pos: "BOT", nick: "Aiming", name: "김하람", until: 2026, ended: true },
      { pos: "SUP", nick: "Andil", name: "문관빈", until: 2026, ended: true, rumorNote: "→ NS설" },
      { pos: "TOP", nick: "Doran", name: "최현준", until: null, rumor: true, note: "← T1" },
      { pos: "JGL", nick: "Kanavi", name: "서진혁", until: null, rumor: true, note: "← HLE" },
      { pos: "MID", nick: "Scout", name: "이예찬", until: null, rumor: true, note: "← NS" },
      { pos: "BOT", nick: "Viper", name: "박도현", until: null, rumor: true },
    ],
    staff: [
      { role: "감독", nick: "Joker", name: "조재읍", until: 2026, ended: true },
      { role: "코치", nick: "Naehyun", name: "유내현", until: 2026, ended: true },
      { role: "코치", nick: "Saroo", name: "이종원", until: 2026 },
      { role: "감독", nick: "cvMax", name: "김대호", until: null, rumor: true, note: "← DK" },
    ],
    second: {
      name: "Kiwoom DRX Challengers",
      players: [
        { pos: "TOP", nick: "Rich", name: "이재원", until: 2026, ended: true },
        { pos: "JGL", nick: "Winner", name: "우주성", until: 2026, ended: true },
        { pos: "MID", nick: "AKaJe", name: "최수혁", until: 2028 },
        { pos: "BOT", nick: "LazyFeel", name: "Trần Bảo Minh", until: 2028 },
        { pos: "SUP", nick: "Minous", name: "강민우", until: 2026 },
      ],
      staff: [
        { role: "감독", nick: "Frozen", name: "김태일", until: 2025 },
        { role: "코치", nick: "Catch", name: "윤상호", until: 2026, ended: true },
      ],
    },
  },
  ],
};
