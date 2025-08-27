//1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
//Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

//funcion que va a crear un numero aleatorio
let numero;
const numeroAleatorio = () => {
  numero = Math.floor(Math.random() * 50 + 1);
  alert('Se creo un numero magico, Adivina el numero entre el 1 al 100 🪄')
  divInput.classList.remove("d-none")
  console.log(numero);
};

const obtenerNumero = ()=> {
    const numeroUsuario = parseInt(inputNumero.value);

      if (isNaN(numeroUsuario)) {
        alert("⚠️ Ingresá un número válido.");
        return;
      }

      if (numeroUsuario === numero) {
        alert("🎉 ¡Felicitaciones! Adivinaste el número mágico.");
        
      } else if (numeroUsuario < numero) {
        alert("El número es más alto. Intentá otra vez.");
      } else {
        alert("El número es más bajo. Intentá otra vez.");
      }
}

//traer el boton
const comenzar = document.getElementById("comenzarBtn");
const enviarBtn = document.getElementById('botonEnviar')
const inputNumero = document.getElementById('inputNumero')
const divInput = document.getElementById('divInput')

//eventos
comenzar.addEventListener("click", numeroAleatorio);
enviarBtn.addEventListener("click", obtenerNumero)

