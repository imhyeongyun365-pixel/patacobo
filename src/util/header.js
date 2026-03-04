
const img = (path) => `/img/${path}`

export const headerData = {

    logo: {
        src: img('header-logo-img.png'),
        alt: 'PATACOBO',
        href: '/'
    },
    menus: [
        {
            id: 'Shop',
            label: 'Shop',
            href: '#Shop',
            type: 'section'
        },
        {
            id: 'Sports',
            label: 'Sports',
            href: '#Sports',
            type: 'section'
        },
        {
            id: 'Stories',
            label: 'Stories',
            href: '#Stories',
            type: 'section'
        }

    ],
    utils: [
        { id: "search", label: "검색", icon: img("header-right-img1_D.png"), href: "#" },
        { id: "account", label: "마이", icon: img("header-right-img2_D.png"), href: "#" },
        { id: "cart", label: "장바", icon: img("header-right-img3_D.png"), href: "#" },
    ],
    // 상단 공지/배너 (TopBanner용)
    topBanner: {
        enabled: true,
        height: 64,                   // px
        items: [
            { id: "tb-1", text: "제품의 수명을 늘리고, 책임 있는 소비 문화를 함께 만듷어가는 공간입니다.", href: "#" },
            { id: "tb-2", text: "옷을 수선해 오래 입는 일은 곧 환경을 위한 실천입니다.", href: "#" },
            { id: "tb-3", text: "이벤트 진행 중!", href: "#" },
        ],
        closeIcon: img("icon_pop_close_b.png"),
        background: "#060606",
        color: "#ffffff",
    },
}