// Visualizando o DOM (document object model)
console.log(document);

// Obtendo o title da página
console.log(document.title);

// obtendo o elemento pelo ID (SELETOR ID)
const guest = document.getElementById("guest-1")
console.log(guest);

// mostra as propriedades do elemento
console.dir(guest);

// acessar o elemento pela classe
const guests = document.getElementsByClassName("guest")
console.log(guests.item(0));
console.log(guests[1]);

// acessar o elemento pela tag

const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag[0]);