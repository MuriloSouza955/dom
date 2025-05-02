/*

Manipulando Atributos
É possível manipular atributos dos elementos da página utilizando JavaScript. Por exemplo, selecionar um input e desabilitá-lo com setAttribute('disabled', true). Também é possível alterar o tipo do input, como de texto para arquivo, com setAttribute('type', 'file'). Além disso, é possível remover um atributo com removeAttribute('nomeDoAtributo'). Essas manipulações são úteis para personalizar a interação do usuário com formulários, como bloquear campos ou alterar tipos de entrada.

*/

const input = document.querySelector('input');

// input.setAttribute('disabled', true); // Desabilita o input

// input.setAttribute('type', 'file'); // Altera o tipo do input para arquivo

// input.removeAttribute('id'); // Remove o atributo disabled do input