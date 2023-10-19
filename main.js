const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
// variavel de controle
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
})

// funções
function handleTryClick(event){
    event.preventDefault() // nao faca o padrao

    const inputNumber = document.querySelector("#inputNumber")
    
    if(inputNumber.value > 10 || inputNumber.value < 1){
        alert('Escolha um número de 0 a 10!')
    }

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }

    if(!isNaN(Number(inputNumber.value))){ // Verifica se o valor é um número

        inputNumber.value = "" // pegar valores de um input / limpar o numero do campo e em seguida aumentar o número de tentativas
        xAttempts++
    }
}

// toda vez que for fazer o reset da aplicação também reseta o random number
function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}