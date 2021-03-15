//prototipo

class persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido, null);
    }
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}

//heredar
class Desarollador extends persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola me llamo ${nombre} ${apellido} y soy desarollador`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mira, no sabia que eras desarollador`);
  }
}

var rohny = new Desarollador("rohny", "mantilla", 1.84);
var abigail = new persona("abigail", "mantilla", 1.65);

rohny.saludar(responderSaludo);
abigail.saludar();
