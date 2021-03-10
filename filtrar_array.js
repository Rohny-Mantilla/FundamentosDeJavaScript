var rohny = {
  nombre: "Rohny",
  apellido: "Mantilla",
  altura: 1.63,
  libros: 243,
};

var pamela = {
  nombre: "Pamela",
  apellido: "Rivera",
  altura: 1.83,
  libros: 143,
};

var abigail = {
  nombre: "Abigail",
  apellido: "Rivera",
  altura: 1.58,
  libros: 43,
};

const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => altura < 1.8;

var personas = [rohny, pamela, abigail];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

const pasarAlturaACms = (persona) => {
  //para no midificar el array original(se crea objetos totalmente distintos)
  return {
    ...persona,
    altura: persona.altura * 100,
  };
};

var personasCms = personas.map(pasarAlturaACms);

// var acum = 0;

// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].libros;
// }

//reduce reduce el valor de un array a un solo numero
const reducer = (acum, { libros }) => acum + libros;

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros`);
