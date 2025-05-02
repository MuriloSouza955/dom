/*

Eventos em um elemento específico
Nesta aula, aprendemos a identificar eventos em elementos específicos em JavaScript. Foi mostrado como observar o evento de scroll em uma lista, exibindo informações como a distância do topo da lista. Também foi demonstrado como manipular o scroll, levando o usuário de volta ao topo da lista. Além disso, vimos como adicionar eventos de clique em botões específicos. A importância de desabilitar o comportamento padrão do evento de clique também foi destacada.

*/

const ul = document.querySelector('ul');

ul.addEventListener('scroll', (event) => {
    if (ul.scrollTop === 303) {
        ul.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

const button = document.querySelector('button');
button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Botão clicado!');
});