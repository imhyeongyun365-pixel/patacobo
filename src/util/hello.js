const img = (path) => `/img/${path}`;
export const helloData = {

  media: {
    type: "image",                     // "image" | "video"
    src: img("hello-image.png"),   // public 폴더 기준
    alt: "Pink square demo image",
    radius: 24                         // 이미지 둥근 모서리(px)
  },

  // eyebrow: "Hello❤️ We are TOCOBO!",
  title: "POWSLAYER",
  description:
    "가장 깊고 가파른 파우더를 위한<br/>빅마우틴 프리라이드 키트",
  cta: {
    label: "Shop",
    href: "/about"
  }
};


