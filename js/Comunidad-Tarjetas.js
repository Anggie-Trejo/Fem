const tarjetas = [
  {
    id: "@traveler11",
    userName: "Laura",
    userLastName: "Vargas",
    profilePhoto: "../public/insumos/mujer2.jpg",
    travelAdvice: "Bogotá ofrece una gran cantidad de eventos locales durante todo el año. Desde festivales de música hasta ferias de libros y exposiciones de arte. El Festival Iberoamericano de Teatro es uno de los eventos más destacados y atrae a artistas de todo el mundo. No te pierdas la oportunidad de disfrutar de estas experiencias culturales.",
    travelPhotos: "../public/insumos/playa.jpg",
    location: "Bogotá, Colombia",
    reco: "Recomendación",
    tags: ["Local"],
    tags2: ["Cultura", "Festival Iberoamericano de Teatro"]
  },
  {
    id: "@Mari_Viaja",
    userName: "Maria",
    userLastName: "Garcia",
    profilePhoto: "../public/insumos/mujer.png",
    travelAdvice: "Si visitas Buenos Aires, Argentina, no te pierdas el vibrante barrio de La Boca. Conocido por sus casas coloridas y la famosa calle Caminito, es un gran lugar para experimentar la cultura local. También, visita el Cementerio de la Recoleta donde puedes encontrar la tumba de Eva Perón. Y, por supuesto, disfruta de un tradicional asado argentino en una de las muchas parrillas de la ciudad.",
    location: "Buenos Aires, Argentina",
    reco: "Advertencia",
    tags: ["Extranjero"],
    tags2: ["La Boca", "Cementerio de la Recoleta", "Asado Argentino"],
    travelPhotos: ["../public/insumos/TS.jpg"]
  },
  {
    id: "@AnneMtz",
    userName: "Ana",
    userLastName: "Martinez",
    profilePhoto: "../public/insumos/mujer3.jpg",
    travelAdvice: "En Perú, asegúrate de visitar la impresionante Machu Picchu. La antigua ciudad inca es uno de los monumentos más icónicos del mundo. Para una experiencia inolvidable, camina por el Camino Inca. También, explora la vibrante ciudad de Cusco, con su rica historia y hermosa arquitectura colonial.",
    travelPhotos: ["../public/insumos/avion.jpg"],
    location: "Machu Picchu, Perú",
    reco: "Advertencia",
    tags: ["Local"],
    tags2: ["Machu Picchu", "Camino Inca", "Cusco"]
  },
  {
    id: "@Sofi.Rojas23",
    userName: "Sofia",
    userLastName: "Rojas",
    profilePhoto: "../public/insumos/mujer4.jpg",
    travelAdvice: "Cuando estés en Colombia, no te pierdas la histórica ciudad de Cartagena. Su ciudad vieja, rodeada por murallas construidas en el siglo XVI, es un sitio del Patrimonio Mundial de la UNESCO. Las coloridas calles, hermosas plazas e iglesias históricas son un placer para explorar. Asegúrate de visitar el Castillo San Felipe de Barajas y tomar un tour en barco al atardecer.",
    travelPhotos: ["../public/insumos/castillo.jpg"],
    location: "Cartagena, Colombia",
    reco: "Advertencia",
    tags: ["Extranjero"],
    tags2: ["Cartagena", "Ciudad Vieja", "Castillo San Felipe"]
  },
  {
    id: "@travelerIsa",
    userName: "Isabella",
    userLastName: "Perez",
    profilePhoto: "../public/insumos/mujer.png",
    travelAdvice: "En Brasil, la ciudad de Río de Janeiro es una visita obligada. Conocida por su icónica estatua del Cristo Redentor y las impresionantes playas de Copacabana e Ipanema, Río ofrece una mezcla de belleza natural y cultura vibrante. No olvides tomar un teleférico hasta el Pan de Azúcar para disfrutar de vistas impresionantes de la ciudad.",
    travelPhotos: ["../public/insumos/avion.jpg"],
    location: "Río de Janeiro, Brasil",
    reco: "Reseña",
    tags: ["Extranjero"],
    tags2: ["Río de Janeiro", "Cristo Redentor", "Copacabana", "Pan de Azúcar"]
  },
  {
    id: "@ValGonz4554",
    userName: "Valentina",
    userLastName: "Gonzalez",
    profilePhoto: "../public/insumos/mujer2.jpg",
    travelAdvice: "En México, asegúrate de explorar la rica historia de la Ciudad de México. Visita el Zócalo, la plaza principal de la ciudad, donde puedes ver la Catedral Metropolitana y el Palacio Nacional. Las cercanas ruinas de Teotihuacán también son una visita obligada, con la impresionante Pirámide del Sol. No olvides explorar los vibrantes barrios de Coyoacán y Roma.",
    travelPhotos: ["../public/insumos/mar.jpg"],
    location: "CDMX, México",
    reco: "Reseña",
    tags:["Local"],
    tags2: ["Ciudad de México", "Zócalo", "Teotihuacán", "Coyoacán"]
  },
  {
    id: "@NomadCami5820",
    userName: "Camila",
    userLastName: "Lopez",
    profilePhoto: "../public/insumos/mujer.png",
    travelAdvice: "Visita el Desierto de Atacama en Chile para una experiencia realmente única. El Valle de la Luna es un paisaje impresionante que se asemeja a la superficie de la luna. También puedes visitar los géiseres de El Tatio, el tercer campo de géiseres más grande del mundo, y los impresionantes salares de Salar de Atacama.",
    travelPhotos: ["../public/insumos/mar.jpg"],
    location: "Desierto de Atacama, Chile",
    reco: "Reseña",
    tags: ["Extranjero"],
    tags2: ["Desierto de Atacama", "Valle de la Luna", "El Tatio", "Salar de Atacama"]
  },
  {
    id: "@Gabi_SoloTravs",
    userName: "Gabriela",
    userLastName: "Fernandez",
    profilePhoto: "../public/insumos/mujer4.jpg",
    travelAdvice: "Costa Rica es un paraíso para los amantes de la naturaleza. Visita el Parque Nacional Manuel Antonio por sus hermosas playas y abundante vida silvestre. El Volcán Arenal es otro lugar imprescindible, ofreciendo aguas termales y oportunidades para hacer senderismo. No te pierdas el Bosque Nuboso de Monteverde por su ecosistema único y emocionantes tours de canopy.",
    travelPhotos: ["../public/insumos/volcan.jpg"],
    location: "Costa Rica",
    reco: "Reseña",
    tags: ["Extranjero"],
    tags2: ["Manuel Antonio", "Volcán Arenal", "Monteverde"]
  },
  {
    id: "@Luci1711",
    userName: "Lucia",
    userLastName: "Silva",
    profilePhoto: "../public/insumos/mujer2.jpg",
    travelAdvice: "En Ecuador, un viaje a las Islas Galápagos es una experiencia única en la vida. La fauna única y los impresionantes paisajes no tienen comparación. Explora las islas en barco, haz snorkel con lobos marinos y visita la Estación de Investigación Charles Darwin. Las tierras altas de la Isla Santa Cruz ofrecen hermosas oportunidades para hacer senderismo.",
    travelPhotos: ["../public/insumos/avion.jpg"],
    location: "Islas Galápagos, Ecuador",
    reco: "Reseña",
    tags: ["Local"],
    tags2: ["Islas Galápagos", "Fauna", "Isla Santa Cruz"]
  },
  {
    id: "@Elena_Solitaria",
    userName: "Elena",
    userLastName: "Torres",
    profilePhoto: "../public/insumos/mujer.png",
    travelAdvice: "En Bolivia, el Salar de Uyuni es un destino imperdible. El salar más grande del mundo ofrece un paisaje surrealista, especialmente durante la temporada de lluvias cuando se convierte en un gigantesco espejo. También puedes visitar el cercano Parque Nacional Eduardo Avaroa para ver flamencos y otras especies en impresionantes entornos naturales.",
    travelPhotos: ["../public/insumos/mar.jpg"],
    location: "Salar de Uyuni, Bolivia",
    reco: "Reseña",
    tags: ["Extranjero"],
    tags2: ["Salar de Uyuni", "Parque Nacional Eduardo Avaroa", "Flamencos"]
  },
  {
    id: "@CaroTravels",
    userName: "Carolina",
    userLastName: "Morales",
    profilePhoto: "../public/insumos/mujer4.jpg",
    travelAdvice: "La Ciudad de Panamá es un destino vibrante y cosmopolita. El histórico distrito de Casco Viejo está lleno de hitos de la era colonial y cafés de moda. No te pierdas una visita al Canal de Panamá, una de las mayores hazañas de ingeniería del siglo XX. El cercano Parque Nacional Soberanía ofrece excelentes oportunidades para la observación de aves y el senderismo.",
    travelPhotos: ["../public/insumos/playa.jpg"],
    location: "Ciudad de Panamá, Panamá",
    reco: "Recomendación",
    tags: ["Local"],
    tags2: ["Casco Viejo", "Canal de Panamá", "Parque Nacional Soberanía"]
  }
];

function crearTarjeta(tarjeta) {
  const card = document.createElement('div');
  card.className = 'card mb-3';

  const travelPhoto = document.createElement('img');
  travelPhoto.className = 'card-img-top';
  travelPhoto.src = Array.isArray(tarjeta.travelPhotos) ? tarjeta.travelPhotos[0] : tarjeta.travelPhotos || 'default-travel.png';
  travelPhoto.alt = 'Foto de viaje';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = `${tarjeta.userName} ${tarjeta.userLastName}`;

  const cardUsername = document.createElement('h7');
  cardUsername.textContent = tarjeta.id;

  const profilePhoto = document.createElement('img');
  profilePhoto.className = 'card-profile-photo';
  profilePhoto.src = tarjeta.profilePhoto || 'default-profile.png';
  profilePhoto.alt = `${tarjeta.userName} ${tarjeta.userLastName}`;

  const cardAdvice = document.createElement('p');
  cardAdvice.className = 'card-text';
  cardAdvice.textContent = tarjeta.travelAdvice;

  const cardLocation = document.createElement('p');
  cardLocation.className = 'card-text';
  cardLocation.innerHTML = `<small class="text-muted">${tarjeta.location}</small>`;

  const cardReco = document.createElement('span');
  cardReco.textContent = tarjeta.reco;

  if (tarjeta.reco === 'Recomendación') {
    cardReco.classList.add('badge', 'badge-recomendacion');
  } else if (tarjeta.reco === 'Advertencia') {
    cardReco.classList.add('badge', 'badge-advertencia');
  } else if (tarjeta.reco === 'Reseña') {
    cardReco.classList.add('badge', 'badge-resena');
  }

  cardLocation.appendChild(document.createElement('br'));

    // Crear contenedor para cardReco y tags
const recoTagsContainer = document.createElement('div');
recoTagsContainer.className = 'reco-tags-container';
recoTagsContainer.appendChild(cardReco);


  const tags = document.createElement('div');
  tags.className = 'tags';
  tarjeta.tags.forEach(tag => {
    const tagItem = document.createElement('span');
    tagItem.className = 'span badge badge-secondary'; 
    tagItem.textContent = tag;
    tags.appendChild(tagItem);
    });

recoTagsContainer.appendChild(tags);

  const tags2 = document.createElement('div');
  tags2.className = 'tags2';
  tarjeta.tags2.forEach(tag => {
    const tagItem = document.createElement('span');
    tagItem.className = 'span badge badge-secondary'; 
    tagItem.textContent = tag;
    tags2.appendChild(tagItem);
  });

  const additionalButtons1 = document.createElement("button");
  additionalButtons1.type = "button";
  additionalButtons1.className = "btn btn-primary btn-sm bn-sl";
  additionalButtons1.innerHTML = 'Comentar <i class="bi bi-chat-square-text""></i>';

  const additionalButtons2 = document.createElement("button");
  additionalButtons2.type = "button";
  additionalButtons2.className = "btn btn-primary btn-sm bn-mg";
  additionalButtons2.innerHTML = 'Me gusta <i class="bi bi-heart"></i> ';

  const dropdown = document.createElement("dropdown");
  dropdown.className = "dropdown";
  dropdown.innerHTML = `
    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="bi bi-three-dots-vertical"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-dark">
      <li><a class="dropdown-item active" href="#"><i class="bi bi-bookmark-plus"></i> Guardar publicación</a></li>
      <li><a class="dropdown-item" href="#"><i class="bi bi-trash3"></i> Eliminar publicación</a></li>
      <li><a class="dropdown-item" href="#"><i class="bi bi-exclamation-circle"></i> Reportar publicación</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#"><i class="bi bi-share"></i> Compartir</a></li>
    </ul>
  `;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "finalCard";
  buttonsContainer.appendChild(additionalButtons1);
  buttonsContainer.appendChild(additionalButtons2);
  buttonsContainer.appendChild(dropdown);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(profilePhoto);
  cardBody.appendChild(cardUsername);
  cardBody.appendChild(cardAdvice);
  cardBody.appendChild(cardLocation);
  cardBody.appendChild(recoTagsContainer);
  cardBody.appendChild(tags2);
  cardBody.appendChild(buttonsContainer);
  card.appendChild(travelPhoto);
  card.appendChild(cardBody);

  return card;
}

function mostrarTarjetas(tarjetas) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  tarjetas.forEach(tarjeta => {
    const card = crearTarjeta(tarjeta);
    cardContainer.appendChild(card);
  });
}

function filtrarTarjetas(event) {
  const filtro = event.target.value;
  let tarjetasFiltradas;

  if (filtro === 'all') {
    tarjetasFiltradas = tarjetas;
  } else {
    tarjetasFiltradas = tarjetas.filter(tarjeta => tarjeta.tags.includes(filtro));
  }

  mostrarTarjetas(tarjetasFiltradas);
}

document.getElementById('typePostSelect').addEventListener('change', filtrarTarjetas);

mostrarTarjetas(tarjetas);