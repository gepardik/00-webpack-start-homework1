import './index.sass'
import buttons from './data'

let activeImgIdx = 0
const app = document.getElementById('app')
let audio = new Audio(buttons[0].sound)
audio.volume = 0.5

function btnClickHandler(btn, idx) {
    buttons[activeImgIdx].active = false
    buttons[idx].active = true
    updateMainBg(idx)
    let isPlaying = (activeImgIdx === idx) ? !(buttons[activeImgIdx].playing) : true
    buttons[idx].playing = isPlaying
    updateButtons(activeImgIdx, idx, isPlaying)
    activeImgIdx = idx
}

function volumeChangeHandler(evt) {
    audio.volume = Number(evt.target.value) / 100
}

function updateButtons(activeImgIdx, idx, isPlaying) {
    const prevBtn = buttons[activeImgIdx]
    const nextBtn = buttons[idx]
    if (isPlaying) {
        if (prevBtn.id !== nextBtn.id) {
            document.getElementById(prevBtn.id).firstChild.classList.remove('pause')
            audio.pause()
            audio.setAttribute('src', nextBtn.sound)
        }
        document.getElementById(nextBtn.id).firstChild.classList.add('pause')
        audio.play()
    } else {
        document.getElementById(nextBtn.id).firstChild.classList.remove('pause')
        audio.pause()
    }
}

function updateMainBg(idx) {
    app.style.background = `url(${buttons[idx].bg})`
}

function draw() {
    const header = document.createElement('h1')
    header.textContent = 'Weather sounds'

    const btnContainer = document.createElement('div')
    btnContainer.className = 'btn-container'

    buttons.forEach((button, idx) => {
        const el = document.createElement(button.type)
        const icon = document.createElement('div')
        icon.className = 'icon'
        icon.style.backgroundImage = `url(${button.icon})`
        el.appendChild(icon)
        el.id = button.id
        el.classList.add(...button.classes)
        el.style.background = `url(${button.bg})`
        el.addEventListener('click', () => {
            btnClickHandler(button, idx)
        })

        btnContainer.appendChild(el)
        updateMainBg(activeImgIdx)
    })


    const volumeBlock = document.createElement('div')
    volumeBlock.className = 'volume-block'
    const volumeScale = document.createElement('div')
    volumeScale.className = 'volume-scale'
    //<input type="range" min="0" max="100" step="1">
    const volumeControl = document.createElement('input')
    volumeControl.setAttribute('type', 'range')
    volumeControl.setAttribute('min', '0')
    volumeControl.setAttribute('max', '100')
    volumeControl.setAttribute('step', '1')
    volumeControl.addEventListener('input', (e) => {volumeChangeHandler(e)})
    volumeBlock.appendChild(volumeControl)


    document.body.appendChild(header)
    document.body.appendChild(btnContainer)
    document.body.appendChild(volumeBlock)
}

draw()