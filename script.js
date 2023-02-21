//Elements
const lamp = document.querySelector('#lamp')
const btn_on = document.querySelector('#turnOn')
const btn_off = document.querySelector('#turnOff')
const body = document.querySelector('body')
const title = document.querySelector('h1')

//Events
btn_on.addEventListener('click', () => {
    lamp.src = './assets/ligada.jpg'
    body.classList.add('off')
    title.classList.add('titleoff')
    btn_on.classList.add('buttonoff')
    btn_off.classList.add('buttonoff')
})

btn_off.addEventListener('click', () => {
    lamp.src = './assets/desligada.jpg'
    body.classList.remove('off')
    title.classList.remove('titleoff')
    btn_on.classList.remove('buttonoff')
    btn_off.classList.remove('buttonoff')
})