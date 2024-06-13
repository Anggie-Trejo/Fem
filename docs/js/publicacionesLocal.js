function almacenarPublicacionesDePrueba() {
    const publicacionesDePrueba = [
      {
        type: 'Extranjero',
        content: 'La Serena, ubicada en la costa pacífica de Chile, es un destino encantador que combina playas de arena blanca con una rica historia y una vibrante vida nocturna. Disfruta de relajantes días en las hermosas playas de La Serena, ideales para tomar el sol y practicar deportes acuáticos como el surf y el kayak. No te pierdas la oportunidad de visitar el Observatorio Mamalluca para observar las estrellas en uno de los cielos más claros del mundo. Además, explora el encantador centro histórico de la ciudad, donde encontrarás pintorescas calles empedradas, coloridas casas coloniales y una gran variedad de restaurantes y bares para disfrutar de la gastronomía local.',
        tags: ['ciudad', 'belleza', 'exploración'],
        image: 'https://i.pinimg.com/736x/16/6e/7d/166e7d2eb358a23eaa7b4da55655a633.jpg',
        archive: null,
        location: 'Chile, La Serena',
        selectedOption: '2',
        timestamp: Date.now() - (4 * 60 * 60 * 1000)
      },
      {
        type: 'Extranjero',
        content: 'Santiago, la capital de Chile, es una ciudad fascinante que combina modernidad con un rico patrimonio cultural. Explora el casco antiguo de la ciudad para descubrir importantes sitios históricos como la Plaza de Armas y el Palacio de La Moneda. También puedes visitar el Mercado Central para disfrutar de deliciosos mariscos frescos y explorar los museos y galerías de arte que albergan obras de artistas chilenos e internacionales. Además, no te pierdas la oportunidad de subir al Cerro San Cristóbal para disfrutar de impresionantes vistas panorámicas de la ciudad y los majestuosos Andes que la rodean.',
        tags: ['aventura', 'extranjero', 'viaje'],
        image: 'https://i.pinimg.com/564x/61/d3/4e/61d34e8a9fc7a7aee50669a032fc065f.jpg',
        archive: null,
        location: 'Chile, Santiago',
        selectedOption: '1',
        timestamp: Date.now() - (4 * 60 * 60 * 1000)
      },
      {
        type: 'Local',
        content: 'Encarnación, ubicada a orillas del río Paraná, es conocida por su animado carnaval y sus hermosas playas. Sin embargo, durante la temporada de lluvias, la ciudad puede experimentar inundaciones repentinas que afectan las áreas ribereñas. Por lo tanto, se recomienda a los viajeros que consulten el pronóstico del tiempo antes de visitar y estén preparados para posibles interrupciones en el transporte y las actividades al aire libre. Además, es importante tener en cuenta las medidas de seguridad y tomar precauciones adicionales, especialmente durante eventos multitudinarios como el carnaval.',
        tags: ['ciudad', 'belleza', 'exploración'],
        image: 'https://i.pinimg.com/564x/56/e5/b9/56e5b91a5b66b71832ac81986441a476.jpg',
        archive: null,
        location: 'Paraguay, Encarnación',
        selectedOption: '1',
        timestamp: Date.now() - (8 * 60 * 60 * 1000)
      },
      {
        type: 'Extranjero',
        content: 'Ciudad del Este, conocida como el paraíso de las compras en Paraguay, atrae a visitantes de todo el mundo con sus grandes centros comerciales y su amplia variedad de productos a precios competitivos. Desde electrónicos hasta artículos de cuero y joyería, encontrarás todo lo que buscas en los numerosos mercados y tiendas libres de impuestos de la ciudad. Sin embargo, es importante tener en cuenta la posibilidad de productos falsificados y tomar precauciones adicionales para proteger tus pertenencias mientras exploras la ciudad.',
        tags: ['aventura', 'extranjero', 'viaje'],
        image: 'https://i.pinimg.com/564x/b1/eb/f8/b1ebf8fd18041e84342770483a0f3c68.jpg',
        archive: null,
        location: 'Paraguay, Ciudad del Este',
        selectedOption: '1',
        timestamp: Date.now() - (8 * 60 * 60 * 1000)
      },
      {
        type: 'Local',
        content: 'Asunción, la capital de Paraguay, te sorprenderá con su encanto colonial y su rica historia. Explora el centro histórico para admirar la arquitectura colonial española y visita lugares emblemáticos como el Palacio de los López y la Catedral Metropolitana. No te pierdas el Mercado 4, donde podrás sumergirte en la cultura local y encontrar una gran variedad de productos artesanales y alimentos típicos. Además, disfruta de la hospitalidad paraguaya probando deliciosos platos tradicionales como la sopa paraguaya y el chipá.',
        tags: ['ciudad', 'belleza', 'exploración'],
        image: 'https://i.pinimg.com/564x/0b/ba/37/0bba371306300d422c384045c4f854a4.jpg',
        archive: null,
        location: 'Paraguay, Asunción',
        selectedOption: '2',
        timestamp: Date.now() - (8 * 60 * 60 * 1000)
      },
      {
        type: 'Extranjero',
        content: 'Mérida, ubicada en los Andes venezolanos, es famosa por su belleza natural y su ambiente universitario animado. Sin embargo, debido a la altitud y las condiciones climáticas variables, es importante estar preparado para cambios repentinos en el clima y tomar medidas para prevenir el mal de altura. Además, se recomienda a los viajeros informarse sobre la situación política y de seguridad en la región antes de viajar, ya que Mérida ha experimentado episodios de protestas y disturbios en el pasado.',
        tags: ['aventura', 'extranjero', 'viaje'],
        image: 'https://i.pinimg.com/736x/45/47/ad/4547ad428f955f7731171bfdf87312bb.jpg',
        archive: null,
        location: 'Venezuela, Mérida',
        selectedOption: '2',
        timestamp: Date.now() -  (10 * 60 * 60 * 1000)
      },
      {
        type: 'Extranjero',
        content: 'Caracas, la capital de Venezuela, es una ciudad vibrante y llena de contrastes. Desde sus imponentes rascacielos hasta sus encantadores barrios históricos, Caracas ofrece una mezcla única de modernidad y tradición. Descubre la rica cultura venezolana en el Museo de Bellas Artes y disfruta de las impresionantes vistas panorámicas desde el cerro El Ávila. Sin embargo, es importante tener en cuenta que la ciudad también enfrenta desafíos como la congestión del tráfico y la seguridad, por lo que se recomienda a los viajeros tomar precauciones adicionales.',
        tags: ['ciudad', 'belleza', 'exploración'],
        image: 'https://i.pinimg.com/564x/d2/73/c2/d273c2b159b61cb881e58fc8e81dcdac.jpg',
        archive: null,
        location: 'Venezuela, Caracas',
        selectedOption: '1',
        timestamp: Date.now() - (10 * 60 * 60 * 1000)
      },
      {
        type: 'Extranjero',
        content: 'Margarita, conocida como la "Perla del Caribe", te invita a explorar sus playas de arena blanca y aguas cristalinas. Sumérgete en la tranquilidad de Playa El Agua, donde podrás relajarte bajo el cálido sol y disfrutar de deportes acuáticos como el snorkel y el buceo. No te pierdas la oportunidad de explorar el encantador pueblo de La Asunción, con su arquitectura colonial y su historia fascinante. Además, prueba la deliciosa gastronomía local en los numerosos restaurantes y puestos de comida callejera que ofrecen mariscos frescos y platos tradicionales venezolanos.',
        tags: ['aventura', 'extranjero', 'viaje'],
        image: 'https://i.pinimg.com/564x/17/21/5a/17215a00790552548845d082476e6c58.jpg',
        archive: null,
        location: 'Venezuela, Margarita',
        selectedOption: '2',
        timestamp: Date.now() - (10 * 60 * 60 * 1000)
      },
      {
        type: 'Local',
        content: 'Para una experiencia gastronómica inigualable, no te pierdas la oportunidad de explorar el barrio de Coyoacán. Con sus pintorescas calles empedradas y plazas llenas de vida, este encantador barrio alberga una increíble variedad de restaurantes, cafés y puestos de comida callejera que ofrecen auténticos sabores mexicanos. Prueba los deliciosos tacos al pastor en el famoso mercado de Coyoacán, disfruta de una refrescante agua fresca de frutas tropicales y no te pierdas la oportunidad de probar el exquisito mole en alguno de los acogedores restaurantes del área. Además, no te olvides de visitar la Casa Azul, el antiguo hogar de Frida Kahlo, para sumergirte en la vida y obra de esta icónica artista mexicana.',
        tags: ['ciudad', 'belleza', 'exploración'],
        image: 'https://i.pinimg.com/564x/1f/a3/3e/1fa33e60eab245a986bd98fa0d996af0.jpg',
        archive: null,
        location: 'México, Ciudad de México',
        selectedOption: '2',
        timestamp: Date.now() - (12 * 60 * 60 * 1000)
      },
      {
        type: 'Local',
        content: 'La Ciudad de México, una metrópolis vibrante y llena de historia, cautiva a sus visitantes con una mezcla única de tradición y modernidad. Con su rica herencia cultural que abarca desde las antiguas civilizaciones mesoamericanas hasta la influencia colonial española, esta ciudad ofrece una experiencia incomparable para aquellos que buscan sumergirse en su fascinante pasado y vibrante presente. Desde la majestuosidad de sus antiguas pirámides en Teotihuacán hasta la energía de sus bulliciosos mercados y la sofisticación de su escena gastronómica de clase mundial, la Ciudad de México nunca deja de sorprender y deleitar a quienes la visitan.',
        tags: ['aventura', 'extranjero', 'viaje'],
        image: 'https://i.pinimg.com/564x/ac/32/1d/ac321d7ec2df539ff719f6f7f94ea0ec.jpg',
        archive: null,
        location: 'México, Ciudad de México',
        selectedOption: '1',
        timestamp: Date.now() - (12 * 60 * 60 * 1000)
      }
      

    ];
  
    localStorage.setItem('publicacionesDePrueba', JSON.stringify(publicacionesDePrueba));
  }
  
  // Llamar a la función para almacenar las publicaciones de prueba
  almacenarPublicacionesDePrueba();
  
function loadSamplePosts() {
    const samplePosts = JSON.parse(localStorage.getItem('publicacionesDePrueba')) || [];
    
    samplePosts.sort((a, b) => a.timestamp - b.timestamp);
    samplePosts.forEach(post => renderPost(post));
}

  // Llamar a la función para cargar y renderizar publicaciones de prueba al cargar la página
  document.addEventListener('DOMContentLoaded', loadSamplePosts);
  