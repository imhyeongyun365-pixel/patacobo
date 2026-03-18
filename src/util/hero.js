const img = (path) => `/img/${path}`;


// Hero 슬라이더용 "가짜 DB" 데이터
export const heroSlides = [
  {
    id: "hs-1",
    title: "New Arrivals",
    subtitle: "혹독한 테스트로 증명된 내구성과 편안함은 압도적인 자연 속에서도 당신이 더 말리,<br/> 더 높이 나아갈 수 있게 합니다.",
    desc: "피부 본연의 균형을 위한 미니멀 케어",
    ctaText: "Shop",
    ctaHref: "/products",
    image: {
      desktop: img("topbanner-slide_d-img1.png"),
      mobile: img("topbanner-slide_m-img1.png"),
    },
    alt: "비건 스킨케어 히어로 배너",
    active: true,
    order: 1,
  },
  {
    id: "hs-2",
    title: "Hydration That Lasts",
    subtitle: "Moisture Barrier Care",
    desc: "가볍지만 깊게, 산뜻한 촉촉함",
    ctaText: "컬러립밤 보러가기",
    ctaHref: "/story/hydration",
    image: {
      desktop:  img("topbanner-slide_d-img2.png"),
      mobile: img("topbanner-slide_m-img2.png"),
    },
    alt: "보습 라인 배너",
    active: true,
    order: 2,
  },
  {
    id: "hs-3",
    title: "Scent-Free, Worry-Free",
    subtitle: "Sensitive Skin Friendly",
    desc: "민감 피부를 위한 무향 포뮬러",
    ctaText: "스타터 키트 보러가기",
    ctaHref: "/collections/sensitive",
    image: {
      desktop:  img("topbanner-slide_d-img3.png"),
      mobile: img("topbanner-slide_m-img3.png"),
    },
    alt: "민감 피부 라인 배너",
    active: true,
    order: 3,
  }
  
];