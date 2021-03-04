var edad = 27;
//incrementar
//edad = edad + 1;
edad += 1;

var peso = 75;

//peso = peso - 2;
peso -= 2;

var sandwish = 1;

peso += sandwish;

var jugarAlFutboll = 3;

peso -= jugarAlFutboll;

//decimales
var precioDeVino = 200.3;
//var total = precioDeVino * 3; //sale man
//posible solucion
var total = Math.round(precioDeVino * 10 * 3) / 10;
//para elegir decimales (pero en String)
var totalStr = total.toFixed(2);
//para pasarlo a numeros flotantes (decimales)
var total2 = parseFloat(totalStr);

//Division
var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersonas = pizza / personas;
