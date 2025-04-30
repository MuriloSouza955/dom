/*
Query Selector
Nesta aula, foi abordado o uso do Query Selector para acessar elementos no DOM. Foi mostrado como selecionar elementos por ID e por classe, além de destacar a diferença entre QuerySelector e QuerySelector.all, que retorna todos os elementos encontrados.
*/

// Selecionando um elemento pelo ID
const guest = document.querySelector('#guest-1');
console.log(guest);

// Selecionando um elemento pela classe
//const guests = document.querySelector('.guest');
const guests = document.querySelectorAll('.guest');
console.log(guests);