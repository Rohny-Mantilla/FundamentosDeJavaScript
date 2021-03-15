const API_URL = "http://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const lukUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const Url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(Url, opts, callback).fail(() => {
    console.log(`Sucedio un error. No se pudo obtener el personaje ${id} `);
  });
}

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`);

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`);
    });
  });
});
