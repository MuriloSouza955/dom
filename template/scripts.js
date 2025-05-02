/*

Criando Elementos
Nesta aula, aprendemos a criar elementos com JavaScript e inseri-los na DOM. Utilizamos o método document.createElement para criar novos elementos, como li e span, e o método append para adicionar elementos. Também exploramos o método prepend para adicionar elementos no início. Além disso, vimos como adicionar classes aos elementos criados. Com essas técnicas, é possível manipular a estrutura da página de forma dinâmica e criar elementos de forma programática.

*/

const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
// Adiciona uma classe ao elemento
newGuest.classList.add("guest")
// Adiciona um id ao elemento`
newGuest.id = "guest-3"
const guestName = document.createElement("span")

guestName.textContent = "Lucas"

const guestSurname = document.createElement("span")
guestSurname.textContent = "Fernandes"

// Adiciona após o ultimo filho, e aceita mais de um elemento
// newGuest.append(guestName, guestSurname)

// Adiciona antes do primeiro filho
// newGuest.prepend(guestSurname)

//É mais simples que o append e aceita apenas um argumento
newGuest.appendChild(guestName)

guests.append(newGuest)