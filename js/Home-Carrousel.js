//Evento para llamar al carrusel sólo hasta que cargue el DOM completo

//Inicializar el carrusel (Bootstrap)
document.addEventListener('DOMContentLoaded', function() {
  let carouselElement = document.getElementById('carouselHome');
  let carousel = new bootstrap.Carousel(carouselElement, {
    interval: 20000,
    ride: 'carousel'
  });

  //Botones (manipulación manual)
  let buttonPrevious = carouselElement.querySelector('.carousel-control-prev');
  let buttonNext = carouselElement.querySelector('.carousel-control-next');

  buttonPrevious.addEventListener('click', function() {
    carousel.prev();
  });

  buttonNext.addEventListener('click', function() {
    carousel.next();
  });

  // Reiniciar videos al cambiar de slide
  carouselElement.addEventListener('slid.bs.carousel', function(event) {
    let videos = carouselElement.querySelectorAll('video');
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });

    let activeVideo = event.relatedTarget.querySelector('video');
    if (activeVideo) {
      activeVideo.play();
    }
  });
});


//Función para validar datos del modal de inicio de sesión
function acceso() {
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  
  if(email=="algo@otracosa.com" && password==="probandoando") { 
    //Guardar el estado de inicio de sesión en localStorage
      localStorage.setItem('isLoggedIn', 'true');
          window.location.href="Comunidad.html";
      } else {
          alert("Datos incorrectos")
      }
  }

