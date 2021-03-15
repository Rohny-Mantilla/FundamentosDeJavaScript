//prototipo
function heredaDe(protoHijo, protoPadre) {
  var fn = function () {};
  fn.prototype = protoPadre.prototype;
  protoHijo.prototype = new fn();
  protoHijo.prototype.constructor = protoHijo;
}

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

function Desarollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarollador, persona);

Desarollador.prototype.saludar = function () {
  console.log(
    `Hola me llamo ${this.nombre} ${this.apellido} y soy desarollador`
  );
};

// var rohny = new persona("rohny", "mantilla", 1.84);
// var abigail = new persona("abigail", "rivera", 1.63);

// rohny.Altura();
// abigail.Altura();

//
