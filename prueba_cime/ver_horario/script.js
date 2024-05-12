// script.js de ubicacion
function redireccionar() {
  var seleccion = document.getElementById("frutas").value;
  var resultado = document.getElementById("resultado");

  if (seleccion) {
    if (seleccion === "vcp") {
      window.location.href = "http://127.0.0.1:5501/index.html";
    } else {
      window.location.href = "prueba.html";
    }
  } else {
    resultado.textContent = "¡Ups! Parece que olvidaste seleccionar un cine.";
  }
}

// script.js de ubicacion
