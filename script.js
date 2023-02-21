//Elements
const lamp = document.querySelector('#lamp')
const btn_on = document.querySelector('#turnOn')
const btn_off = document.querySelector('#turnOff')

//Events
btn_on.addEventListener('click', () => {
    lamp.src = './assets/ligada.jpg'
})

btn_off.addEventListener('click', () => {
    lamp.src = './assets/desligada.jpg'
})