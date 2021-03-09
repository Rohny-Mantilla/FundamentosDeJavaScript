var rohny = {
  nombre: "rohny",
  apellido: "mantilla",
  edad: 28,
  peso: 75,
};

console.log(`Al inicio del año ${rohny.nombre} pesa ${rohny.peso} kilogramos`);
//3 partes, parte inicial, parte de la condicion, y el incremento
//var i : es un contador

const INCREMENTO_PESO = 0.2;

const aumentarDePeso = (persona) => {
  persona.peso += INCREMENTO_PESO;
};
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);

for (var i = 1; i <= 365; i++) {
  var random = Math.random();
  if (random < 0.25) {
    aumentarDePeso(rohny);
  } else if (random < 0.5) {
    adelgazar(rohny);
  }
}

console.log(
  `Al final del del año ${rohny.nombre} pesa ${rohny.peso.toFixed(
    1
  )} kilogramos`
);
//final
