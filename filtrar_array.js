var rohny = {
  nombre: "Rohny",
  apellido: "Mantilla",
  altura: 1.63,
};

var pamela = {
  nombre: "Pamela",
  apellido: "Rivera",
  altura: 1.83,
};

var abigail = {
  nombre: "Abigail",
  apellido: "Rivera",
  altura: 1.58,
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

console.log(personasCms);
