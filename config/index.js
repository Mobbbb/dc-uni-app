const ATTR_MAP = {
    'L': '光',
    'D': '暗',
    'F': '火',
    'W': '水',
    'G': '木',
}

const CODE_MAP = {
    '00': '人间体',
    '01': '初始',
    '02': '满好感',
}

const FOOTER_CONFIG = [
    {
        id: '0',
        icon: 'icon_child.webp',
        name: '角色',
        dataFileName: 'childs',
    },
    {
        id: '1',
        icon: 'icon_dolls.png',
        name: '人偶',
        dataFileName: 'dolls',
        size: 32,
    },
    {
        id: '2',
        icon: 'icon_card.png',
        name: '魂卡',
        dataFileName: 'cartas',
        size: 32,
    },
    {
        id: '4',
        icon: 'bg-icon.png',
        name: '其他',
        dataFileName: 'others',
        size: 32,
    },
    {
        id: '3',
        icon: 'default.png',
        name: '史莱姆',
        dataFileName: 'slims',
        size: 28,
    },
]

const BG_CONFIG_COVER = [
    {
        icon: 'bg_01.webp',
        minIcon: 'bg_01.jpg',
        width: 1920,
        height: 1080,
        type: 'cover',
    },
    {
        icon: 'bg_02.webp',
        minIcon: 'bg_02.jpg',
        width: 1920,
        height: 1080,
        type: 'cover',
    },
    {
        icon: 'bg_03.webp',
        minIcon: 'bg_03.jpg',
        width: 1920,
        height: 1080,
        type: 'cover',
    },
    {
        icon: 'bg_04.webp',
        minIcon: 'bg_04.jpg',
        width: 1920,
        height: 1080,
        type: 'cover',
    },
    {
        icon: 'bg_05.webp',
        minIcon: 'bg_05.jpg',
        width: 1920,
        height: 1080,
        type: 'cover',
    },
    {
        icon: 'bg_06.webp',
        minIcon: 'bg_06.jpg',
        width: 1920,
        height: 1080,
        type: 'cover',
    },
]

const BG_CONFIG_REPEAT = [
    {
        icon: 'bg_128_01.webp',
        size: 128,
        type: 'repeat',
    },
    {
        icon: 'bg_128_02.webp',
        size: 128,
        type: 'repeat',
    },
    {
        icon: 'bg_256_01.webp',
        size: 256,
        type: 'repeat',
    },
    {
        icon: 'bg_256_02.webp',
        size: 256,
        type: 'repeat',
    },
    {
        icon: 'bg_512_01.webp',
        minIcon: 'bg_512_01.jpg',
        size: 512,
        type: 'repeat',
    },
    {
        icon: 'bg_512_02.webp',
        minIcon: 'bg_512_02.jpg',
        size: 512,
        type: 'repeat',
    },
    {
        icon: 'black',
        type: 'color',
    },
]

// const deviceMatch = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) || [] // eslint-disable-line
const PC = 'PC'

export default {
    isMobile: 1,
    ATTR_MAP,
    CODE_MAP,
    FOOTER_CONFIG,
    BG_CONFIG_COVER,
    BG_CONFIG_REPEAT,
}