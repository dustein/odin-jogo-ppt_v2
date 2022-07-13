

let playerSelection = ''

//jogada do user pelo botao
  const botoes = document.querySelectorAll('.botoes');
  const jogadaDiv = document.querySelector('#jogada');
  botoes.forEach(botoes => {
    botoes.addEventListener('click', () => {
      playerSelection = botoes.id
      // console.log(playerSelection)
      jogada.innerText = playerSelection
      return "oi"
    })
  })

  //



