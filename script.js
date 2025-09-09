// Dropdown servicios
document.getElementById('services-btn').addEventListener('click', () => {
  document.getElementById('services-list').classList.toggle('show');
});

// Formulario
document.getElementById('budget-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('¡Tu solicitud fue enviada con éxito! (simulado)');
});
