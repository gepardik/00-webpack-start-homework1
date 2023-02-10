export default [
    {
        id: 'sun',
        type: 'button',
        classes: [
            'btn',
            'btn-sun',
        ],
        bg: './assets/summer-bg.jpg',
        icon: './assets/icons/sun.svg',
        sound: './assets/sounds/summer.mp3',
        active: true,
        playing: false,
    },
    {
        id: 'rain',
        type: 'button',
        classes: [
            'btn',
            'btn-rain'
        ],
        bg: './assets/rainy-bg.jpg',
        icon: './assets/icons/cloud-rain.svg',
        sound: './assets/sounds/rain.mp3',
        active: false,
        playing: false,
    },
    {
        id: 'snow',
        type: 'button',
        classes: [
            'btn',
            'btn-snow'
        ],
        bg: './assets/winter-bg.jpg',
        icon: './assets/icons/cloud-snow.svg',
        sound: './assets/sounds/winter.mp3',
        active: false,
        playing: false,
    },
]