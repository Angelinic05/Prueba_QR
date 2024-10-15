document.addEventListener('DOMContentLoaded', () => {
    // Obtener los parámetros de la URL
    var urlParams = new URLSearchParams(window.location.search);
    var nombre = urlParams.get('nombre');
    var apellido = urlParams.get('apellido');
    var infoEvento = urlParams.get('infoEvento');
    var tipoEntrada = urlParams.get('tipoEntrada'); // Agregar este parámetro
    var estiloEntrada = urlParams.get('estiloEntrada'); // Agregar este parámetro
  
    // Verificar si los parámetros son válidos
    if (!nombre || !apellido || !infoEvento) {
      console.error("Faltan parámetros en la URL");
      return;
    }
  
    // Mostrar la información del evento
    document.getElementById('nombre').innerHTML = nombre + " " + apellido;
    document.getElementById('infoEvento').innerHTML = infoEvento;
  
    // Generar el código QR
    var qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://script.google.com/a/macros/luqueacademy.com/s/AKfycbzT8q6T8B2SKVTlk8SROtbX5uZFrDXk0a1rEXJ1FFTSuszKgLy5MAzMBXFAPxI9gxcJSA/exec?nombre=" + encodeURIComponent(nombre);
    document.getElementById('qrCodeImage').src = qrCodeUrl;
  
    // Aplicar el estilo del tipo de entrada
    if (tipoEntrada) {
      var entryTypeDiv = document.getElementById('entryType');
      entryTypeDiv.style.backgroundColor = estiloEntrada;
      entryTypeDiv.innerHTML = tipoEntrada;
    }
  
    // Funciones de navegación
    const navButtons = document.querySelectorAll('.nav-button');
  
    // Mostrar la sección seleccionada
    function showSection(index) {
      const schedule = document.querySelector('.schedule');
      const qrCodeSection = document.querySelector('.qr-code');
      const titleImage = document.querySelector('.title img');
  
      // Muestra u oculta las secciones
      if (index === 0) {
        qrCodeSection.style.display = 'block';
        schedule.style.display = 'none';
        titleImage.style.display = 'block';  // Muestra la imagen en QR
      } else if (index === 1) {
        qrCodeSection.style.display = 'none';
        schedule.style.display = 'block';
        titleImage.style.display = 'none';  // Oculta la imagen en Cronograma
      } else {
        qrCodeSection.style.display = 'none';
        schedule.style.display = 'none';
        titleImage.style.display = 'none';  // Oculta la imagen en Información
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
  });