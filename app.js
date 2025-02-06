// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

/**
 * Funcion para agregar amigos en un array, si no se ingreso ningun nombre
 * devolvera un mensaje de alerta.
 */
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo.length === 0) {
    alert("Porfavor ingrese un amigo");
  } else {
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    imprimirAmigos();
  }
  console.log(amigos);
}

/**
 * Funcion para imprimir los nombres de amigos en el front
 * Limpiamos el front y luego iteramos e imprimimos con un bucle for.
 */
function imprimirAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
  }
}

/**
 * Funcion para sortear el amigo secreto.
 * Obtenemos un numero aleatorio segun la cantidad del array
 * Validamos si el array se encuentra vacio sino imprimira el amigo secreto.
 */
function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  let numeroAletorio = Math.floor(Math.random() * amigos.length);

  if (amigos.length === 0) {
    alert("No hay ningun amigos en la lista");
  } else {
    resultado.innerHTML = "<h1>" + amigos[numeroAletorio] + "</h1>";
  }
}
