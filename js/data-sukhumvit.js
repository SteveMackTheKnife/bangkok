// Restaurant data — Sukhumvit (Soi 20s–30s) / Phrom Phong / Thonglor / Ekkamai area
// Near: DoubleTree by Hilton Sukhumvit Bangkok (18/1 Sukhumvit Soi 26, next to EmQuartier, ~300m from Phrom Phong BTS)
// Ratings/review counts gathered via web research (Aug 2026 snapshot) from Google-labeled
// snippets where available, otherwise the best-corroborated aggregator figure (RestaurantGuru /
// TripAdvisor / Trip.com) is used and clearly labeled. Always re-check live numbers before relying on them.

const HOTEL_SUKHUMVIT = {
  name: "DoubleTree by Hilton Sukhumvit Bangkok",
  area: "Sukhumvit Soi 26 / Phrom Phong, Bangkok",
  desc: "프롬퐁(Phrom Phong) BTS 역에서 도보 약 5분, 엠쿼티어(EmQuartier)·엠포리움(Emporium) 바로 옆에 위치한 호텔입니다. 통로(Thonglor), 에까마이(Ekkamai)까지도 짧은 택시 거리로, 방콕에서 가장 트렌디한 로컬 맛집이 밀집한 지역입니다.",
  mapsQuery: "DoubleTree by Hilton Sukhumvit Bangkok Soi 26"
};

const SUKHUMVIT_RESTAURANTS = [
  {
    rank: 1, name: "Rung Rueang Pork Noodle", nameThai: "รุ่งเรืองก๋วยเตี๋ยวหมูตุ๋น", emoji: "🍜",
    cuisine: "돼지고기 국수", category: "noodle-bbq",
    rating: 4.4, reviews: 500, source: "TripAdvisor(건수 미확인)", confidence: "low",
    address: "10/3 Sukhumvit Soi 26, Khlong Tan", distance: "호텔과 같은 소이 · 도보 5–10분",
    dishes: ["돼지/소고기 똠얌 국수", "비빔국수(해엥)", "완탕"],
    price: "฿100–150 / 인당", michelin: "미쉐린 빕구르망",
    good: ["미쉐린 빕구르망 선정", "오랜 시간 우려낸 깊은 육수", "저렴하고 빠름", "로컬 노포의 느낌"],
    bad: ["좁고 붐비는 좌석", "점심 피크 시간 대기줄", "현금 결제만 가능하다는 리뷰 다수", "⚠ 리뷰 500건 이상 여부 확인 필요"],
    mapsQuery: "Rung Rueang Pork Noodle Sukhumvit Soi 26 Bangkok"
  },
  {
    rank: 2, name: "Gedhawa", nameThai: "เก๊ดฮาวา", emoji: "🍲",
    cuisine: "북부 태국(란나)", category: "northern",
    rating: 4.5, reviews: 1463, source: "RestaurantGuru/TripAdvisor", confidence: "high",
    address: "78/2 Taweewan Place, Sukhumvit Soi 33", distance: "호텔에서 약 1.3km · 도보 15–18분 또는 택시 5분",
    dishes: ["깽훙레(북부식 돼지고기 커리)", "사이우아(허브 소시지)", "남프릭넘+바삭한 돼지고기"],
    price: "฿250–400 / 인당",
    good: ["'미친 가성비'라는 리뷰가 많음", "정통 북부 태국의 맛", "친절하고 배려심 있는 직원", "아늑한 분위기"],
    bad: ["공간이 작아 금방 만석", "매운 정도가 외국인 입맛엔 편차 있다는 리뷰"],
    mapsQuery: "Gedhawa Sukhumvit Soi 33 Bangkok"
  },
  {
    rank: 3, name: "Supanniga Eating Room (Thonglor)", nameThai: "สุภัณณิการ์", emoji: "🍤",
    cuisine: "헤리티지 태국 가정식", category: "thai-comfort",
    rating: 4.3, reviews: 708, source: "TripAdvisor", confidence: "high",
    address: "Soi Sukhumvit 55 (Thonglor)", distance: "호텔에서 약 3km · 택시 또는 BTS+도보",
    dishes: ["남부식 크랩커리", "똠얌꿍", "발효 소고기 볶음(블라춤)"],
    price: "฿500–800 / 인당",
    good: ["프리미엄 재료(피시소스·새우젓 등)", "푸짐한 새우가 들어간 똠얌꿍", "따뜻한 헤리티지 가정식"],
    bad: ["양에 비해 비싸다는 리뷰", "일부 메뉴 편차 있다는 소수 의견"],
    mapsQuery: "Supanniga Eating Room Thonglor Sukhumvit 55 Bangkok"
  },
  {
    rank: 4, name: "Sri Trat Restaurant & Bar", nameThai: "ศรีตราด", emoji: "🦀",
    cuisine: "동부 태국(뜨랏 지방)", category: "thai-comfort",
    rating: 4.5, reviews: 5089, source: "Google/RestaurantGuru", confidence: "high",
    address: "90 Sukhumvit Soi 33", distance: "호텔에서 약 1.3km · 도보 또는 택시",
    dishes: ["뜨랏식 크랩커리 볶음", "남프릭카이뿌(게알 칠리페이스트)", "무차므앙(망고+돼지고기)"],
    price: "฿700–1,200 / 인당", michelin: "미쉐린 빕구르망",
    good: ["아늑하고 우아한 목조 인테리어", "직원들이 메뉴를 상세히 설명해줌", "화려하고 향긋한 플레이팅", "채식 옵션도 좋음"],
    bad: ["예약 없이는 만석인 경우가 많음", "가격 대비 가성비는 보통이라는 리뷰"],
    mapsQuery: "Sri Trat Restaurant and Bar 90 Sukhumvit Soi 33 Bangkok"
  },
  {
    rank: 5, name: "Baan Somtum (Ekkamai)", nameThai: "บ้านส้มตำ", emoji: "🥗",
    cuisine: "이싼(태국 동북부)", category: "isaan",
    rating: 4.4, reviews: 1951, source: "Google/RestaurantGuru", confidence: "high",
    address: "Sukhumvit Soi 40 인근, Ekkamai BTS 근처", distance: "호텔에서 약 3km · 택시 또는 BTS+도보",
    dishes: ["다양한 쏨땀 종류", "까이양(닭구이)", "랍무"],
    price: "฿150–300 / 인당",
    good: ["현지인들에게 인기", "오픈 키친에서 샐러드 만드는 과정 관찰 가능", "빠르고 신선한 음식"],
    bad: ["피크 시간 매우 붐비고 시끄러움"],
    mapsQuery: "Baan Somtum Sukhumvit Soi 40 Bangkok"
  },
  {
    rank: 6, name: "Baan Khanitha (Sukhumvit 23)", nameThai: "บ้านคุณิธา", emoji: "🍤",
    cuisine: "고급 태국 요리 (1993년~)", category: "fine-dining",
    rating: 4.3, reviews: 2015, source: "Google/RestaurantGuru", confidence: "high",
    address: "Sukhumvit Soi 23", distance: "호텔에서 약 1.3km · 도보 15분 또는 택시",
    dishes: ["아유타야 민물새우 요리", "그린커리", "새우+포멜로 샐러드"],
    price: "฿600–1,000 / 인당",
    good: ["오랜 명성과 세련된 분위기", "자체 유기농 농장에서 식재료 공급", "미쉐린 가이드 등재"],
    bad: ["다소 관광객 취향/비싼 가격이라는 평", "혁신적이기보다 '안전한' 맛이라는 리뷰"],
    mapsQuery: "Baan Khanitha Sukhumvit 23 Bangkok"
  },
  {
    rank: 7, name: "Nhong Rim Klong (Ekkamai)", nameThai: "หนองริมคลอง", emoji: "🍳",
    cuisine: "태국 씨푸드 (게 전문)", category: "seafood",
    rating: 4.4, reviews: 1365, source: "Google/RestaurantGuru", confidence: "high",
    address: "51 Ekkamai Soi 23, Khlong Tan Nuea", distance: "호텔에서 약 4km · 택시",
    dishes: ["카이찌아우뿌(게살 오믈렛)", "게살 볶음밥", "게살 커리 볶음"],
    price: "฿400–700 / 인당", michelin: "미쉐린 빕구르망",
    good: ["푸짐한 게살 양", "빕구르망 씨푸드 대비 좋은 가성비", "캐주얼한 오픈 키친 분위기"],
    bad: ["대체로 호평이지만 강한 혹평 리뷰도 일부 존재", "품질 편차가 있다는 의견"],
    mapsQuery: "Nhong Rim Klong Ekkamai Soi 23 Bangkok"
  },
  {
    rank: 8, name: "Krua Jiang Mai (Thonglor)", nameThai: "ครัวเจียงใหม่", emoji: "🍜",
    cuisine: "북부 태국(치앙마이)", category: "northern",
    rating: 4.7, reviews: 800, source: "Google", confidence: "high",
    address: "Sukhumvit Soi 55 (Thonglor)", distance: "호텔에서 약 3km · 택시",
    dishes: ["카오소이", "훙레 커리", "수제 칠리페이스트"],
    price: "฿350–500 / 인당",
    good: ["북부 지역에서 직접 공수한 재료", "할머니의 레시피 그대로의 칠리페이스트", "한정 메뉴지만 완성도 높음"],
    bad: ["매우 작은 매장(좌석 약 26석)이라 대기 가능", "메뉴 종류가 제한적"],
    mapsQuery: "Krua Jiang Mai Thonglor Sukhumvit 55 Bangkok"
  },
  {
    rank: 9, name: "Wattana Panich (Ekkamai)", nameThai: "วัฒนาพานิช", emoji: "🍖",
    cuisine: "소고기 국수 (40년 넘게 끓인 육수)", category: "noodle-bbq",
    rating: 4.2, reviews: 4584, source: "RestaurantGuru", confidence: "high",
    address: "Sukhumvit Soi 63 (Ekkamai Rd)", distance: "호텔에서 약 4.5km · 택시",
    dishes: ["소고기 조림 국수", "소 힘줄", "소고기 완자"],
    price: "฿150–250 / 인당", michelin: "미쉐린 빕구르망",
    good: ["40년 넘게 계속 끓여온 전설적인 육수", "깊고 진한 풍미", "'방콕 최고의 소고기 국수'로 꼽힘"],
    bad: ["진하고 무거운 육수라 호불호 있음", "피크 시간 줄서기", "소박하고 꾸밈없는 좌석"],
    mapsQuery: "Wattana Panich Sukhumvit Soi 63 Ekkamai Bangkok"
  },
  {
    rank: 10, name: "Kalpapruek at Emporium", nameThai: "กัลปพฤกษ์", emoji: "🍛",
    cuisine: "태국 가정식 체인", category: "thai-comfort",
    rating: 4.4, reviews: 1653, source: "Google/RestaurantGuru", confidence: "high",
    address: "Emporium 5F, 622 Sukhumvit Rd", distance: "호텔에서 약 0.9km · 도보 12분",
    dishes: ["팟타이", "그린커리", "파넹커리", "태국식 밀크티"],
    price: "฿200–350 / 인당",
    good: ["믿을 수 있는 안정적인 맛과 서비스", "몰 안이라 편리한 위치", "가족 단위로 좋음"],
    bad: ["숨은 맛집이라기보다 체인점 느낌", "몰 특성상 거리 매대보다 다소 비쌈"],
    mapsQuery: "Kalpapruek Emporium 622 Sukhumvit Road Bangkok"
  },
  {
    rank: 11, name: "Saeng Chai Pochana", nameThai: "แสงชัยโภชนา", emoji: "🐟",
    cuisine: "태국-중식 씨푸드 (심야 영업)", category: "seafood",
    rating: 4.2, reviews: 550, source: "Google(건수 미확인)", confidence: "low",
    address: "762/5-6 Sukhumvit Rd, Thong Lo–Phrom Phong 사이", distance: "호텔에서 약 0.7–1km · 도보",
    dishes: ["간장 생선찜", "모닝글로리 볶음", "소금후추 오징어 튀김"],
    price: "฿300–500 / 인당",
    good: ["'매우 로컬'이라는 평", "안정적으로 맛있음", "밤 7시~새벽 4시까지 영업하는 심야 맛집"],
    bad: ["꾸밈없는 소박한 매장", "⚠ 구글 리뷰 정확한 건수 확인 필요"],
    mapsQuery: "Saeng Chai Pochana 762 Sukhumvit Road Bangkok"
  },
  {
    rank: 12, name: "The Local by Oam Thong", nameThai: "เดอะ โลคัล", emoji: "🏠",
    cuisine: "전통 태국 요리 · 100년 티크하우스", category: "fine-dining",
    rating: 4.2, reviews: 1156, source: "TripAdvisor/RestaurantGuru", confidence: "high",
    address: "32/1 Soi Sukhumvit 23", distance: "호텔에서 약 1.3km · 택시",
    dishes: ["미앙캄", "남프릭롱르아", "마사만 커리"],
    price: "฿600–900 / 인당", michelin: "미쉐린 빕구르망 (5년 연속 이상)",
    good: ["빕구르망 수상에 걸맞은 완성도", "아름다운 헤리티지 하우스", "따뜻하고 전문적인 응대"],
    bad: ["거리 로컬 식당보다 높은 가격대", "저녁엔 예약 필요"],
    mapsQuery: "The Local by Oam Thong Soi Sukhumvit 23 Bangkok"
  },
  {
    rank: 13, name: "Jidori Cuisine Ken", nameThai: "地鶏料理けん", emoji: "🍢",
    cuisine: "일본식 야키토리 이자카야", category: "japanese",
    rating: 4.3, reviews: 722, source: "Google/RestaurantGuru", confidence: "high",
    address: "12 Sukhumvit 26 Alley", distance: "호텔과 같은 소이 · 도보 약 5분",
    dishes: ["지도리 닭꼬치 모듬", "굴 구이", "츠쿠네(닭완자)"],
    price: "฿800–1,500 / 인당",
    good: ["'방콕 최고의 일식'이라는 평", "빈초탄 숯불구이 방식", "다양한 부위의 닭꼬치"],
    bad: ["골목 안쪽이라 찾기 어려울 수 있음", "일반 로컬 식당보다 비쌈"],
    mapsQuery: "Jidori Cuisine Ken 12 Sukhumvit 26 Bangkok"
  },
  {
    rank: 14, name: "Cabbages & Condoms", nameThai: "-", emoji: "🥗",
    cuisine: "태국 요리 · 테마 레스토랑", category: "thai-comfort",
    rating: 4.0, reviews: 500, source: "Trip.com/TripAdvisor", confidence: "low",
    address: "10 Sukhumvit Soi 12", distance: "호텔에서 약 2.5km · 택시",
    dishes: ["똠얌꿍", "팟타이", "마사만 커리"],
    price: "฿500–700 / 인당",
    good: ["콘돔 테마의 독특한 정원 인테리어", "가족계획 지원 자선 목적", "정통 태국 메뉴 구성"],
    bad: ["요리보다 '포토스팟'이라는 평도 있음", "단체 관광객으로 붐빌 때 서비스 지연", "⚠ 리뷰 500건 이상 여부 확인 필요"],
    mapsQuery: "Cabbages and Condoms 10 Sukhumvit Soi 12 Bangkok"
  },
  {
    rank: 15, name: "Nara Thai Cuisine (EmQuartier)", nameThai: "นาราไทยคูซีน", emoji: "🍛",
    cuisine: "인기 태국 요리 체인", category: "thai-comfort",
    rating: 4.0, reviews: 500, source: "TripAdvisor(단편적)", confidence: "low",
    address: "EmQuartier, 695 Sukhumvit Rd", distance: "호텔에서 약 0.9km · 도보",
    dishes: ["나라 스타일 볶음밥", "똠얌꿍", "판단 치킨"],
    price: "฿350–550 / 인당",
    good: ["일관된 퀄리티", "보기 좋은 플레이팅", "몰 안이라 편리", "단체 방문에 적합"],
    bad: ["편안한 태국 요리 치고 비싸다는 평", "관광지 느낌", "⚠ 이 지점의 정확한 구글 리뷰 건수 확인 필요"],
    mapsQuery: "Nara Thai Cuisine EmQuartier Sukhumvit Bangkok"
  },
  {
    rank: 16, name: "Ruen Mallika", nameThai: "เรือนมัลลิกา", emoji: "🏯",
    cuisine: "로열 태국 요리 · 200년 티크하우스", category: "fine-dining",
    rating: 4.1, reviews: 500, source: "TripAdvisor(건수 미확인)", confidence: "low",
    address: "Sukhumvit Soi 22, Queen Sirikit Convention Center 인근", distance: "호텔에서 약 0.8–1km · 도보",
    dishes: ["로열 태국 세트 메뉴", "미앙캄", "파넹커리"],
    price: "฿500–800 / 인당",
    good: ["200년 된 티크하우스의 아름다운 정원", "일관되게 훌륭하다고 평가되는 서비스"],
    bad: ["맛이 다소 관광객 취향으로 순화됐다는 리뷰", "⚠ 리뷰 500건 이상 여부 확인 필요"],
    mapsQuery: "Ruen Mallika Royal Thai Cuisine Sukhumvit 22 Bangkok"
  },
  {
    rank: 17, name: "MK Live (EmQuartier)", nameThai: "เอ็มเค ไลฟ์", emoji: "🍲",
    cuisine: "태국식 수끼(샤브샤브)", category: "hotpot",
    rating: 4.3, reviews: 715, source: "Google/RestaurantGuru", confidence: "high",
    address: "EmQuartier", distance: "호텔에서 약 0.9km · 도보",
    dishes: ["MK 시그니처 소스 수끼", "씨푸드 플래터", "만두"],
    price: "฿400–600 / 인당",
    good: ["'MK 최고의 지점'이라는 평", "일부 로열프로젝트 농장 식재료", "일반 MK보다 프리미엄"],
    bad: ["여전히 체인 레스토랑 경험", "일반 MK 지점보다 비쌈"],
    mapsQuery: "MK Live EmQuartier Sukhumvit Bangkok"
  },
  {
    rank: 18, name: "You & I Premium Suki Buffet", nameThai: "-", emoji: "🍢",
    cuisine: "프리미엄 수끼 뷔페", category: "hotpot",
    rating: 4.6, reviews: 968, source: "Google/RestaurantGuru", confidence: "high",
    address: "EmQuartier", distance: "호텔에서 약 0.9km · 도보",
    dishes: ["와규 소고기", "씨푸드 타워", "하우스 딥핑 소스"],
    price: "฿499–899 / 인당 (뷔페)",
    good: ["뷔페 가격 대비 프리미엄 식재료", "가족 단위 축하 자리로 인기"],
    bad: ["뷔페 특성상 시간 제한 좌석", "주말엔 붐빔"],
    mapsQuery: "You and I Premium Suki Buffet EmQuartier Bangkok"
  },
  {
    rank: 19, name: "Hoi Tod Chaw Lae (Thonglor)", nameThai: "หอยทอดชาวเล", emoji: "🦪",
    cuisine: "굴 오믈렛 · 팟타이 전문", category: "noodle-bbq",
    rating: 4.0, reviews: 1478, source: "Google/RestaurantGuru", confidence: "high",
    address: "Soi Thonglor (Sukhumvit 55)", distance: "호텔에서 약 3km · 택시",
    dishes: ["호이텃(바삭한 굴 오믈렛)", "팟타이", "홍합 볶음"],
    price: "฿150–300 / 인당",
    good: ["'최고의 팟타이', '최고의 굴 오믈렛'이라는 평 다수"],
    bad: ["평점(4.0)이 다른 인기 맛집 대비 낮은 편", "메뉴별 품질 편차 있다는 의견"],
    mapsQuery: "Hoi Tod Chaw Lae Thonglor Bangkok"
  },
  {
    rank: 20, name: "Here Hai (Ekkamai)", nameThai: "เฮียไห่", emoji: "🦀",
    cuisine: "씨푸드 (게 전문)", category: "seafood",
    rating: 4.2, reviews: 3987, source: "RestaurantGuru", confidence: "high",
    address: "Ekkamai Road", distance: "호텔에서 약 4km · 택시",
    dishes: ["게살 볶음밥", "게살 오믈렛"],
    price: "฿300–500 / 인당", michelin: "미쉐린 빕구르망 (6회 선정)",
    good: ["큼직하고 신선한 게살", "웍 향(불맛) 가득한 맛", "꾸준한 빕구르망 선정(2020년~)"],
    bad: ["예약 불가로 15분~1시간 대기줄", "소수는 '기대만큼은 아니었다'는 리뷰"],
    mapsQuery: "Here Hai Ekkamai Bangkok"
  },
  {
    rank: 21, name: "Vientiane Kitchen", nameThai: "ครัวเวียงจันทน์", emoji: "🎶",
    cuisine: "라오/이싼 · 라이브 공연", category: "isaan",
    rating: 4.1, reviews: 500, source: "RestaurantGuru(건수 미확인)", confidence: "low",
    address: "Sukhumvit Soi 36, Khlong Toei", distance: "호텔에서 약 1km · 도보",
    dishes: ["랍", "닭구이", "라오 소시지", "찰밥"],
    price: "฿300–500 / 인당",
    good: ["오랜 인기의 라오/이싼 요리", "라이브 음악·공연이 있는 활기찬 분위기", "푸짐한 구성"],
    bad: ["가격이 비싸다는 반복적인 불만", "적은 양이라는 의견", "서비스료/VAT 추가 부과", "⚠ 리뷰 500건 이상 여부 확인 필요"],
    mapsQuery: "Vientiane Kitchen Sukhumvit Soi 36 Bangkok"
  },
  {
    rank: 22, name: "Peppina (Sukhumvit)", nameThai: "-", emoji: "🍕",
    cuisine: "나폴리 피자 (태국 로컬 인기 맛집)", category: "italian",
    rating: 4.5, reviews: 2453, source: "Google", confidence: "high",
    address: "27/1 Soi Sukhumvit 33", distance: "호텔에서 약 1.3km · 도보 또는 택시",
    dishes: ["마르게리타 피자", "나폴리 피자", "티라미수 컵"],
    price: "฿500–800 / 인당",
    good: ["나폴리에서 공수한 화덕", "수제 반죽", "'방콕 최고의 피자'로 꾸준히 언급됨"],
    bad: ["태국 로컬 음식은 아님 (동네 인기 맛집으로 포함)", "인기가 많아 저녁 피크엔 대기 가능"],
    mapsQuery: "Peppina Sukhumvit 27 Soi Sukhumvit 33 Bangkok"
  }
];
