
const exibeJogada = document.querySelector('#jogada');
const exibeJogadas = document.querySelector('#jogadas')
const exibeRodada = document.querySelector('#rodada')
const placar = document.querySelector('#placar')
const botoesJogo = document.querySelector('#botoesJogo')
const reiniciar = document.querySelector('#reiniciar')
const exibeVideo = document.querySelector('#video')

const popFim = document.querySelector('#popFim');
const testaPop = document.querySelector('#testaPop')

testaPop.addEventListener('click', () => {
  popFim.setAttribute('style', 'display: block;')
})
//videos jogada do computador
const videoPlay = {
  pedra: {
    titulo: "Pedra !",
    source: './midia/vid_pedra.mp4'
  },
  papel: {
    titulo: "Papel !",
    source: './midia/vid_papel.mp4'
  },
  tesoura: {
    titulo: "Tesoura !",
    source: './midia/vid_tesoura.mp4'
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
      let played = ""
      let turn = {
        winner: point,
        play: played
      }
      //pedra x papel
      if(user === 'pedra' && pc === 'papel') {
        exibeJogada.innerHTML = 'Papel enrola pedra... você perdeu'
        played = 'Papel enrola Pedra...'
      } else if (user === 'papel' && pc === 'pedra') {
        exibeJogada.innerText = 'Papel enrola Pedra, você VENCEU'
        point = 1
        played = 'Papel enrola Pedra...'
      }
      //pedra x tesoura
      else if (user === 'pedra' && pc === 'tesoura') {
        exibeJogada.innerText = 'Pedra quebra Tesoura, você VENCEU'
        point = 1
        played = 'Pedra quebra a Tesoura...'
      } else if (user === 'tesoura' && pc === 'pedra') {
        exibeJogada.innerText = 'Pedra quebra Tesoura, você perdeu'
        played = 'Pedra quebra a Tesoura...'
      }
      //tesoura x papel
      else if (user === 'tesoura' && pc === 'papel') {
        exibeJogada.innerText = 'Tesoura corta Papel, user VENCEU'
        point = 1
        played = 'Tesoura corta o Papel...'
      } else if (user === 'papel' && pc === 'tesoura') {
        exibeJogada.innerText = 'Tesoura corta Papel, user perdeu'
        played = 'Tesoura corta o Papel...'
      }
      // empate
      else if (user === pc) {
        
        exibeJogada.innerText = 'Jogaram igual, empate na rodada'
        played = 'Escolheram a mesma jogada !'
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
  const botoes = document.querySelectorAll('.btnImage');
  botoes.forEach(botao => {
    botao.addEventListener('click', escolha => {
      user = escolha.target.id
      pc = computerPlay();
      // foto da jogado do computador
      exibeJogadas.innerHTML = `Você escolheu <strong>${user}</strong>. A Maria escolheu ...`
      // exibeVideo.innerHTML = `<img height="200" src="${videoPlay[pc].source}" alt="imagem titulo"></br><h2>${videoPlay[pc].titulo}</h2>`
      exibeVideo.innerHTML = `<video autoplay height="240"><source src="${videoPlay[pc].source}" type="video/mp4"></video></br><h2>${videoPlay[pc].titulo}</h2>`
      
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

      if(pontoUser === 5 || pontoPc === 5) {

        //se vencedor user
        if(pontoUser === 5) {
          exibeJogada.innerText = "Você alcançou 5 vitórias! FIM DE JOGO"
          window.alert('você venceu')
        } 
        exibeJogada.innerText = "Duda venceu 5 vezes, você perdeu! FIM DE JOGO"
        exibeJogadas.innerText = ""
        botoesJogo.innerHTML = "Deseja jogar novamente? Clique REINICIAR"
        botaoReiniciar = document.createElement('button')
        botaoReiniciar.setAttribute('id', 'reiniciar')
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