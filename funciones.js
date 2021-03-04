var nombre = "Rohny",
  edad = 28;

function imprimirEdad(n, e) {
  console.log(`${n} tiene ${e} anos`);
}

imprimirEdad(nombre, edad);
imprimirEdad("viky", 23);
imprimirEdad("kike", 35);

//el alcance de las funciones
//var nombre fuera de la funcion es una variable global.
//Tener cuidado de cambiar la variable global con la funcion. (cuando no hay ningun parametro en la function)
//Se puede dar el mismo parametro para la funcion que en la variable.

function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase();
  console.log(nombre);
}

imprimirNombreEnMayusculas(nombre);
