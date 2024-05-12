// Obtener el modal
var modal = document.getElementById('modalHorarios');

// Obtener el botón que abre el modal
var btn = document.getElementById("verHorarios");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el botón, abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando se hace clic en <span> (x), cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, cerrarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.getElementById('comprarBoletos').addEventListener('click', function() {
  window.location.href = 'http://127.0.0.1:5500/probando_el_boton/prubando_el_boton_2/index.html';
});

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
