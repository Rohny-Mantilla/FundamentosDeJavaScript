var rohny = {
  nombre: "Rohny",
  apellido: "Mantilla",
  edad: 8,
  ingeniero: true,
  cocinero: false,
  dj: false,
  guitarrista: true,
};

function imprimirProfesiones(persona) {
  //tamplate stream
  console.log(`${persona.nombre} es:`);

  //si es true no hace falta === true
  if (persona.ingeniero) {
    console.log(`ingeniero`);
  }

  if (persona.cocinero) {
    console.log(`cocinero`);
  } else {
    console.log("no es cocinero");
  }
}

imprimirProfesiones(rohny);

//Funciones que retornan valores
//const = una variavle que con cambia, sino que es contaste
const MAYORIA_DE_EDAD = 18;

// function esMayorDeEdad(persona) {
//   return persona.edad >= MAYORIA_DE_EDAD;
// }

//Arrow function
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayor(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad.`);
  } else {
    console.log(`${persona.nombre} es menor de edad.`);
  }
}

imprimirSiEsMayor(rohny);
