const API_URL = "http://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const lukUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const Url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(Url, opts, function (persona) {
    console.log(`Hola, yo soy ${persona.name}`);

    if (callback) {
      callback();
    }
  });
}

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3);
  });
});
