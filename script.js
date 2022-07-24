//area de axibicao da jogada
const exibeJogada = document.querySelector('#jogada');
const exibeJogadas = document.querySelector('#jogadas')
const exibeRodada = document.querySelector('#rodada')
const placar = document.querySelector('#placar')
//fim exibicao jogada

//jogada computador
function computerPlay() {
  let choices = ["pedra", "papel", "tesoura"]
  return choices[Math.floor(Math.random()*3)]

}

function gameRules(user, pc) {
      let point = 0

      //pedra x papel
      if(user === 'pedra' && pc === 'papel') {
        exibeJogadas.innerText = 'Você jogou Pedra, o computador jogou Papel...'
        exibeJogada.innerText = 'Papel enrola Pedra... você perdeu'
      } else if (user === 'papel' && pc === 'pedra') {
        exibeJogadas.innerText = 'Você jogou Papel, o computador jogou Pedra...'
        exibeJogada.innerText = 'Papel enrola Pedra, você VENCEU'
        point = 1
      }
      //pedra x tesoura
      else if (user === 'pedra' && pc === 'tesoura') {
        exibeJogadas.innerText = 'Você jogou Pedra, o computador jogou Tesoura...'
        exibeJogada.innerText = 'Pedra quebra Tesoura, você VENCEU'
        point = 1
      } else if (user === 'tesoura' && pc === 'pedra') {
        exibeJogadas.innerText = 'Você jogou Tesoura, o computador jogou Pedra...'
        exibeJogada.innerText = 'Pedra quebra Tesoura, você perdeu'
      }
      //tesoura x papel
      else if (user === 'tesoura' && pc === 'papel') {
        exibeJogadas.innerText = 'Você jogou Tesoura, o computador jogou Papel...'
        exibeJogada.innerText = 'Tesoura corta Papel, user VENCEU'
        point = 1
      } else if (user === 'papel' && pc === 'tesoura') {
        exibeJogadas.innerText = 'Você jogou Papel, o computador jogou Tesoura...'
        exibeJogada.innerText = 'Tesoura corta Papel, user perdeu'
      }
      // empate
      else if (user === pc) {
        
        exibeJogada.innerText = 'Jogaram igual, empate na rodada'

        point = 2
      } else {
        console.log('caso não previsto')
      }
    console.log("ponto pra " + point)
    return point
}

//jogada do user
function rodada() {
  let user;
  let pc;
  let pontoUser = 0;
  let pontoPc = 0;
  let pontoEmpate = 0;
  const botoes = document.querySelectorAll('.botoes');
  botoes.forEach(botao => {
    botao.addEventListener('click', escolha => {
      user = escolha.target.id
      pc = computerPlay();
      console.log(`User escolheu ${user}. Computador escolheu ${pc}`)

      vencedor = gameRules(user, pc)
      if (vencedor === 0) {
        console.log("ponto pro COMPUTADOR!")
        exibeRodada.innerText = "... Ponto pro compuador"
        pontoPc += 1;
      } else if (vencedor === 1) {
        console.log("ponto pro USER")
        exibeRodada.innerText = "... Ponto pro User"

        pontoUser += 1;
      } else {
        console.log("EMPATE!")
        pontoEmpate += 1;
      }
      
      placar.innerHTML = `pontos user ${pontoUser} | empates ${pontoEmpate} | pontos computador ${pontoPc}`;

      console.log(`pontos user ${pontoUser} | empates ${pontoEmpate} | pontos computador ${pontoPc}`)
    })
  })
  return 'rodou rodada'
}

function game() {
  rodada();
  return "ok rodou uma"
}

console.log(game())