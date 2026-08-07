# Bangkok Local Eats

방콕 호텔(Holiday Inn Express Bangkok Sathorn / DoubleTree by Hilton Sukhumvit) 주변 로컬 맛집 가이드.

구글 평점 4.0 이상, 리뷰 500개 이상인 로컬 맛집을 지도·평점·대표 메뉴·가격·리뷰 요약(Good/Bad)과 함께 소개합니다. 지도는 Leaflet + OpenStreetMap을 사용하며, 주소는 OpenStreetMap Nominatim으로 클라이언트 사이드에서 좌표 변환됩니다 (API 키 불필요).

- `index.html` — 호텔 선택 랜딩 페이지
- `sathorn.html` — 사톤 지역 맛집 21곳
- `sukhumvit.html` — 수쿰빗 지역 맛집 22곳
- `expense.html` — 방콕 여행 경비 트래커. 2023년 7월 실제 여행 지출(항공·숙박·현지 지출)을 기본 데이터로 보여주고, 카테고리별 지출 차트·엑셀(.xlsx) 내보내기·새 지출 입력 폼을 제공합니다. 데이터는 Supabase(Postgres + REST API)에 저장되어 모든 방문자에게 공유되며, 조회는 누구나 가능하고 등록·삭제는 비밀번호로 보호됩니다. Supabase 설정 방법은 `supabase/README.md` 참고.

GitHub Pages로 배포되어 있습니다.
