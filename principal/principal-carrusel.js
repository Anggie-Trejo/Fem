//Evento para llamar al carrusel sólo hasta que cargue el DOM completo
/*
document.addEventListener('DOMContentLoaded', function () {
  let items= document.querySelectorAll ('carousel-item');
  let totalItems = items.length; //Para que lea cada imagen
  let index = 0; //Para llamar cada imagen por su indice en la sig función

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
*/


window.onload = function () { 
  let slides =  
      document.getElementsByClassName('carousel-item'); 

  function addActive(slide) { 
      slide.classList.add('active'); 
  } 

  function removeActive(slide) { 
      slide.classList.remove('active'); 
  } 

  addActive(slides[0]); 
  setInterval(function () { 
      for (let i = 0; i < slides.length; i++) { 
          if (i + 1 == slides.length) { 
              addActive(slides[0]); 
              setTimeout(removeActive, 350, slides[i]); 
              break; 
          } 
          if (slides[i].classList.contains('active')) { 
              setTimeout(removeActive, 350, slides[i]); 
              addActive(slides[i + 1]); 
              break; 
          } 
      } 
   //Para marcar el intervalo (4 seg)
  }, 4000); 
};