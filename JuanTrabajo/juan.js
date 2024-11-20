document.addEventListener('DOMContentLoaded', () => {
    const spanContador = document.getElementById("spanContador");
    const boton = document.getElementById("boton");

    let contador = 0;

    boton.addEventListener('click', () => {
        contador++;
        spanContador.innerText = contador;
    });
});
