// src/util/footer.js
const img = (path) => `/img/${path}`;
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

// 로고
export const logoData = {
  src: img("footer-Patagonia.png"),
  alt: "PATACOBO 로고",
  href: "/",
};

// 회사 정보
export const companyData = [
  "(주)파타고니아코리아",
  "주소 : 서울 강남구 삼성로122길 25 (삼성동) 파타코니아코리아",
  "사업자등록번호 : 220-88-66550",
  "통신판매업신고 : 2016-서울강남-03669"
];
export const footerLegal = {
  copyright: "COPYRIGHT© 2025 Patagonia. lnc. ALL RIGHT RESERVED.",
  links: [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용안내", href: "/guide" }
  ]
};
// 고객센터
export const customerCenterData = {
  title: "Customer Center",
  tel: { value: "1544-1876", href: "tel:0263522410" },
  hours: "(평일) 오전 9시 반 ~ 오후 6시 / 점심시간 오후 12시 반 ~ 오후 1시 반",
  notice: "주말 및 공휴일 휴무",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "Need Help?",
    items: [
      { label: "고객센터", href: "#" },
      { label: "마이페이지", href: "#" },
      { label: "반품 / 환불 안내", href: "#" },
      { label: "수신 안내 및 조회", href: "#" },
      { label: "사이즈 & 및 가이드", href: "#" },
      { label: "로그인", href: "/login" },
    ],
  }
];

export const socialLinks = [
  {
    id: "kakao",
    label: "KakaoTalk 채널",
    href: "https://pf.kakao.com/your-channel",
    icon: RiKakaoTalkFill
  },
  {
    id: "instagram",
    abel: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];
