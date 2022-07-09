const botaoPedra = document.querySelector('#btnPedra');

let userPlay = ''
const botoes = document.querySelectorAll('.botoes');
botoes.forEach(botoes => {
  botoes.addEventListener('click', () => {
    userPlay = botoes.id
    console.log(userPlay)
  })
})