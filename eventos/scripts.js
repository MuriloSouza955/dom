/*

Eventos de formulário
Nesta aula, focamos nos eventos de formulário, mostrando como selecionar um formulário e lidar com eventos como OnSubmit. Expliquei a diferença entre usar OnSubmit diretamente e addEventListener, destacando que OnSubmit considera apenas o último listener criado, enquanto addEventListener executa todos. Demonstrei na prática como isso afeta o comportamento dos eventos. Essas diferenças são importantes para escolher a abordagem correta ao lidar com eventos em formulários.

*/

const form = document.querySelector('form');

// com o OnSubmit, vai mostrar apenas o ultimo listener criado
form.onsubmit = (event) => {
    event.preventDefault();
    console.log('Formulário foi enviado! (OnSubmit1)');
};

form.onsubmit = (event) => {
    event.preventDefault();
    console.log('Formulário foi enviado! (OnSubmit2)');
};

// Já com addEventListener, vai mostrar todos os listeners criados
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formulário foi enviado! (addEventListener3)');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formulário foi enviado! (addEventListener4)');
});