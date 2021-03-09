var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
  contador++;
} while (!llueve());

if (contador === 1) {
  console.log(`Fui aver si llovia ${contador} vez`);
} else {
  console.log(`Fui aver si llovia ${contador} veces`);
}
