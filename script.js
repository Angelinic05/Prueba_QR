document.addEventListener('DOMContentLoaded', () => {
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
    document.getElementById('qrCodeImage').src = qrCodeUrl;
  
    // Funciones de navegación
    const sections = document.querySelectorAll('.section');
    const navButtons = document.querySelectorAll('.nav-button');
  
    // Mostrar la sección seleccionada
    function showSection(index) {
      sections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
      });
  
      navButtons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
      });
    }
  
    // Botones de navegación
    document.getElementById('qrButton').addEventListener('click', () => showSection(0));
    document.getElementById('scheduleButton').addEventListener('click', () => showSection(1));
    document.getElementById('infoButton').addEventListener('click', () => showSection(2));
  
    // Mostrar la primera sección (QR) al inicio
    showSection(0);
});
