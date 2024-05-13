//Evento para llamar al carrusel
document.addEventListener('DOMContentLoaded', function () {
    let carouselElement = document.getElementById ('carouselHome');
    let carousel = new bootstrap.Carousel (carouselElement);
 
    //Función para cambiar la  imagen cada 6 segundos
    function autoMov() {
       carousel.next();
       setTimeout(autoMov, 6000);
     }
     autoMov();
 
     //Evento para corregir temporizador al hacer click
 
     //Anterior
     let prevButton = carouselElement.querySelector('.carousel-control-prev');
     prevButton.addEventListener('click', function() {
       carousel.prev();
 
       clearTimeout(autoMov, 6000);
       autoMov();
     });
 
     //Siguiente
     var nextButton = carouselElement.querySelector('.carousel-control-next');
   nextButton.addEventListener('click', function() {
     carousel.next();
 
     clearTimeout(autoMov, 6000);
     autoMov();
     });
 
 });