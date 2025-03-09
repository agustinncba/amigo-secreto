// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

/**
 * Funcion para agregar amigos con la tecla enter.
 */
function enterKey() {
  let input = document.getElementById("amigo");
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      agregarAmigo();
    }
  });
}
enterKey();

/**
 * Funcion para validar solo el ingreso de letras en el input.
 */
function validarLetras(string) {
  const regex = /^[A-Za-z][A-Za-z\s]*$/;
  if (regex.test(string)) {
    resultado.innerHTML = "";
    return true;
  }
  resultado.innerHTML =
    "<h6 style='color:white; background-color:red; padding:5px; border-radius:5px'>¡Solo se permiten letras!</h6>";
    document.getElementById("amigo").value = "";
  return false;
}

/**
 * Funcion para agregar amigos en un array, si no se ingreso ningun nombre
 * devolvera un mensaje de alerta.
 */
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo.length === 0) {
    alert("Porfavor, ingrese un nombre!");
  } else if (validarLetras(amigo) && validarAmigo(amigo) === false) {
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    imprimirAmigos();
  }
}

/**
 * Validar si el nombre ingresado ya se encuentra en la lista.
 */
function validarAmigo(amigo) {
  for (let i = 0; i < amigos.length; i++) {
    if (amigo.toUpperCase() === amigos[i].toUpperCase()) {
      alert("El nombre ingresado ya se encuentra en la lista");
      document.getElementById("amigo").value = "";
      return true;
    }
  }
  return false;
}

/**
 * Funcion para imprimir los nombres de amigos en el front
 * Limpiamos el front y luego iteramos e imprimimos con un bucle for.
 */
function imprimirAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li id='${[i]}'> ${amigos[i]} </li>`;
  }
}

/**
 * Funcion para la eliminar de la lista un amigo.
 */
function eliminarAmigo() {
  let nombres = document.getElementById("listaAmigos");
  nombres.addEventListener("click", (e) => {
    amigos.splice(e.target.id, 1);
    imprimirAmigos();
    console.log(amigos);
  });
}
eliminarAmigo();

/**
 * Funcion para sortear el amigo secreto.
 * Obtenemos un numero aleatorio segun la cantidad del array
 * Validamos si el array se encuentra vacio sino imprimira el amigo secreto.
 */
function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  let numeroAletorio = Math.floor(Math.random() * amigos.length);

  if (amigos.length === 0) {
    alert("No hay ningun amigo en la lista");
  } else {
    resultado.innerHTML =
      "<h4 style='color:white; background-color:green; padding:5px; border-radius:5px'>El amigo secreto es: " +
      amigos[numeroAletorio] +
      "</h4>";
  }
}
