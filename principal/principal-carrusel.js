//Evento para llamar al carrusel sólo hasta que cargue el DOM completo
document.addEventListener('DOMContentLoaded', function () {
  let items= document.querySelectorAll ('carousel-item');
  let totalItems = items.length; //Para que lea cada imagen
  let index = 0; //Para llamar cada imagen por su indice en la sig función

//Botones Prev & Next:
const carouselIndicators = document.getElementById("carousel-indicators");
const slide = document.querySelector(".carousel-slide");
const prevButton = document.getElementById("carousel-control-prev");
const nextButton = document.getElementById("carousel-control-next");

prevButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slideContainer.scrollLeft -= slideWidth;
});

nextButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slideContainer.scrollLeft += slideWidth;
});

  //Función para remover la primer imagen del carrusel y así sucesivamente
  function nextItem() {
     items[index].classList.remove('active');
     index = (index + 1) % totalItems;
     items[index].classList.add('active');
   }

   //Para marcar el intervalo (10 seg) entre una imagen y otra
   setInterval(nextItem, 6000);

     // set up events
  buttonPrevious.addEventListener('click', handlePrevious);
  buttonNext.addEventListener('click', handleNext);

});
