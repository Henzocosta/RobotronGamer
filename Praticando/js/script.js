const click = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado")

click.addEventListener("click", (evento) => {
     resultado.innerHTML = "Fui Clicado";
});