// Función para mostrar/ocultar el input-incluir imagen
function toggleImageInput() {
  const imageInputContainer = document.getElementById('imageInputContainer');
  imageInputContainer.style.display = imageInputContainer.style.display === 'none' ? 'block' : 'none';
}

// Función para mostrar/ocultar el input-adjuntar archivo
function toggleArchiveInput() {
  const archiveInputContainer = document.getElementById('archiveInputContainer');
  archiveInputContainer.style.display = archiveInputContainer.style.display === 'none' ? 'block' : 'none';
}


// DOM 
// Función para cargar las publicaciones desde localStorage y renderizarlas
document.addEventListener('DOMContentLoaded', loadPostsFromLocalStorage);

// Función para añadir una nueva publicación
function addPost() {
  // Obtener valores del formulario
  const postContent = document.getElementById('postContent').value.trim();
  const postType = document.getElementById('postType').value;
  const includeImageSwitch = document.getElementById('includeImageSwitch');
  const includeArchiveSwitch = document.getElementById('includeArchiveSwitch');
  const postImage = document.getElementById('postImage').files[0];
  const postArchive = document.getElementById('postArchive').files[0];
  const tripType = document.querySelector('input[name="tripType"]:checked');

if (!postContent) {
  alert('Por favor, escribe algo antes de publicar.');
  return;
}
if (!tripType) {
  alert("Por favor, selecciona un tipo de viaje.");
  return;
}

// Obtener valores de ubicación
const country = document.getElementById('location-Country').value.trim();
const city = document.getElementById('location-City').value.trim();
const location = `${country}, ${city}`;

// Elegir un tipo de viaje
const tripTypeText = tripType.value === "local" ? "Local" : "Extranjero";

const tags = [
    document.getElementById('tagsInput1').value.trim(),
    document.getElementById('tagsInput2').value.trim(),
    document.getElementById('tagsInput3').value.trim()
  ].filter(tag => tag);

  // Mostrar la alerta de publicación
  alert("Publicación añadida con tipo de viaje: " + tripTypeText);

  const newPost = {
      type: tripTypeText,
      content: postContent,
      tags: tags,
      image: null,
      archive: null,
      location: location,
      selectedOption: postType, 
      timestamp: Date.now()
  };

  // Leer una imagen si se seleccionó
  if (postImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
          newPost.image = e.target.result; // Asignar la imagen a la nueva publicación
          savePostToLocalStorage(newPost); // Guardar  en localStorage
          renderPost(newPost); // Renderizar 
      };
      reader.readAsDataURL(postImage); // Leer la imagen como un DataURL
  } else {
      savePostToLocalStorage(newPost); // Guardar la publicación en localStorage
      renderPost(newPost); // Renderizar 
  }

  // Leer un archivo si se seleccionó
  if (postArchive) {
      const archiveReader = new FileReader();
      archiveReader.onload = function (e) {
          newPost.archive = e.target.result; // Asignar el archivo a la nueva publicación
          savePostToLocalStorage(newPost); // Guardar la publicación en localStorage
          renderPost(newPost); // Renderizar la publicación en la interfaz
      };
      archiveReader.readAsDataURL(postArchive); // Leer el archivo como un DataURL
  }

  // Limpiar después de publicar
  document.getElementById('postContent').value = '';
  includeImageSwitch.checked = false;
  document.getElementById('imageInputContainer').style.display = 'none';
  document.getElementById('postImage').value = '';
  includeArchiveSwitch.checked = false;
  document.getElementById('archiveInputContainer').style.display = 'none';
  document.getElementById('postArchive').value = '';
  document.querySelectorAll('input[name="tripType"]').forEach(input => input.checked = false);
  document.getElementById('tagsInput1').value = '';
  document.getElementById('tagsInput2').value = '';
  document.getElementById('tagsInput3').value = '';
  
}

// JSON
// Función para cargar las publicaciones desde localStorage y renderizarlas
function loadPostsFromLocalStorage() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.forEach(post => renderPost(post));
}

// Función para calcular la diferencia de tiempo entre la publicación y el momento actual
function getTimeDifference(postDate) {
  const timeDiffMillis = Date.now() - postDate;
  const minutes = Math.floor(timeDiffMillis / (1000 * 60));
  return minutes;
}

// Función para guardar las publicaciones en localStorage
function savePostToLocalStorage(post) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Mapear el valor del select a su texto correspondiente
const postTypeTextMap = {
  '1': 'Reseña',
  '2': 'Recomendaciones',
  '3': 'Advertencia de seguridad'
};

// para usar los mismos valores del css
const postTypeClassMap = {
  '1': 'badge-resena',
  '2': 'badge-recomendacion',
  '3': 'badge-advertencia'
};

// Función para renderizar una publicación en el feed
function renderPost(post) {
  const feed = document.getElementById('feed'); 

  // Crear elemento de tarjeta Bootstrap
  const card = document.createElement('div');
  card.classList.add('card', 'mb-3');



  // Construir el HTML de la tarjeta
  const postDate = post.timestamp; // Utilizar la marca de tiempo de la publicación
  const minutesAgo = getTimeDifference(postDate); // Obtener la diferencia de tiempo en minutos
  const tripTypeText = post.type === 'Local' ? 'Local' : 'Extranjero'; // Asegurémonos de comparar con 'Local' en lugar de 'local'

  const postTypeText = postTypeTextMap[post.selectedOption];
  const postTypeClass = postTypeClassMap[post.selectedOption];


card.innerHTML = `
<img src="${post.image}" class="card-img-top" alt="Imagen adjunta" style="display: ${post.image ? 'block' : 'none'};">
<div class="card-body">
    <div class="user-profile d-flex align-items-center mb-3">
        <img src="../public/insumos/mujer2.jpg" alt="Perfil" class="rounded-circle me-3" width="50">
        <div>
            <p class="mb-0">Laura Vargas</p>
            <p class="mb-0">@traveler11</p>
        </div>
    </div>
    <p class="card-text">${post.content}</p>
    <p class="card-text"><small class="text-muted">${minutesAgo < 60 ? `Hace ${minutesAgo} minutos` : `Hace aproximadamente ${Math.floor(minutesAgo / 60)} horas`}</small></p>
    <small class="card-text">${post.location}</small>
    <div class = "viajePublicacion">
    <p class="card-text"><span class="badge bg-success">${tripTypeText}</span></p>
    <p class="card-text"><span class="badge  ${postTypeClass}">${postTypeText}</span></p>
    </div>
    <div class="d-flex flex-wrap">
        ${post.tags.map(tag => `<span class="badge bg-Type me-1">${tag}</span>`).join('')} 
    </div>
    ${post.archive ? `<a href="${post.archive}" download class="btn btn-primary mt-3">Descargar archivo adjunto</a>` : ''}
    <div class="mt-3">
        <button class="btn btn-primary btn-sm bn-sl">Comentar <i class="bi bi-chat-square-text"></i> </button>
        <button class="btn btn-primary btn-sm bn-mg">Me gusta <i class="bi bi-heart"></i> </button>
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
    </div>
</div>
`;

feed.appendChild(card);
}


// boton que limpia el formulario
function limpiarFormulario() {
  // Obtener referencias a los elementos del formulario
  const postContent = document.getElementById('postContent');
  const locationCountry = document.getElementById('location-Country');
  const locationCity = document.getElementById('location-City');
  const includeImageSwitch = document.getElementById('includeImageSwitch');
  const includeArchiveSwitch = document.getElementById('includeArchiveSwitch');
  const postImage = document.getElementById('postImage');
  const postArchive = document.getElementById('postArchive');
  const postType = document.getElementById('postType');
  const tripType1 = document.getElementById('inlineRadio1');
  const tripType2 = document.getElementById('inlineRadio2');
  const tagsInput1 = document.getElementById('tagsInput1');
  const tagsInput2 = document.getElementById('tagsInput2');
  const tagsInput3 = document.getElementById('tagsInput3');

  // Establecer los valores de los campos en su estado predeterminado
  postContent.value = '';
  locationCountry.value = '';
  locationCity.value = '';
  includeImageSwitch.checked = false;
  includeArchiveSwitch.checked = false;
  postImage.value = '';
  postArchive.value = '';
  postType.selectedIndex = 0; // Restablecer al primer elemento en el select
  tripType1.checked = false;
  tripType2.checked = false;
  tagsInput1.value = '';
  tagsInput2.value = '';
  tagsInput3.value = '';
}

