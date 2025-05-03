const input = document.querySelector('input');
const form = document.querySelector('form');


/*
input.addEventListener('input', (e) => {
    const value = input.value;
    
    const regex = /\D+/g;

    //Retorna o padrão encontrado na string
    // console.log(value.match(regex));

    //Verifica se o padrão é atendido
    // const isValue = regex.test(value);
    // console.log(isValue);
});
*/

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    const regex = /\D+/g;

    if (regex.test(value)) {
        console.log(value)
    }else{
        alert("Padrão não encontrado!");
    }


    // const value = input.value.replace(regex, "");
    // console.log(value);
});
