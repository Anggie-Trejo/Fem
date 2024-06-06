// DOM 
  // Función para cargar las publicaciones desde localStorage y renderizarlas
  document.addEventListener('DOMContentLoaded', loadPostsFromLocalStorage);
  
  // Función para añadir una nueva publicación
  function addBorrador() {
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
  
  // Función para renderizar una publicación en el feed Draft
  function renderPost(post) {
    const feedDraft = document.getElementById('feedDraft'); 
  
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
      <div class="finalCard">
      <button class="btn btn-primary btn-sm bn-sl" id ="draftPub" >Publicar <i class="bi bi-card-text"></i></button>
        <button class="btn btn-primary btn-sm bn-mg" id = "draftDel" >Eliminar <i class="bi bi-journal-x"></i></button>
      </div>
     
  </div>
  `;
  
  feedDraft.appendChild(card);
  }