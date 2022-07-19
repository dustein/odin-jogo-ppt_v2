//area de axibicao da jogada
const exibeJogada = document.querySelector('#jogada');
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
        exibeJogada.innerText = 'Papel enrola Pedra, você perdeu'
        console.log('papel enrola pedra, user perdeu')
      } else if (user === 'papel' && pc === 'pedra') {
        exibeJogada.innerText = 'Papel enrola Pedra, você VENCEU'
        console.log('papel enrola pedra, user VENCEU')
        point = 1
      }
      //pedra x tesoura
      else if (user === 'pedra' && pc === 'tesoura') {
        exibeJogada.innerText = 'Pedra quebra Tesoura, você VENCEU'
        console.log('pedra quebra tesoura, user VENCEU')
        point = 1
      } else if (user === 'tesoura' && pc === 'pedra') {
        exibeJogada.innerText = 'Pedra quebra Tesoura, você perdeu'
        console.log('pedra quebra tesoura, user perdeu')
      }
      //tesoura x papel
      else if (user === 'tesoura' && pc === 'papel') {
        exibeJogada.innerText = 'Tesoura corta Papel, user VENCEU'
        console.log('tesoura corta papel, user VENCEU')
        point = 1
      } else if (user === 'papel' && pc === 'tesoura') {
        exibeJogada.innerText = 'Tesoura corta Papel, user perdeu'
        console.log('tesoura corta papel, user perdeu')
      }
      // empate
      else if (user === pc) {
        exibeJogada.innerText = 'Jogaram igual, empate na rodada'

        console.log('jogaram igual, empate na rodada')
        point = 2
      } else {
        console.log('caso não previsto')
      }
    return point
}

//jogada do user
function rodada() {
  let user;
  let pc;
  const botoes = document.querySelectorAll('.botoes');
  botoes.forEach(botao => {
    botao.addEventListener('click', escolha => {
      user = escolha.target.id
      pc = computerPlay();
      console.log(`User escolheu ${user}`)
      console.log(`Computador esconlheu ${pc}`)

      gameRules(user, pc)
      console.log(gameRules(user, pc))




      //logica do jogo
      //pedra x papel
      // if(user === 'pedra' && pc === 'papel') {
      //   exibeJogada.innerText = 'Papel enrola Pedra, você perdeu'
      //   console.log('papel enrola pedra, user perdeu')
      // } else if (user === 'papel' && pc === 'pedra') {
      //   exibeJogada.innerText = 'Papel enrola Pedra, você VENCEU'
      //   console.log('papel enrola pedra, user VENCEU')
      //   point = 1
      // }
      // //pedra x tesoura
      // else if (user === 'pedra' && pc === 'tesoura') {
      //   exibeJogada.innerText = 'Pedra quebra Tesoura, você VENCEU'
      //   console.log('pedra quebra tesoura, user VENCEU')
      //   point = 1
      // } else if (user === 'tesoura' && pc === 'pedra') {
      //   exibeJogada.innerText = 'Pedra quebra Tesoura, você perdeu'
      //   console.log('pedra quebra tesoura, user perdeu')
      // }
      // //tesoura x papel
      // else if (user === 'tesoura' && pc === 'papel') {
      //   exibeJogada.innerText = 'Tesoura corta Papel, user VENCEU'
      //   console.log('tesoura corta papel, user VENCEU')
      //   point = 1
      // } else if (user === 'papel' && pc === 'tesoura') {
      //   exibeJogada.innerText = 'Tesoura corta Papel, user perdeu'
      //   console.log('tesoura corta papel, user perdeu')
      // }
      // // empate
      // else if (user === pc) {
      //   exibeJogada.innerText = 'Jogaram igual, empate na rodada'

      //   console.log('jogaram igual, empate na rodada')
      //   point = 2
      // } else {
      //   console.log('caso não previsto')
      // }
    })
  })
  return 'rodou rodada'
}

function game() {
  rodada();
  console.log('rodada,,,,')

}

console.log(game())