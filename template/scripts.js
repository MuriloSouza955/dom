/*

Eventos
Nesta aula de programação em JavaScript, aprendemos sobre eventos, que são ações realizadas pelo usuário para interagir com a aplicação. Foi mostrado como adicionar event listeners para observar e lidar com eventos, como o de carregamento da página e de clique em elementos do DOM. Também foi abordado como recuperar informações do evento, como o elemento clicado, e como prevenir comportamentos padrão, como recarregar a página ao clicar em um botão de envio em um formulário.

*/

window.addEventListener('load', () => {
    console.log('A página foi carregada!');
});

addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event); // retorna todas as informações do evento
    console.log(event.target); // retorna o elemento clicado
    console.log(event.target.textContent); // retorna o texto do elemento clicado
});