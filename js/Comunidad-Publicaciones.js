// Función para mostrar/ocultar el textarea -ubicacion-
/* function showTextarea() {
  const textarea = document.getElementById('rute-add');
  textarea.style.display = textarea.style.display === 'none' ? 'block' : 'none';
} 
*/

// Función para validar la entrada en el textarea -ubicacion-
function validateLocation() {
  // const textarea = document.getElementById('rute-add');
  const location = textarea.value.trim();
  const locationPattern = /^[a-zA-Z\s]+,\s*[a-zA-Z\s]+$/; // Expresión regular para validar Ciudad, País
  
  if (!locationPattern.test(location)) {
      // Entrada no valida borde rojo 
      textarea.classList.add('is-invalid');
  } else {
      // Entrada valida, restablecer el color 
      textarea.classList.remove('is-invalid');
  }
}
// valida en tiempo real mientras el usuario escribe
// document.getElementById('rute-add').addEventListener('input', validateLocation);

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
 // const location = document.getElementById('rute-add').value.trim(); // nuevo

  if (!tripType) {
      alert("Por favor, selecciona un tipo de viaje.");
      return;
  }

  if (!postContent) {
      alert('Por favor, escribe algo antes de publicar.');
      return;
  }

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
      timestamp: Date.now()
  };

  // Leer una imagen si se seleccionó
  if (postImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
          newPost.image = e.target.result; // Asignar la imagen a la nueva publicación
          savePostToLocalStorage(newPost); // Guardar la publicación en localStorage
          renderPost(newPost); // Renderizar la publicación en la interfaz
      };
      reader.readAsDataURL(postImage); // Leer la imagen como un DataURL
  } else {
      savePostToLocalStorage(newPost); // Guardar la publicación en localStorage
      renderPost(newPost); // Renderizar la publicación en la interfaz
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

  // Limpiar el textarea y restablecer el estado del input de imagen
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

  card.innerHTML = `
      <img src="${post.image}" class="card-img-top" alt="Imagen adjunta" style="display: ${post.image ? 'block' : 'none'};">
      <div class="card-body">
          <div class="user-profile d-flex align-items-center mb-3">
              <img src="../public/insumos/mujer.jpg" alt="Perfil" class="rounded-circle me-3" width="50">
              <div>
                  <p class="mb-0">Laura Vargas</p>
                  <p class="mb-0">@traveler11</p>
              </div>
          </div>
          <p class="card-text">${post.content}</p>
          <p class="card-text"><small class="text-muted">${minutesAgo < 60 ? `Hace ${minutesAgo} minutos` : `Hace aproximadamente ${Math.floor(minutesAgo / 60)} horas`}</small></p>
          <p class="card-text"><strong>${post.location}</strong></p>
          <p class="card-text"><span class="badge bg-success">${tripTypeText}</span></p>
          <div class="d-flex flex-wrap">
              ${post.tags.map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`).join('')}
          </div>
          ${post.archive ? `<a href="${post.archive}" download class="btn btn-primary mt-3">Descargar archivo adjunto</a>` : ''}
          <div class="mt-3">
              <button class="btn btn-primary me-2">Seguir leyendo</button>
              <button class="btn btn-outline-primary">Me gusta</button>
          </div>
      </div>
  `;
  
  feed.appendChild(card);
}
