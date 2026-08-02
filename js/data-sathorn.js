// Restaurant data — Sathorn / Silom / Charoen Krung area
// Near: Holiday Inn Express Bangkok Sathorn by IHG (Sathorn Soi 1, close to Surasak BTS)
// Ratings/review counts gathered via web research (Aug 2026 snapshot) from Google-labeled
// snippets where available, otherwise the best-corroborated aggregator figure (RestaurantGuru /
// TripAdvisor) is used and clearly labeled. Always re-check live numbers before relying on them.

const HOTEL_SATHORN = {
  name: "Holiday Inn Express Bangkok Sathorn by IHG",
  area: "Sathorn / Silom, Bangkok",
  desc: "수라삭(Surasak) BTS 역 인근, 사톤(Sathorn) 소이 1 지역에 위치한 호텔입니다. 실롬(Silom), 사톤, 짜런끄룽(Charoen Krung) 등 방콕에서 가장 오래된 로컬 맛집이 밀집한 지역이 도보~짧은 택시 거리에 있습니다.",
  mapsQuery: "Holiday Inn Express Bangkok Sathorn by IHG"
};

const SATHORN_RESTAURANTS = [
  {
    rank: 1, name: "Kalpapruek", nameThai: "กัลปพฤกษ์", emoji: "🍛",
    cuisine: "태국 가정식", category: "thai-comfort",
    rating: 4.5, reviews: 1653, source: "RestaurantGuru", confidence: "medium",
    address: "27 Soi Pramuan, Silom Rd, Bang Rak", distance: "호텔에서 약 0.6km · 도보 8분",
    dishes: ["태국식 샐러드(얌)", "치킨 로띠", "무양(BBQ 돼지고기)", "카오팟"],
    price: "฿200–400 / 인당",
    good: ["일관되게 맛있는 가정식 스타일", "빠르고 친절한 서비스", "편리한 위치", "합리적인 가격"],
    bad: ["다소 오래된 실내 인테리어", "점심시간 혼잡", "영어 메뉴가 제한적"],
    mapsQuery: "Kalpapruek Soi Pramuan Silom Bangkok"
  },
  {
    rank: 2, name: "Blue Elephant Bangkok Sathorn", nameThai: "บลูเอเลเฟนท์", emoji: "🍽️",
    cuisine: "태국 정찬(로열 타이)", category: "fine-dining",
    rating: 4.3, reviews: 3498, source: "TripAdvisor", confidence: "high",
    address: "233 South Sathorn Rd", distance: "호텔에서 약 0.8km · 도보 10분",
    dishes: ["똠얌꿍", "마사만 커리", "그릴 포크립", "크라잉 타이거 비프"],
    price: "฿1,200–2,500+ / 인당",
    good: ["콜로니얼 저택의 아름다운 공간", "정교한 로열 타이 요리", "세심한 서비스", "Thai SELECT 수상"],
    bad: ["양에 비해 비싼 가격대", "일부 리뷰에서 '관광객 취향'이라는 평", "격식 있는 분위기로 로컬 느낌은 적음"],
    mapsQuery: "Blue Elephant 233 South Sathorn Road Bangkok"
  },
  {
    rank: 3, name: "Baan Khanitha & Gallery", nameThai: "บ้านคุณิธา", emoji: "🖼️",
    cuisine: "태국 정찬 · 갤러리", category: "fine-dining",
    rating: 4.2, reviews: 1092, source: "TripAdvisor", confidence: "medium",
    address: "67–69 South Sathorn Rd, Thung Maha Mek", distance: "호텔에서 약 0.9km · 도보 12분",
    dishes: ["크랩 프라이드 라이스", "똠카까이", "타마린드 소스 생선튀김"],
    price: "฿500–900 / 인당",
    good: ["예술 작품으로 채워진 우아한 공간", "정통 태국 정찬의 맛", "사톤의 오랜 전통 있는 맛집"],
    bad: ["최근 몇 년간 맛이 예전만 못하다는 리뷰", "서비스 편차", "로컬 식당보다 비싼 가격"],
    mapsQuery: "Baan Khanitha & Gallery 67 South Sathorn Road Bangkok"
  },
  {
    rank: 4, name: "Baan Somtum Sathorn", nameThai: "บ้านส้มตำ", emoji: "🌶️",
    cuisine: "이싼(태국 동북부)", category: "isaan",
    rating: 4.4, reviews: 3599, source: "Google", confidence: "high",
    address: "9/1 Thanon Si Wiang, Si Lom, Bang Rak", distance: "호텔에서 약 1.0km · 도보 12분",
    dishes: ["쏨땀(파파야 샐러드)", "커무양(돼지 목살 구이)", "랍", "찰밥"],
    price: "฿300–500 / 인당", michelin: "미쉐린 빕구르망",
    good: ["매콤하고 정통성 있는 이싼의 맛", "세련되면서 편안한 인테리어", "미쉐린 빕구르망 선정", "현지인·직장인들에게 인기"],
    bad: ["점심·저녁 피크 시간 매우 붐빔", "매운 정도가 실제로 강한 편", "가격 대비 소박한 인테리어"],
    mapsQuery: "Baan Somtum Sathorn Bang Rak Bangkok"
  },
  {
    rank: 5, name: "Muslim Restaurant", nameThai: "ร้านมุสลิม", emoji: "🍚",
    cuisine: "할랄 태국-인도", category: "halal",
    rating: 4.3, reviews: 800, source: "TripAdvisor(추정)", confidence: "low",
    address: "1354–1356 Charoen Krung Rd, Bang Rak", distance: "호텔에서 약 1.7km · 택시 5–8분 / 도보 20분",
    dishes: ["비프 비리야니", "머튼 커리", "로띠", "옥스테일 수프"],
    price: "฿100–250 / 인당",
    good: ["풍미 가득한 정통 할랄 비리야니", "저렴한 가격", "친절하고 빠른 응대", "70년 넘은 올드 방콕 분위기"],
    bad: ["매우 소박한 인테리어와 좌석", "영어 안내 제한적", "피크 시간엔 인기 메뉴 품절 가능"],
    mapsQuery: "Muslim Restaurant 1354 Charoen Krung Road Bang Rak Bangkok"
  },
  {
    rank: 6, name: "Prachak Pet Yang", nameThai: "ประจักษ์เป็ดย่าง", emoji: "🦆",
    cuisine: "구운 오리 (100년 전통)", category: "noodle-bbq",
    rating: 4.2, reviews: 3800, source: "Google(종합 추정)", confidence: "medium",
    address: "1415 Charoen Krung Rd, Bang Rak", distance: "호텔에서 약 1.8km · 택시 5분 / 도보 20분",
    dishes: ["오리 국수", "오리 덮밥", "차슈 돼지고기"],
    price: "฿100–200 / 인당",
    good: ["100년 넘은 가족 비법 레시피", "부드러운 육질과 바삭한 껍질", "빠르고 든든하며 저렴함"],
    bad: ["소박한 좌석", "점심시간 줄서기", "4대째 이어지며 맛의 편차 있다는 의견도"],
    mapsQuery: "Prachak Pet Yang 1415 Charoen Krung Road Bangkok"
  },
  {
    rank: 7, name: "Harmonique", nameThai: "ฮาร์โมนีค", emoji: "🌳",
    cuisine: "정통 태국식 · 정원 레스토랑", category: "thai-comfort",
    rating: 4.1, reviews: 853, source: "TripAdvisor", confidence: "high",
    address: "22 Charoen Krung 34 Alley, Bang Rak", distance: "호텔에서 약 2.3km · 택시 10분",
    dishes: ["쏨오 샐러드(포멜로)", "크랩 커리", "라임마늘 생선구이", "마늘 볶음밥"],
    price: "฿200–400 / 인당",
    good: ["커다란 반얀트리가 있는 숨은 정원 분위기", "정통 태국 맛", "독특한 앤티크 인테리어"],
    bad: ["골목 안쪽이라 찾기 어려움", "바쁠 때 서비스가 느리다는 평", "다른 대형 식당보다 메뉴가 제한적"],
    mapsQuery: "Harmonique 22 Charoen Krung 34 Bangkok"
  },
  {
    rank: 8, name: "Jok Prince", nameThai: "โจ๊กปริ๊นซ์", emoji: "🥣",
    cuisine: "죽(조) 전문 · 50년 전통", category: "noodle-bbq",
    rating: 4.3, reviews: 3352, source: "Google", confidence: "high",
    address: "1391 Charoen Krung Rd, Bang Rak", distance: "호텔에서 약 2.0km · 택시 8분",
    dishes: ["훈제 돼지고기 죽(계란 토핑)", "포크 미트볼"],
    price: "฿60–150 / 인당", michelin: "미쉐린 빕구르망 (6년 연속)",
    good: ["독특한 스모키(불맛) 향", "부드럽고 편안한 식감", "매우 저렴함", "빕구르망 장기 선정"],
    bad: ["일부는 불맛이 과하다고 느낌", "소수는 돼지고기 퀄리티가 아쉽다는 평", "노포 특유의 소박한 좌석"],
    mapsQuery: "Jok Prince 1391 Charoen Krung Road Bangkok"
  },
  {
    rank: 9, name: "100 Mahaseth", nameThai: "หนึ่งร้อยมหาเศรษฐ์", emoji: "🍖",
    cuisine: "모던 이싼 (노즈투테일)", category: "isaan",
    rating: 4.5, reviews: 1589, source: "TripAdvisor(평점) / RestaurantGuru(리뷰수)", confidence: "medium",
    address: "100 Maha Set Rd, Si Phraya, Bang Rak", distance: "호텔에서 약 2.3km · 택시 10분",
    dishes: ["랍", "BBQ 돼지갈비", "코코넛 번", "망고 소르베"],
    price: "฿400–700 / 인당", michelin: "미쉐린 빕구르망",
    good: ["창의적인 노즈투테일 이싼 요리", "복원된 티크하우스의 매력적인 공간", "훌륭한 서비스"],
    bad: ["일반 이싼 식당보다 비쌈", "좁은 공간이라 예약 권장", "가격 대비 양이 적다는 의견"],
    mapsQuery: "100 Mahaseth Si Phraya Bang Rak Bangkok"
  },
  {
    rank: 10, name: "India Hut", nameThai: "อินเดียฮัท", emoji: "🫓",
    cuisine: "북인도 요리", category: "indian",
    rating: 4.3, reviews: 800, source: "TripAdvisor(추정)", confidence: "low",
    address: "414–420 Surawong Rd, Si Phraya, Bang Rak", distance: "호텔에서 약 2.0km · 택시 이용 권장",
    dishes: ["버터 치킨", "탄두리 플래터", "갈릭 난"],
    price: "฿400–700 / 인당",
    good: ["고급스러운 분위기", "정통 북인도 풍미", "이 지역 인도 요리의 원조 격"],
    bad: ["카테고리 대비 다소 비싼 가격", "양이 적다는 리뷰", "단체 관광객으로 붐빌 수 있음"],
    mapsQuery: "India Hut 414 Surawong Road Bangkok"
  },
  {
    rank: 11, name: "Somboon Seafood", nameThai: "สมบูรณ์ซีฟู้ด", emoji: "🦀",
    cuisine: "태국-중식 씨푸드 (1969년~)", category: "seafood",
    rating: 4.1, reviews: 6000, source: "Google", confidence: "high",
    address: "Surawong Rd, Bang Rak (Surawong 본점)", distance: "호텔에서 약 1.8km · 택시 8분",
    dishes: ["뿌팟퐁커리(게살 커리)", "똠얌꿍", "게살 볶음밥"],
    price: "฿500–1,000 / 인당 (게 요리는 무게당 추가)",
    good: ["전설적인 게살 커리", "1969년부터 이어온 일관된 맛", "큰 규모에도 효율적인 서비스"],
    bad: ["예전만 못하다는 단골 손님들의 의견", "관광객으로 붐비는 편", "일반 씨푸드 식당보다 비쌈"],
    mapsQuery: "Somboon Seafood Surawong Bang Rak Bangkok"
  },
  {
    rank: 12, name: "Eat Me Restaurant", nameThai: "-", emoji: "🍷",
    cuisine: "글로벌 퓨전 다이닝", category: "fine-dining",
    rating: 4.8, reviews: 6718, source: "RestaurantGuru", confidence: "high",
    address: "1/6 Soi Phipat 2, Silom", distance: "호텔에서 약 1.3km · 도보 15분",
    dishes: ["푸아그라 시어드", "와규 숏립", "계절 테이스팅 메뉴"],
    price: "฿1,200–2,000 / 인당",
    good: ["창의적인 글로벌 퓨전 메뉴", "은은하고 아늑한 분위기", "전문적인 서비스", "1998년부터 이어온 실롬의 명소"],
    bad: ["로컬 식당보다 높은 가격대", "활기차서 다소 시끄러울 수 있음", "주말엔 예약 필요"],
    mapsQuery: "Eat Me Restaurant Soi Phipat 2 Silom Bangkok"
  },
  {
    rank: 13, name: "Hai Somtam Convent", nameThai: "ไห่ส้มตำ", emoji: "🌶️",
    cuisine: "정통 이싼", category: "isaan",
    rating: 4.1, reviews: 674, source: "Google", confidence: "high",
    address: "2/4-5 Thanon Convent, Silom", distance: "호텔에서 약 1.4km · 도보 17분",
    dishes: ["쏨땀", "까이양(닭구이)", "찰밥", "랍"],
    price: "฿150–350 / 인당",
    good: ["꾸준히 맛있는 정통 이싼 요리", "합리적인 가격", "붐벼도 빠른 서비스"],
    bad: ["저녁엔 항상 만석", "거리에 열린 기본 좌석 (더위/소음)"],
    mapsQuery: "Hai Somtam Convent Silom Bangkok"
  },
  {
    rank: 14, name: "Som Tam Jay So", nameThai: "ส้มตำเจ๊โส", emoji: "🍗",
    cuisine: "이싼 스트리트 푸드", category: "isaan",
    rating: 4.2, reviews: 1183, source: "RestaurantGuru", confidence: "high",
    address: "Soi Phiphat 2, Silom (Sala Daeng BTS 도보 5분)", distance: "호텔에서 약 1.4km · 도보 17분",
    dishes: ["바삭한 마늘 BBQ 치킨", "연근 샐러드", "쏨땀"],
    price: "฿100–250 / 인당",
    good: ["부드럽고 촉촉한 BBQ 치킨", "독특한 연근 샐러드", "친절한 직원", "합리적인 가격"],
    bad: ["에어컨이 없어 실내가 더울 수 있음", "점심시간 매우 붐빔"],
    mapsQuery: "Som Tam Jay So Soi Phiphat 2 Silom Bangkok"
  },
  {
    rank: 15, name: "Chennai Kitchen", nameThai: "-", emoji: "🥞",
    cuisine: "남인도 채식", category: "indian",
    rating: 4.4, reviews: 500, source: "Google(건수 미확인)", confidence: "low",
    address: "107/4 Thanon Pan, Silom, Bang Rak", distance: "호텔에서 약 1.5km · 도보 18분",
    dishes: ["마살라 도사", "탈리 세트", "페사랏투", "필터 커피"],
    price: "฿150–300 / 인당",
    good: ["집밥 같은 정통 남인도 요리", "위생적인 관리", "좋은 가성비"],
    bad: ["작고 소박한 공간", "좌석 수 제한적", "채식 메뉴만 있어 육식 선호자에겐 제한적", "⚠ 리뷰 500건 이상 여부 확인 필요"],
    mapsQuery: "Chennai Kitchen 107 Thanon Pan Silom Bangkok"
  },
  {
    rank: 16, name: "Lek Seafood", nameThai: "เล็กซีฟู้ด", emoji: "🦐",
    cuisine: "로컬 태국-중식 씨푸드", category: "seafood",
    rating: 4.5, reviews: 1238, source: "Google", confidence: "high",
    address: "Chong Nonsi BTS 인근, Silom, Bang Rak", distance: "호텔에서 약 1.2km · BTS 1정거장 또는 도보 15분",
    dishes: ["칠리라임 메기찜", "칠리크랩", "똠얌 씨푸드"],
    price: "฿300–600 / 인당",
    good: ["꾸밈없는 진짜 로컬 분위기", "신선한 해산물", "가격 대비 훌륭한 퀄리티"],
    bad: ["도로변 간이 좌석 (소음)", "저녁엔 붐비고 시끄러움", "화려함은 없음 — 기대치 조정 필요"],
    mapsQuery: "Lek Seafood Chong Nonsi Silom Bangkok"
  },
  {
    rank: 17, name: "Soi Polo Fried Chicken", nameThai: "ไก่ทอดซอยโปโล", emoji: "🍗",
    cuisine: "이싼식 마늘 프라이드 치킨", category: "isaan",
    rating: 4.3, reviews: 3560, source: "RestaurantGuru", confidence: "high",
    address: "137/1-3 Soi Sanamkhli (Soi Polo), Lumphini", distance: "호텔에서 약 2.2km · 택시 8–10분",
    dishes: ["마늘 프라이드 치킨", "쏨땀", "찰밥"],
    price: "฿150–300 / 인당", michelin: "미쉐린 빕구르망 (2019년~)",
    good: ["바삭하고 마늘향 가득한 치킨", "3대째 이어온 50년 전통", "빕구르망 인증"],
    bad: ["피크 시간 긴 대기줄", "포장/좌석 공간이 좁고 단순함", "치킨과 이싼 사이드 외 메뉴는 제한적"],
    mapsQuery: "Soi Polo Fried Chicken Soi Sanamkhli Bangkok"
  },
  {
    rank: 18, name: "Baan Phadthai", nameThai: "บ้านผัดไทย", emoji: "🍜",
    cuisine: "팟타이 전문점", category: "noodle-bbq",
    rating: 4.1, reviews: 1758, source: "RestaurantGuru", confidence: "medium",
    address: "Saphan Taksin BTS 인근, Bang Rak", distance: "호텔에서 약 1.8km · 택시 8분",
    dishes: ["팟타이 꿍양(새우구이)", "팟타이 무양(돼지목살구이)"],
    price: "฿200–350 / 인당", michelin: "미쉐린 빕구르망",
    good: ["쫄깃한 면발과 스모키하고 균형 잡힌 소스", "아름다운 플레이팅", "편안한 인테리어"],
    bad: ["팟타이 위주라 메뉴가 단조로움", "일반 길거리 팟타이보다 비쌈", "대기 시간이 있을 수 있음"],
    mapsQuery: "Baan Phadthai Bang Rak Bangkok"
  },
  {
    rank: 19, name: "Charmgang", nameThai: "ชาร์มแกง", emoji: "🍲",
    cuisine: "모던 커리 (Nahm 출신 셰프)", category: "fine-dining",
    rating: 4.0, reviews: 709, source: "RestaurantGuru", confidence: "high",
    address: "14 Soi Charoen Krung 35, Talat Noi", distance: "호텔에서 약 3.0km · 택시 12–15분",
    dishes: ["소볼살 커리", "돼지볼살 요리", "발효 소고기 샐러드"],
    price: "฿500–900 / 인당", michelin: "미쉐린 빕구르망",
    good: ["창의적이고 균형 잡힌 커리", "숙련된 젊은 셰프팀(Nahm 출신)", "아늑한 오픈 키친 카운터"],
    bad: ["일반 커리 식당보다 비쌈", "매우 좁은 공간(대기 가능)", "택시로 이동해야 하는 다소 먼 거리"],
    mapsQuery: "Charmgang 14 Soi Charoen Krung 35 Bangkok"
  },
  {
    rank: 20, name: "The Never Ending Summer", nameThai: "-", emoji: "🌆",
    cuisine: "모던 태국 · 리버사이드", category: "fine-dining",
    rating: 4.1, reviews: 693, source: "TripAdvisor", confidence: "high",
    address: "41/5 Charoen Nakhon Rd, Khlong San (강 건너편)", distance: "호텔에서 약 3.0km · 택시 12–15분",
    dishes: ["계절 태국 테이스팅 플레이트", "민물새우 요리", "태국식 세비체"],
    price: "฿600–1,200 / 인당",
    good: ["인더스트리얼-시크한 리버사이드 창고 공간", "훌륭한 음식 퀄리티", "뛰어난 서비스"],
    bad: ["큰길에서 조금 걸어 들어가야 함", "강 건너편이라 택시/보트 필요", "가볍게 들르기엔 다소 먼 거리"],
    mapsQuery: "The Never Ending Summer Charoen Nakhon Road Khlong San Bangkok"
  },
  {
    rank: 21, name: "Sanguan Sri", nameThai: "สงวนศรี", emoji: "🍛",
    cuisine: "올드스쿨 태국 커리 &라이스", category: "thai-comfort",
    rating: 4.4, reviews: 1067, source: "RestaurantGuru", confidence: "high",
    address: "59/1 Witthayu (Wireless) Rd, Lumphini", distance: "호텔에서 약 2.5km · 택시 10–12분",
    dishes: ["소고기 그린커리", "올리브 볶음밥", "마사만 커리"],
    price: "฿150–300 / 인당",
    good: ["방콕 최고의 그린커리 중 하나로 꼽힘", "저렴한 가격", "오랜 전통의 로컬 맛집"],
    bad: ["일요일 휴무", "점심시간(10~15시)만 영업", "소박하고 꾸밈없는 실내"],
    mapsQuery: "Sanguan Sri 59 Witthayu Road Lumphini Bangkok"
  }
];
