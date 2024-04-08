let button = document.querySelector('.botao');
let res = document.querySelector('h1');

function titulo() {
    console.log('Button foi clicado');
}

button.addEventListener('click', titulo);