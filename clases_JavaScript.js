//prototipo

function persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}
persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

persona.prototype.Altura = function () {
  if (this.altura > 1.8) {
    console.log(`${this.nombre} es alto`);
  } else {
    console.log(`${this.nombre} es bajo`);
  }
};

var rohny = new persona("rohny", "mantilla", 1.84);
var abigail = new persona("abigail", "rivera", 1.63);

rohny.Altura();
abigail.Altura();
