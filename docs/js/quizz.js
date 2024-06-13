function guardaquizz()
{
  let viajes = 
  {
       //pais 
       viaje:document.getElementById('pais').value,
       //emociona 
       emocion:document.getElementById('emociona').value,
       //tipo de viajera
       tipoviajera:document.getElementById('viajera').value,
       //preferencia 
       preferencia:document.getElementById('prefiero').value, 
       //Disfruto
       disfruto:document.getElementById('disfrutar').value,
       //Epoca 
       epoca:document.getElementById('temporada').value
  }

     
   console.log(viajes);
}