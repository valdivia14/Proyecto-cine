document.getElementById('verHorarios').addEventListener('mouseenter', function() {
    // Mostrar los horarios al pasar el ratón sobre el botón
    document.getElementById('horarios').style.display = 'block';
});

document.getElementById('verHorarios').addEventListener('mouseleave', function() {
    // Ocultar los horarios al quitar el ratón del botón
    document.getElementById('horarios').style.display = 'none';
});

document.getElementById('comprarEntradas').addEventListener('click', function() {
    // Aquí puedes añadir la lógica para comprar las entradas
    console.log('Comprar entradas');
});
