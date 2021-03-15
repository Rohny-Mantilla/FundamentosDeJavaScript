const API_URL = "http://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const lukUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };

const onPeopleResponse = function (persona) {
  console.log(`Hola, yo soy ${persona.name}`);
};

function obtenerPersonaje(id) {
  const Url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(Url, opts, onPeopleResponse);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
