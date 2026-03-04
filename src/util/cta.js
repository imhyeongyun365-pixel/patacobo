const img = (path) => `/img/${path}`;
export const categories = [
  {
    id: 61,
    slug: "make-up",
    name: "Name Puff",
    href: "/category/make-up/61/",
    img: {
      src: img("cta-img1.png"),
      alt: "네임퍼프",
    },
  },
  {
    id: 42,
    slug: "R1",
    name: "R1 Air",
    href: "/category/sun/42/",
    img: {
      src: img("cta-img2.png"),

      alt: "R1 에어",
    },
  },
  {
    id: 52,
    slug: "blackhole",
    name: "Black Hole",
    href: "/category/lip/52/",
    img: {
      src: img("cta-img3.png"),

      alt: "블랙홀",
    },
  },
  {
    id: 50,
    slug: "skincare",
    name: "Rainwear",
    href: "/category/skincare/50/",
    img: {
      src: img("cta-img4.png"),

      alt: "레인웨어",
    },
  },
  {
    id: 47,
    slug: "retro",
    name: "ReotroX",
    href: "/category/cleansing/47/",
    img: {
      src: img("cta-img5.png"),

      alt: "레트로X",
    },
  },
  {
    id: 28,
    slug: "parka",
    name: "Grade VII Down Parka",
    href: "/category/setetc/28/",
    img: {
      src: img("cta-img6.png"),

      alt: "그레에드 VII 다운 파카",
    },
  },
];

export default categories;