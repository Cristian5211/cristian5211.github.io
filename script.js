// Seleccionamos todos los elementos con la clase "elemento"
const elementos = document.querySelectorAll('.elemento');

// Creamos una función que cambia el color de fondo del elemento que se le pase como argumento
function cambiarColorDeFondo(elemento) {
  elemento.style.backgroundColor = 'blue';
}

// Agregamos un event listener a cada elemento para que llame a la función "cambiarColorDeFondo" cuando se haga clic en él
elementos.forEach((elemento) => {
  elemento.addEventListener('click', () => {
    cambiarColorDeFondo(elemento);
  });
});
