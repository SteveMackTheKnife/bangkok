# Supabase 설정 (`expense.html` 데이터베이스)

`expense.html`의 경비 데이터는 Supabase(Postgres + 자동 REST API)에 저장됩니다. 최초 1회, Supabase 프로젝트의 **SQL Editor**에서 아래 순서로 실행하세요.

1. **`schema.sql`** 실행
   - 실행 전에 `is_authorized()` 함수 안의 `<YOUR_SECRET>`을 원하는 비밀번호로 바꾸세요.
   - ⚠️ 이 저장소는 **public**입니다. 비밀번호를 채운 버전을 커밋/푸시하지 마세요 — SQL Editor에만 붙여넣고 실행하세요. 커밋되는 `schema.sql`은 항상 `<YOUR_SECRET>` placeholder 상태를 유지해야 합니다.
2. **`seed.sql`** 실행 — 2023년 여행 실제 지출 92건을 1회성으로 채웁니다.
3. 프로젝트 **Settings → API**에서 **Project URL**과 **anon/publishable key**를 확인해 `js/supabase-config.js`에 반영(이미 반영되어 있다면 생략). 이 키는 공개되어도 안전합니다 — **service_role(secret) 키는 절대 프론트엔드 코드에 넣지 마세요.**

## 비밀번호를 바꾸고 싶을 때
`is_authorized()` 함수만 새 비밀번호로 다시 `create or replace` 하면 됩니다. 테이블/데이터는 그대로 유지됩니다.

## 참고
- 조회(SELECT)는 누구나 가능합니다 — 경비 데이터 자체는 공개됩니다.
- 등록(INSERT)·삭제(DELETE)만 `x-app-secret` 헤더 값이 비밀번호와 일치할 때 허용됩니다. `expense.html`의 "관리자 비밀번호" 입력란이 이 헤더를 채웁니다.
- 이 방식은 완전한 로그인 시스템이 아닌 최소한의 보호장치입니다(요청 시 함께 전송되는 문자열 비교). 더 강한 보호가 필요하면 Supabase Auth 도입을 고려하세요.
