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

var personas = [rohny, pamela, abigail];

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura} metros`);
}
