// Obtener los parámetros de la URL
var urlParams = new URLSearchParams(window.location.search);
var nombre = urlParams.get('nombre');
var apellido = urlParams.get('apellido');
var infoEvento = urlParams.get('infoEvento');

// Mostrar la información del evento
document.getElementById('nombre').innerHTML = "Nombre: " + nombre + " " + apellido;
document.getElementById('infoEvento').innerHTML = "Información del Evento: " + infoEvento;

// Generar el código QR
var qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://script.google.com/macros/s/AKfycbxsC4Enry4KCbav8CvNmjR7N4MzyEC3XuxKTPOwOgKi17T7nTFIV7DBgB6UE8qqMg510Q/exec?nombre=" + encodeURIComponent(nombre);
var qrCodeImage = document.getElementById('qrCodeImage');

// Añadir una animación al código QR al cargar la página
window.addEventListener('load', function() {
  qrCodeImage.src = qrCodeUrl;
  qrCodeImage.classList.add('fade-in');
});

// Función para mostrar el contenido basado en el botón de navegación
function showContent(contentId) {
  var qrSection = document.getElementById('qr-section');
  var scheduleSection = document.getElementById('schedule-section');
  var infoSection = document.getElementById('info-section');

  // Ocultar todas las secciones
  qrSection.style.display = 'none';
  scheduleSection.style.display = 'none';
  infoSection.style.display = 'none';

  // Mostrar solo la sección correspondiente al botón
  document.getElementById(contentId).style.display = 'block';
}

// Asignar eventos a los botones de navegación
document.getElementById('nav-qr').addEventListener('click', function() {
  showContent('qr-section');
});

document.getElementById('nav-schedule').addEventListener('click', function() {
  showContent('schedule-section');
});

document.getElementById('nav-info').addEventListener('click', function() {
  showContent('info-section');
});

// Inicialmente mostrar la sección del código QR
showContent('qr-section');
