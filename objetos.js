//objetos-los objetos tienen atrivutos(claves y valores)

var rohny = {
  nombre: "Rohny",
  apellido: "Mantilla",
  edad: 28,
};

var Dario = {
  nombre: "Dario",
  apellido: "Paez",
  edad: 18,
};

// Alternativa 1 (mas entendible para mi)
// function imprimirNombreEnMayusculas(persona) {
//   var nombre = persona.nombre.toUpperCase();
//   console.log(nombre);
// }

//alternativa 2 (mas corta)
// function imprimirNombreEnMayusculas(persona) {
//   console.log(persona.nombre.toUpperCase());
// }

//alternativa 3 (mas moderna) pasas el valor del objeto como atrivuto
// function imprimirNombreEnMayusculas({ nombre }) {
//   console.log(nombre.toUpperCase());
// }

//desestructurar objetos
function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}
imprimirNombreEnMayusculas(rohny);

//Reto
function imprimirNombreYEdad(persona) {
  var { nombre } = persona;
  var { edad } = persona;
  console.log(`Hola, me llamo ${nombre} y tengo ${edad}`);
}

imprimirNombreYEdad(rohny);
imprimirNombreYEdad(Dario);

//los objetos si se modifican globalmente
// function cumpleanos(persona) {
//   persona.edad += 1;
// }

//en caso de que no queramos eso
function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  };
}
