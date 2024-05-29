//Evento para llamar al carrusel sólo hasta que cargue el DOM completo

//Inicializar el carrusel (Bootstrap)
document.addEventListener('DOMContentLoaded', function() {
  let carouselElement = document.getElementById('carouselHome');
  let carousel = new bootstrap.Carousel(carouselElement, {
    interval: 4000,
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
}); 


//Función para validar datos del modal de inicio de sesión
function acceso() {
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  
  if(email=="algo@otracosa.com" && password==="probandoando")
      {
          window.location="Comunidad.html"
      } else {
          alert("Datos incorrectos")
      }
  
  }