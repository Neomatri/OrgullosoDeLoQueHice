//Version simple

// let nombre = prompt("Escriba su nombre:");
// let apellido = prompt("Escriba su apellido:");

// if (nombre == "Thiago" && apellido == "Lartigau") {
//   bienvenida = (nombre, apellido) => {
//     let saludo = `Bienvenid@ ${nombre} ${apellido}.`;
//     return saludo;
//   };
//   let resultado = bienvenida(nombre, apellido);
//   alert(resultado);
// } else {
//   alert(`Error, vuelva a intentarlo.`);
// }


// Version echa con Callback
function pedirNombre(callback) {
  let nombre = prompt("Escribi tu nombre:");
  let apellido = prompt("Escribi tu apellido:");
  let verificarLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;

  if(nombre.match(verificarLetras) && apellido.match(verificarLetras)){
    callback(nombre, apellido);
  } else {
    alert("Error, vuelva a intentarlo.")
  }
}

function saludo(nombre, apellido) {
  alert(`Bienvenido ${nombre} ${apellido}`);
}

pedirNombre(saludo);


