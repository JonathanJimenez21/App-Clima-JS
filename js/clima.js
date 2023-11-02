let api_key = "abcbc5d9de286f987e6ef12231c380de";
let difkelvin = 273.15;
const botonBusqueda = document.getElementById("btnbuscar");

botonBusqueda.addEventListener("click", function () {
  const textoCiudad = document.getElementById("txtciudad").value;
  if (textoCiudad) {
    obtenerClima(textoCiudad);
  }
});

function obtenerClima(ciudad) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}`
  )
    .then((response) => response.json())
    .then((response) => mostrarDatosClima(response));
}

function mostrarDatosClima(response) {
  console.log(response);

  divCiudad = document.getElementById("datosciudad");
  divCiudad.innerHTML = "";

  const ciudadNombre = response.name;
  const temperatura = response.main.temp;
  const minima = response.main.temp_min;
  const maxima = response.main.temp_max;
  const descripcion = response.weather[0].description;

  const ciudadtitulo = document.createElement("h2");
  ciudadtitulo.textContent = ciudadNombre;

  const temperaturatexto = document.createElement("p");
  temperaturatexto.textContent = `La temperatura es: ${Math.floor(
    temperatura - difkelvin
  )}C`;

  const minimatexto = document.createElement("p");
  minimatexto.textContent = `La temperatura Minima es: ${Math.floor(
    minima - difkelvin
  )}C`;

  const maximatexto = document.createElement("p");
  maximatexto.textContent = `La temperatura Maxima es: ${Math.floor(
    maxima - difkelvin
  )}C`;

  const descripciontexto = document.createElement("p");
  descripciontexto.textContent = `La descripcion Meteorológica es: ${descripcion}`;

  divCiudad.appendChild(ciudadtitulo);
  divCiudad.appendChild(temperaturatexto);
  divCiudad.appendChild(minimatexto);
  divCiudad.appendChild(maximatexto);
  divCiudad.appendChild(descripciontexto);
}
