//Evento para llamar al carrusel sólo hasta que cargue el DOM completo
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
    setInterval(nextItem, 10000);

});


