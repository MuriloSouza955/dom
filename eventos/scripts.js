/*

Eventos em input
Neste vídeo, expliquei sobre eventos de input em JavaScript. Demonstrei como capturar eventos de "keydown" e "keypress" em um campo de input, destacando as diferenças entre eles. Também mostrei o evento "change", que é acionado quando o conteúdo do input é alterado. Expliquei a importância de conhecer esses eventos para ampliar as possibilidades de programação em JavaScript e se tornar um especialista na linguagem. É fundamental entender essas estruturas para utilizar a melhor abordagem em cada situação.



*/

const input = document.querySelector('input');

// //keydown - quando o usuário pressiona uma tecla (CTRL, SHIFT, TAB, etc)
// input.addEventListener('keydown', (event) => {
//     console.log(event.key);
// });

//keypress - quando o usuário pressiona uma tecla do tipo caractere (letras, números, etc)
input.addEventListener('keypress', (event) => {
    console.log(event.key);
});

//change - quando o conteúdo do input é alterado, mas dispara somento quando sai a caixa de texto.
input.onchange = () => {
    console.log('O conteúdo do input foi alterado!');
};

input.onchange = () => {
    inputChange();
};


function inputChange() {
    console.log('O conteúdo do input foi alterado!');
}