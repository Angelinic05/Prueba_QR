document.addEventListener('DOMContentLoaded', () => {
  // Obtener los parámetros de la URL
  var urlParams = new URLSearchParams(window.location.search);
  var nombre = urlParams.get('nombre');
  var apellido = urlParams.get('apellido');
  var tipoEntrada = urlParams.get('tipoEntrada');
  var scanned = urlParams.get('scanned');

  // Verificar si los parámetros son válidos
  if (!nombre || !apellido) {
    console.error("Faltan parámetros en la URL");
    return;
  }

  // Mostrar la información del evento
  document.getElementById('nombre').innerHTML = nombre + " " + apellido;

  // Generar el código QR
  var qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://script.google.com/a/macros/luqueacademy.com/s/AKfycbzT8q6T8B2SKVTlk8SROtbX5uZFrDXk0a1rEXJ1FFTSuszKgLy5MAzMBXFAPxI9gxcJSA/exec?nombre=" + encodeURIComponent(nombre);
  document.getElementById('qrCodeImage').src = qrCodeUrl;

  // Aplicar el estilo del tipo de entrada
  var entryTypeDiv = document.getElementById('entryType');
  var estiloEntrada = getEntryStyle(tipoEntrada);
  entryTypeDiv.style.backgroundColor = estiloEntrada.color;
  // entryTypeDiv.style.padding = '10px';
  entryTypeDiv.style.borderRadius = '5px';
  // entryTypeDiv.style.color = 'white';
  entryTypeDiv.style.textAlign = 'center';
  entryTypeDiv.innerHTML = tipoEntrada;

  // Funciones de navegación
  const navButtons = document.querySelectorAll('.nav-button');

  // Mostrar la sección seleccionada
  function showSection(index) {
    const schedule = document.querySelector('.schedule');
    const qrCodeSection = document.querySelector('.qr-code');
    const title = document.querySelector('.title');
    const infoSection = document.querySelector('.info');
    const locationContainer = document.querySelector('.location-container'); // Agregar esta línea

    // Muestra u oculta las secciones
    if (index === 0) {
      qrCodeSection.style.display = 'block';
      schedule.style.display = 'none';
      infoSection.style.display = 'none';
      title.style.display = 'block';  // Muestra la imagen en QR
      locationContainer.style.display = 'block';
    } else if (index === 1) {
      qrCodeSection.style.display = 'none';
      schedule.style.display = 'block';
      infoSection.style.display = 'none';
      title.style.display = 'none';  // Oculta la imagen en Cronograma
      locationContainer.style.display = 'none';  
    } else {
      qrCodeSection.style.display = 'none';
      schedule.style.display = 'none';
      infoSection.style.display = 'block';  
      title.style.display = 'none';  // Oculta la imagen en Información
      locationContainer.style.display = 'none';
    }

    // Resaltar el botón activo
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

  // Llamar a la función de escaneo
  google.script.run.manejarEscaneo(nombre);
});

// Función para obtener el estilo del tipo de entrada
function getEntryStyle(tipoEntrada) {
  switch (tipoEntrada.toLowerCase()) {
    case 'preferencial':
      return { color: '#2EBBFF', textColor: '#FFFFFF', texto: 'Preferencial' }; // Color dorado con letra blanca
    case 'general':
      return { color: '#02E86F', textColor: '#000000', texto: 'General' }; // Color negro con letra negra
    case 'diamond':
      return { color: '#4CFF55', textColor: '#FF0000', texto: 'Diamond' }; // Color rojo con letra roja
    default:
      return null;
  }
}


  