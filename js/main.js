const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const braco = document.querySelector("#braco");

somar.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) + 1;
});



/* Quando uma função é anonima podemos sinalizaca com '' => '' tambem conhecido como
arrow function. */ 