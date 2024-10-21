let input = document.querySelector('.input1')
let button = document.querySelector('.button1')
let h2Text = document.querySelector('.h2')
let textArray = []

button.addEventListener('click',()=>{
    let textInput = input.value
    textArray.push(textInput)
    h2Text.innerHTML = ''


    textArray.forEach(text =>{
        let textReverse = textInput.split('').reverse().join('')
        h2Text.innerHTML += textReverse
    })


})