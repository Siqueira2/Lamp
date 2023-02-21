//Elements
const lamp = document.querySelector('#lamp')
const btn_on = document.querySelector('#turnOn')
const btn_off = document.querySelector('#turnOff')
const body = document.querySelector('body')

//Events
btn_on.addEventListener('click', () => {
    lamp.src = './assets/ligada.jpg'
    body.classList.add('on')
})

btn_off.addEventListener('click', () => {
    lamp.src = './assets/desligada.jpg'
    body.classList.remove('on')
})