const API_URL = "http://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const lukUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const Url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(Url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Susedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
  .then((personaje) => {
    console.log(`El personaje 1 es ${personaje.name}`);
    return obtenerPersonaje(2);
  })
  .then((personaje) => {
    console.log(`El personaje 2 es ${personaje.name}`);
    return obtenerPersonaje(3);
  })
  .then((personaje) => {
    console.log(`El personaje 3 es ${personaje.name}`);
    return obtenerPersonaje(4);
  })
  .then((personaje) => {
    console.log(`El personaje 4 es ${personaje.name}`);
    return obtenerPersonaje(5);
  })
  .catch(onError);
