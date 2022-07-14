
//jogada computador
let choices = ["pedra", "papel", "tesoura"]
computerPlay = choices[Math.floor(Math.random()*3)]
console.log(`COMPUTADOR escolheu ${computerPlay}.`)

//jogado do user

const exibeJogada = document.querySelector('#jogada');

const userPlay = () => {
  const botoes = document.querySelectorAll('#botoes')
  
  botoes.forEach(botao => {
    botao.addEventListener('click', () => { return botao.id})
  })
}

function gameOn(computerPlay, userPlay) {
  
  return `computador ${computerPlay}, user ${userPlay}.`
}

console.log(gameOn(computerPlay, userPlay))