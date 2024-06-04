const MyPosts = [
  {
    id: "@traveler11",
    userName: "Laura",
    userLastName: "Vargas",
    profilePhoto: "./assets/bogota_transmilenio.jpg",
    travelAdvice: "La aplicación de tecnologías para mejorar la seguridad pública en Bogotá está en constante desarrollo. Existen aplicaciones móviles que te permiten reportar incidentes y recibir alertas de seguridad en tiempo real. Además, muchas zonas están vigiladas por cámaras de seguridad. Utiliza estos recursos para mantenerte informado y seguro.",
    travelPhotos:"./assets/transmilenio.jpeg",
    location: "Bogotá, Colombia",
    tags: ["Tecnología", "Seguridad Pública", "Apps"]
  },
  {
      id: "@traveler11",
      userName: "Laura",
      userLastName: "Vargas",
      travelAdvice: "El sistema de transporte público en Bogotá es amplio y eficiente si sabes cómo utilizarlo. El TransMilenio es la red de autobuses más grande de la ciudad y te permite moverte rápidamente por las principales avenidas. Funciona todos los días desde las 4:30 a.m. hasta las 11:00 p.m., lo que lo hace muy conveniente para los desplazamientos diarios. Actualmente, el sistema cuenta con 12 líneas troncales que cubren gran parte de la ciudad y 9 líneas alimentadoras que conectan los barrios más alejados con las estaciones principales. Te recomiendo evitar las horas pico, ya que puede ser bastante congestionado. Además, siempre mantén tus pertenencias cerca y en un lugar seguro para evitar robos. Puedes usar la aplicación móvil de TransMilenio para planificar tu ruta y conocer los tiempos de llegada en tiempo real.",
      travelPhotos:"",
      location: "Bogotá, Colombia",
      tags: ["Transporte Público", "TransMilenio", "Seguridad"]
    },
    {
      id: "@traveler11",
      userName: "Laura",
      userLastName: "Vargas",
      profilePhoto: "",
      travelAdvice: "Bogotá ofrece una gran cantidad de eventos locales durante todo el año. Desde festivales de música hasta ferias de libros y exposiciones de arte. El Festival Iberoamericano de Teatro es uno de los eventos más destacados y atrae a artistas de todo el mundo. No te pierdas la oportunidad de disfrutar de estas experiencias culturales.",
      travelPhotos:"",
      location: "Bogotá, Colombia",
      tags: ["Local", "Cultura", "Festival Iberoamericano de Teatro"]
    },{
      id: "@traveler11",
      userName: "Laura",
      userLastName: "Vargas",
      profilePhoto: "",
      travelAdvice: "Bogotá ofrece una gran cantidad de eventos locales durante todo el año. Desde festivales de música hasta ferias de libros y exposiciones de arte. El Festival Iberoamericano de Teatro es uno de los eventos más destacados y atrae a artistas de todo el mundo. No te pierdas la oportunidad de disfrutar de estas experiencias culturales.",
      travelPhotos:"",
      location: "Bogotá, Colombia",
      tags: ["Local", "Cultura", "Festival Iberoamericano de Teatro"]
    },
    {
      id: "@traveler11",
      userName: "Laura",
      userLastName: "Vargas",
      profilePhoto: "",
      travelAdvice: "La seguridad pública es una prioridad en Bogotá, pero es importante tomar precauciones personales. Evita caminar solo por áreas poco iluminadas o desconocidas durante la noche. Utiliza servicios de transporte confiables y siempre informa a alguien de confianza sobre tu paradero. La policía local y los guardias de seguridad en los lugares públicos están ahí para ayudarte si lo necesitas.",
      travelPhotos:"",
      location: "Bogotá, Colombia",
      tags: ["Seguridad Pública", "Precauciones"]
    },
    {
      id: "@traveler11",
      userName: "Laura",
      userLastName: "Vargas",
      profilePhoto: "",
      travelAdvice: "Moverse por Bogotá en bicicleta es una excelente opción, especialmente durante los domingos y festivos cuando la ciclovía está abierta. Más de 120 kilómetros de calles se cierran al tráfico vehicular para que los ciclistas, patinadores y peatones puedan disfrutar de la ciudad de manera segura. No olvides llevar casco y mantenerte en los carriles designados para bicicletas.",
      travelPhotos:"",
      location: "Bogotá, Colombia",
      tags: ["Ciclismo", "Ciclovía", "Transporte Alternativo"]
    }
  ];


  function toggleImageInput() {
    const imageInput = document.getElementById('postImage');
    const includeImageSwitch = document.getElementById('includeImageSwitch');
    if (includeImageSwitch.checked) {
        imageInput.style.display = 'block';
    } else {
        imageInput.style.display = 'none';
        imageInput.value = ''; // Limpiar el valor del input si se desactiva el switch
    }
}


//FUnción para añadir los posts
function addPost() {
    const postContent = document.getElementById('postContent').value;
    const postImageInput = document.getElementById('postImage');
    const postType = document.getElementById('postType').value;
    const includeImageSwitch = document.getElementById('includeImageSwitch').checked;
    let postImage = '';

    //Se realizar el if para el toggler de la iamgen
    if (includeImageSwitch && postImageInput.files && postImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            postImage = e.target.result;
            createPost(postContent, postImage, postType, true);
        };
        reader.readAsDataURL(postImageInput.files[0]);
    } else {
        createPost(postContent, postImage, postType, true);
    }
}

//Para crear el post que genera la usuaria
const blogContainer = document.getElementById('blog-container');

      MyPosts.forEach(post => {
          const card = document.createElement('div');
          card.classList.add('card');

          const title = document.createElement('h2');
          title.textContent = `${post.userName} ${post.userLastName}`;
          title.classList.add('userNAME');

          const advice = document.createElement('p');
          advice.textContent = post.travelAdvice;

          const location = document.createElement('p');
          location.textContent = `Ubicación: ${post.location}`;

          const tags = document.createElement('ul');
          tags.classList.add('tags');
          post.tags.forEach(tag => {
              const tagItem = document.createElement('li');
              tagItem.textContent = tag;
              tags.appendChild(tagItem);
          });

          card.appendChild(title);
          card.appendChild(advice);
          card.appendChild(location);

          // Aquí agregamos la lógica para la imagen
          if (post.travelPhotos) {
            const img = document.createElement('img');
            img.src = post.travelPhotos;
            img.alt = 'Travel Photo';
            card.appendChild(img);
        }
        card.appendChild(tags);
          blogContainer.appendChild(card);
        });




///se actualiza el contenido de configuración en mi perfil
        document.addEventListener('DOMContentLoaded', function() {
          const ubicacion = localStorage.getItem('ubicacion');
          const destino = localStorage.getItem('destino');
          const intereses = localStorage.getItem('intereses');
      
          if (ubicacion) {
              document.getElementById('ubicacion').textContent = ubicacion;
          }
          if (destino) {
              document.getElementById('destino').textContent = destino;
          }
          if (intereses) {
              document.getElementById('intereses').textContent = intereses;
          }
      });
      