
const exibeJogada = document.querySelector('#jogada');
const exibeJogadas = document.querySelector('#jogadas')
const exibeRodada = document.querySelector('#rodada')
const placar = document.querySelector('#placar')
const botoesJogo = document.querySelector('#botoesJogo')
const reiniciar = document.querySelector('#reiniciar')
const exibeVideo = document.querySelector('#video')

//videos jogada do computador
const videoPlay = {
  pedra: {
    titulo: "Pedra !",
    source: './midia/pedra.jpg'
  },
  papel: {
    titulo: "Papel !",
    source: './midia/papel.jpg'
  },
  tesoura: {
    titulo: "Tesoura !",
    source: './midia/tesoura.jpg'
  }
};

//jogada computador
function computerPlay() {
  let choices = ["pedra", "papel", "tesoura"]
  return choices[Math.floor(Math.random()*3)]
}

//logica do jogo - atribui ponto para o vencedor. 0 computador 1 user, 2 empate
function gameRules(user, pc) {
      let point = 0

      //pedra x papel
      if(user === 'pedra' && pc === 'papel') {
        exibeJogada.innerHTML = 'Papel enrola pedra... você perdeu'
      } else if (user === 'papel' && pc === 'pedra') {
        exibeJogada.innerText = 'Papel enrola Pedra, você VENCEU'
        point = 1
      }
      //pedra x tesoura
      else if (user === 'pedra' && pc === 'tesoura') {
        exibeJogada.innerText = 'Pedra quebra Tesoura, você VENCEU'
        point = 1
      } else if (user === 'tesoura' && pc === 'pedra') {
        exibeJogada.innerText = 'Pedra quebra Tesoura, você perdeu'
      }
      //tesoura x papel
      else if (user === 'tesoura' && pc === 'papel') {
        exibeJogada.innerText = 'Tesoura corta Papel, user VENCEU'
        point = 1
      } else if (user === 'papel' && pc === 'tesoura') {
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
  let video;
  let pontoUser = 0;
  let pontoPc = 0;
  let pontoEmpate = 0;
  const botoes = document.querySelectorAll('.botoes');
  botoes.forEach(botao => {
    botao.addEventListener('click', escolha => {
      user = escolha.target.id
      pc = computerPlay();
      // foto da jogado do computador
      video = videoPlay[pc].source;

      exibeVideo.innerHTML = `<img height="200" src="${video}" alt="imagem titulo">`
      exibeJogadas.innerHTML = `Você escolheu <strong>${user}</strong>. Computador escolheu <strong>${pc}</strong>.`
      
      //vencedor recebe o ponto atribuido pelo gameRules
      vencedor = gameRules(user, pc);

      if (vencedor === 0) {
        pontoPc += 1;
      } else if (vencedor === 1) {
        pontoUser += 1;
      } else {
        pontoEmpate += 1;
      };
      
      placar.innerHTML = `Você: ${pontoUser} | empates: ${pontoEmpate} | Computador: ${pontoPc}`;

      console.log(`pontos user ${pontoUser} | empates ${pontoEmpate} | pontos computador ${pontoPc}`)

      if (pontoUser === 5 || pontoPc === 5) {
        exibeJogada.innerText = "FIM DE JOGO"
        exibeJogadas.innerText = ""
        botoesJogo.innerHTML = "Deseja jogar novamente?"
        botaoReiniciar = document.createElement('button')
        // botaoReiniciar.setAttribute('id', 'reiniciar')
        botaoReiniciar.innerText = "REINICIAR"
        reiniciar.appendChild(botaoReiniciar)
        botaoReiniciar.addEventListener('click', () => {
          window.location.reload();
        })
      }
    })
  })
  return 'rodou rodada'
}

function game() {
  rodada();
  return "ok rodou uma"
}

console.log(game())