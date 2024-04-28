

/* Criando a função para abrir o menu e fechar */
let menu = document.querySelector('.menu');
let header = document.querySelector('header');
menu.onclick = function(){
    header.classList.toggle('active')
}