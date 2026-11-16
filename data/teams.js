/* =====================================================================
   LCK 스토브리그 데이터
   ---------------------------------------------------------------------
   이 파일만 수정하면 페이지에 반영됩니다.

   season  : 다가오는 시즌. 계약 종료 연도(until)가 season-1 이하이면 FA.
   선수    : { pos, nick, name, until, rumor, note }
     pos   : "TOP" | "JGL" | "MID" | "BOT" | "SUP"
     until : 계약 종료 시즌(연도). 모르면 null
     rumor : true 로 두면 '미확정' 체크 시에만 표시 (루머/미발표 영입 등)
     note  : 이름 옆 짧은 메모 (예: "← HLE", "재계약")
   코치진  : { role, nick, name, until, rumor, note }   role: "감독" | "코치" | "전력분석관" ...
             1군 최대 4명 (LCK 규정: 감독 1 + 코치 최대 3)

   예시)
     { pos: "MID", nick: "Faker", name: "이상혁", until: 2029 },
     { pos: "TOP", nick: "Zeus", name: "최우제", until: 2028, rumor: true, note: "재계약설" },
   ===================================================================== */

window.STOVE = {
  season: 2027,
  updated: "2026-11-16",

  teams: [
  {
    id: "gen", name: "Gen.G", color: "#aa8a50",
    logo: "assets/logos/gen.png",
    players: [
      { pos: "TOP", nick: "Kiin", name: "김기인", until: 2026 },
      { pos: "JGL", nick: "Canyon", name: "김건부", until: 2026 },
      { pos: "MID", nick: "Chovy", name: "정지훈", until: 2027 },
      { pos: "BOT", nick: "Ruler", name: "박재혁", until: 2027 },
      { pos: "SUP", nick: "Duro", name: "주민규", until: 2027 },
    ],
    staff: [
      { role: "감독", nick: "Ryu", name: "류상욱", until: 2028 },
      { role: "코치", nick: "Lyn", name: "김다빈", until: 2026 },
      { role: "코치", nick: "Nova", name: "박찬호", until: 2026 },
    ],
    second: {
      name: "Gen.G Global Academy",
      players: [
        { pos: "TOP", nick: "Ripple", name: "변종민", until: 2026 },
        { pos: "JGL", nick: "Courage", name: "전현민", until: 2026 },
        { pos: "MID", nick: "Kemish", name: "김시훈", until: 2026 },
        { pos: "BOT", nick: "MUDAI", name: "이선규", until: 2026 },
        { pos: "SUP", nick: "Lumos", name: "김재민", until: 2026 },
        { pos: "SUP", nick: "SIRIUSS", name: "고건", until: 2026 },
      ],
      staff: [
        { role: "코치", nick: "Jerry", name: "강성준", until: 2026 },
      ],
    },
  },
  {
    id: "hle", name: "한화생명e스포츠", color: "#f47b20",
    logo: "assets/logos/hle.png",
    players: [
      { pos: "TOP", nick: "Zeus", name: "최우제", until: 2026 },
      { pos: "JGL", nick: "Kanavi", name: "서진혁", until: 2026 },
      { pos: "MID", nick: "Zeka", name: "김건우", until: 2027 },
      { pos: "BOT", nick: "Gumayusi", name: "이민형", until: 2027 },
      { pos: "SUP", nick: "Delight", name: "유환중", until: 2027 },
    ],
    staff: [
      { role: "감독", nick: "Homme", name: "윤성영", until: 2026 },
      { role: "코치", nick: "Mowgli", name: "이재하", until: 2027 },
      { role: "코치", nick: "Sin", name: "연형모", until: 2026 },
    ],
    second: {
      name: "Hanwha Life Esports Challengers",
      players: [
        { pos: "TOP", nick: "Panther", name: "박지호", until: 2026 },
        { pos: "JGL", nick: "Jackal", name: "이수민", until: 2026 },
        { pos: "MID", nick: "Cracker", name: "이정욱", until: 2026 },
        { pos: "MID", nick: "Valiant", name: "한강현", until: 2026 },
        { pos: "BOT", nick: "Pyeonsik", name: "편민기", until: 2026 },
        { pos: "SUP", nick: "Bluffing", name: "박규용", until: 2026 },
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
      { pos: "TOP", nick: "Doran", name: "최현준", until: 2026 },
      { pos: "JGL", nick: "Oner", name: "문현준", until: 2028 },
      { pos: "MID", nick: "Faker", name: "이상혁", until: 2029 },
      { pos: "BOT", nick: "Peyz", name: "김수환", until: 2028 },
      { pos: "SUP", nick: "Keria", name: "류민석", until: 2029 },
    ],
    staff: [
      { role: "감독", nick: "kkOma", name: "김정균", until: 2026 },
      { role: "감독대행", nick: "Tom", name: "임재현", until: 2026 },
      { role: "코치", nick: "Mata", name: "조세형", until: 2026 },
      { role: "코치", nick: "Easyhoon", name: "이지훈", until: 2026 },
    ],
    second: {
      name: "T1 Esports Academy",
      players: [
        { pos: "TOP", nick: "Guardian", name: "성태효", until: 2026 },
        { pos: "TOP", nick: "Haetae", name: "심수현", until: 2026 },
        { pos: "JGL", nick: "Carim", name: "오재승", until: 2026 },
        { pos: "JGL", nick: "Painter", name: "김은후", until: 2026 },
        { pos: "MID", nick: "Guti", name: "문정환", until: 2026 },
        { pos: "BOT", nick: "Cypher", name: "김유준", until: 2026 },
        { pos: "BOT", nick: "Eclipse", name: "김민준", until: 2026 },
        { pos: "SUP", nick: "Cloud", name: "문현호", until: 2026 },
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
      { pos: "JGL", nick: "Cuzz", name: "문우찬", until: 2027 },
      { pos: "MID", nick: "Bdd", name: "곽보성", until: 2028 },
      { pos: "BOT", nick: "Jiwoo", name: "정지우", until: 2026 },
      { pos: "SUP", nick: "Effort", name: "이상호", until: 2026 },
    ],
    staff: [
      { role: "감독", nick: "Score", name: "고동빈", until: 2029 },
      { role: "코치", nick: "Museong", name: "김무성", until: 2027 },
      { role: "코치", nick: "Sonstar", name: "손승익", until: 2026 },
      { role: "전력분석관", nick: "Highness", name: "박지원", until: null },
    ],
    second: {
      name: "KT Rolster Challengers",
      players: [
        { pos: "TOP", nick: "Sero", name: "안효찬", until: 2027 },
        { pos: "JGL", nick: "Sylvie", name: "이승복", until: 2026 },
        { pos: "MID", nick: "Hwichan", name: "정휘찬", until: 2027 },
        { pos: "BOT", nick: "FenRir", name: "박강준", until: 2027 },
        { pos: "BOT", nick: "Ghost", name: "장용준", until: 2026 },
        { pos: "SUP", nick: "Pollu", name: "오동규", until: 2026 },
      ],
      staff: [
        { role: "감독", nick: "Spark", name: "강병률", until: 2026 },
        { role: "코치", nick: "Lilac", name: "전호진", until: 2026 },
      ],
    },
  },
  {
    id: "dk", name: "디플러스 기아", color: "#20c3b8",
    logo: "assets/logos/dk.png",
    players: [
      { pos: "TOP", nick: "Siwoo", name: "전시우", until: 2027 },
      { pos: "JGL", nick: "Lucid", name: "최용혁", until: 2027 },
      { pos: "MID", nick: "ShowMaker", name: "허수", until: 2026 },
      { pos: "BOT", nick: "Smash", name: "신금재", until: 2026 },
      { pos: "SUP", nick: "Career", name: "오형석", until: 2027 },
    ],
    staff: [
      { role: "감독", nick: "cvMax", name: "김대호", until: 2026 },
      { role: "코치", nick: "Hachani", name: "하승찬", until: 2026 },
      { role: "코치", nick: "PoohManDu", name: "이정현", until: 2026 },
    ],
    second: {
      name: "Dplus Kia Challengers",
      players: [
        { pos: "TOP", nick: "Jaehyuk", name: "권재혁", until: 2027 },
        { pos: "TOP", nick: "Nevid", name: "박민우", until: 2027 },
        { pos: "JGL", nick: "Solid", name: "남현서", until: 2029 },
        { pos: "MID", nick: "Garden", name: "설정원", until: 2026 },
        { pos: "BOT", nick: "Wayne", name: "황서현", until: 2026 },
        { pos: "SUP", nick: "Loopy", name: "김동현", until: 2026 },
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
      { pos: "TOP", nick: "Clear", name: "송현민", until: 2026 },
      { pos: "JGL", nick: "Raptor", name: "전어진", until: 2026 },
      { pos: "MID", nick: "Daystar", name: "유지명", until: 2026 },
      { pos: "MID", nick: "VicLa", name: "이대광", until: 2026 },
      { pos: "BOT", nick: "Taeyoon", name: "김태윤", until: 2026 },
      { pos: "SUP", nick: "Kellin", name: "김형규", until: 2026 },
    ],
    staff: [
      { role: "감독", nick: "Rather", name: "신형섭", until: 2026 },
      { role: "코치", nick: "Lira", name: "남태유", until: 2026 },
    ],
    second: {
      name: "BNK FEARX Youth",
      players: [
        { pos: "TOP", nick: "Kangin", name: "최강인", until: 2026 },
        { pos: "JGL", nick: "Grizzly", name: "조승훈", until: 2026 },
        { pos: "JGL", nick: "Zephyr", name: "황혁수", until: 2026 },
        { pos: "MID", nick: "MG", name: "이지훈", until: 2026 },
        { pos: "BOT", nick: "Slayer", name: "김진영", until: 2026 },
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
      { pos: "TOP", nick: "Kingen", name: "황성훈", until: 2026 },
      { pos: "JGL", nick: "Sponge", name: "배영준", until: 2026 },
      { pos: "MID", nick: "Calix", name: "선현빈", until: 2026 },
      { pos: "MID", nick: "Scout", name: "이예찬", until: 2026 },
      { pos: "BOT", nick: "Diable", name: "남대근", until: 2026 },
      { pos: "SUP", nick: "Lehends", name: "손시우", until: 2026 },
    ],
    staff: [
      { role: "감독", nick: "DanDy", name: "최인규", until: 2027 },
      { role: "코치", nick: "Chelly", name: "박승진", until: 2027 },
      { role: "코치", nick: "Crazy", name: "김재희", until: 2026 },
    ],
    second: {
      name: "Nongshim Esports Academy",
      players: [
        { pos: "TOP", nick: "Janus", name: "엄예준", until: 2027 },
        { pos: "JGL", nick: "MihawK", name: "김주형", until: 2027 },
        { pos: "MID", nick: "SeTab", name: "송경진", until: 2026 },
        { pos: "BOT", nick: "Lucy", name: "현수훈", until: 2026 },
        { pos: "SUP", nick: "Pleata", name: "손민우", until: 2026 },
      ],
      staff: [
        { role: "코치", nick: "bon0", name: "김기범", until: 2026 },
      ],
    },
  },
  {
    id: "dns", name: "DN 수퍼스", color: "#3d6cf5",
    logo: "assets/logos/dns.webp",
    players: [
      { pos: "TOP", nick: "DuDu", name: "이동주", until: 2026 },
      { pos: "JGL", nick: "Pyosik", name: "홍창현", until: 2026 },
      { pos: "JGL", nick: "Sharvel", name: "김단우", until: 2026 },
      { pos: "MID", nick: "Clozer", name: "이주현", until: 2026 },
      { pos: "BOT", nick: "deokdam", name: "서대길", until: 2027 },
      { pos: "SUP", nick: "Life", name: "김정민", until: 2026 },
      { pos: "SUP", nick: "Peter", name: "정윤수", until: 2026 },
    ],
    staff: [
      { role: "감독대행", nick: "Ggoong", name: "유병준", until: 2026 },
      { role: "코치", nick: "Minit", name: "양현민", until: 2026 },
      { role: "전력분석관", nick: "Millimas", name: "김건우", until: 2026 },
    ],
    second: {
      name: "DN SOOPers Challengers",
      players: [
        { pos: "TOP", nick: "Lancer", name: "한정흠", until: 2026 },
        { pos: "JGL", nick: "DDoiV", name: "방문영", until: 2026 },
        { pos: "MID", nick: "Flip", name: "김상욱", until: 2026 },
        { pos: "BOT", nick: "Enosh", name: "곽규준", until: 2026 },
        { pos: "SUP", nick: "Quantum", name: "손정환", until: 2026 },
      ],
      staff: [
        { role: "감독", nick: "RapidStar", name: "정민성", until: 2026 },
        { role: "코치", nick: "Cube", name: "김창성", until: 2026 },
      ],
    },
  },
  {
    id: "bro", name: "한진 브리온", color: "#0d8f5b",
    logo: "assets/logos/bro.png",
    players: [
      { pos: "TOP", nick: "Casting", name: "신민제", until: 2027 },
      { pos: "JGL", nick: "GIDEON", name: "김민성", until: 2027 },
      { pos: "MID", nick: "Pungyeon", name: "이종혁", until: 2026 },
      { pos: "MID", nick: "Roamer", name: "조우진", until: 2027 },
      { pos: "BOT", nick: "Teddy", name: "박진성", until: 2027 },
      { pos: "SUP", nick: "Namgung", name: "남궁성훈", until: 2027 },
    ],
    staff: [
      { role: "감독", nick: "Ssong", name: "김상수", until: 2027 },
      { role: "코치", nick: "Duke", name: "이호성", until: 2026 },
    ],
    second: {
      name: "HANJIN BRION Challengers",
      players: [
        { pos: "TOP", nick: "DDahyuk", name: "안민혁", until: 2026 },
        { pos: "MID", nick: "Tempester", name: "오영웅", until: 2026 },
        { pos: "BOT", nick: "OddEye", name: "조형진", until: 2026 },
        { pos: "SUP", nick: "PlanB", name: "홍준석", until: 2026 },
      ],
      staff: [
        { role: "코치", nick: "Ssumday", name: "김찬호", until: 2026 },
      ],
    },
  },
  {
    id: "krx", name: "키움 DRX", color: "#8b1e3f",
    logo: "assets/logos/krx.png",
    players: [
      { pos: "TOP", nick: "Frog", name: "이민회", until: 2026 },
      { pos: "JGL", nick: "Vincenzo", name: "하승민", until: 2026 },
      { pos: "JGL", nick: "Willer", name: "김정현", until: 2026 },
      { pos: "MID", nick: "Ucal", name: "손우현", until: 2026 },
      { pos: "BOT", nick: "Aiming", name: "김하람", until: 2026 },
      { pos: "SUP", nick: "Andil", name: "문관빈", until: 2026 },
    ],
    staff: [
      { role: "감독", nick: "Joker", name: "조재읍", until: 2026 },
      { role: "코치", nick: "Naehyun", name: "유내현", until: 2026 },
      { role: "코치", nick: "Saroo", name: "이종원", until: 2026 },
    ],
    second: {
      name: "Kiwoom DRX Challengers",
      players: [
        { pos: "TOP", nick: "Rich", name: "이재원", until: 2026 },
        { pos: "JGL", nick: "Winner", name: "우주성", until: 2026 },
        { pos: "MID", nick: "AKaJe", name: "최수혁", until: 2028 },
        { pos: "BOT", nick: "LazyFeel", name: "Trần Bảo Minh", until: 2028 },
        { pos: "SUP", nick: "Minous", name: "강민우", until: 2026 },
      ],
      staff: [
        { role: "감독", nick: "Frozen", name: "김태일", until: 2025 },
        { role: "코치", nick: "Catch", name: "윤상호", until: 2026 },
      ],
    },
  },
  ],
};
