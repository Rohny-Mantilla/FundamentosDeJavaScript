var rohny = {
  nombre: "rohny",
  apellido: "mantilla",
  edad: 28,
  peso: 75,
};

console.log(`Al inicio del año ${rohny.nombre} pesa ${rohny.peso} kilogramos`);
//3 partes, parte inicial, parte de la condicion, y el incremento
//var i : es un contador

const INCREMENTO_PESO = 0.3;

const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
var dias = 0;

const META = rohny.peso - 3;

while (rohny.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(rohny);
  }
  if (realizaDeporte()) {
    adelgazar(rohny);
  }
  dias += 1;
}

console.log(`Pasaron ${dias} dias hasta que ${rohny.nombre} andelgazo 3 kilos`);
