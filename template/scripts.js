/*

Manipulando Conteúdo
Neste vídeo, expliquei como manipular o conteúdo dos elementos no DOM. Mostrei como selecionar elementos pelo ID, acessar propriedades como textContent para exibir e atribuir conteúdo em texto. Também abordei as diferenças entre textContent, innerText e innerHTML, destacando que textContent exibe conteúdo visível e oculto, enquanto innerText mostra apenas o conteúdo visível.

*/

const guest = document.querySelector('#guest-1');

console.log(guest.textContent); // retorna o conteudo (texto) do elemento, visível e o oculto

guest.textContent = 'Murilo'; // altera o conteudo (texto) do elemento

console.log(guest.innerText); // retorna o conteudo (texto) do elemento

console.log(guest.innerHTML); // retorna o conteudo (html) do elemento