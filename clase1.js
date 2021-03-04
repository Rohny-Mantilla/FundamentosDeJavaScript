var nombre = "Rohny";
var apellido = "Mantilla";
var edad = 28;

console.log(`hola ${nombre} ${apellido}`);
console.log(`Tengo ${edad} anos`);

//Se puede meter una funcion en una variable
var nombreEnMayusculas = nombre.toLocaleUpperCase();
var apellidoEnMinusculas = apellido.toLocaleLowerCase();

var primerLetraDelNombre = nombre.charAt(0);

var cantidadDeLetrasDelNombre = nombre.length;

//var nombreCompleto = nombre + " " + apellido;
//contrapolar
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

//ar str = nombre.charAt(1) + nombre.charAt(2);
//otra opcion a .charAt
var str = nombre.substr(1, 2);

//Reto
var laUltimaLetraDelNombre = nombre.charAt(4);
