# LCK 스토브리그

LCK 10개 팀의 1군·2군 선수와 코치진, 남은 계약 기간을 한눈에 보는 GitHub Pages 페이지입니다.

## 정보 수정하기

**`data/teams.js` 한 파일만 고치면 됩니다.** (GitHub 웹에서 연필 아이콘으로 바로 편집 가능)

```js
{ pos: "MID", nick: "Faker", name: "이상혁", until: 2029 },
{ pos: "TOP", nick: "Zeus", name: "최우제", until: 2028, rumor: true, note: "재계약설" },
```

| 필드 | 설명 |
|---|---|
| `pos` | `TOP` `JGL` `MID` `BOT` `SUP` (코치진은 `role`: `감독` `코치` `전력분석관` …) |
| `nick` | 닉네임 (기본 표시) |
| `name` | 실명 (`실명` 체크 시 표시) |
| `until` | 계약 종료 시즌(연도). 모르면 `null` |
| `rumor` | `true`면 `미확정` 체크 시에만 표시 |
| `ended` | `true`면 **FA 확정** (팀이 계약 종료를 공식 발표) |
| `rumorNote` | `미확정` 체크 시에만 보이는 메모 (예: `"→ KRX설"`, `"재계약설"`) |
| `note` | 이름 옆 짧은 메모 (선택) |

- 파일 맨 위 `season`이 다가오는 시즌입니다. `until`이 `season - 1` 이하이면 **만료**(재계약/이적 미정)로 표시되고, 계약 종료가 공식 발표되면 `ended: true`를 붙여 **FA**(확정)로 바꿉니다.
- 선수 이적: 이전 팀 목록에서 줄을 지우고 새 팀에 붙여넣은 뒤 `until`을 바꾸면 됩니다.
- 루머 영입: 새 팀에 `rumor: true`로 추가해두고, 확정되면 `rumor`만 지웁니다.
- `updated` 날짜를 바꿔두면 페이지 하단에 표시됩니다.

## 색 구분

FA 확정(빨강 채움) · 만료(주황) · 1년(하늘) · 2년(파랑) · 3년+(보라) · 미확정(점선)

## 로컬에서 보기

```bash
python -m http.server 8000
```

## GitHub Pages 설정

저장소 Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `(root)`.

## 출처

- 초기 로스터·계약 데이터: [Leaguepedia](https://lol.fandom.com) (2026-11-16 기준)
- 팀 로고: [LoL Esports](https://lolesports.com) 공식 이미지
