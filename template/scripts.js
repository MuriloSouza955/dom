/*

Alterando Estilos
Nesta aula, aprendemos a manipular estilos dos elementos da DOM utilizando JavaScript. Foi mostrado como adicionar e remover classes dinamicamente, além de utilizar o método toggle para alternar entre adicionar e remover uma classe. Também foi demonstrado como modificar propriedades de estilo, como a cor de um botão, diretamente pelo JavaScript. Essas técnicas são úteis para personalizar a aparência dos elementos na página de forma dinâmica.

*/

const input = document.querySelector('#name');
// // adiciona a classe input-error
// input.classList.add('input-error');

// // remove a classe input-error
// input.classList.remove('input-error');

// // adiciona a classe input-error se não estiver presente, ou remove se já estiver presente
// input.classList.toggle('input-error');

const button = document.querySelector('button');

//Modificando o estilo diretamente
// button.style.backgroundColor = 'red';