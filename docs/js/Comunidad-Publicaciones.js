// Función para mostrar/ocultar el input de imagen 
function toggleImageInput() {
  const imageInputContainer = document.getElementById('imageInputContainer');
  imageInputContainer.style.display = imageInputContainer.style.display === 'none' ? 'block' : 'none';
}

// Función para mostrar/ocultar el input de archivo
function toggleArchiveInput() {
  const archiveInputContainer = document.getElementById('archiveInputContainer');
  archiveInputContainer.style.display = archiveInputContainer.style.display === 'none' ? 'block' : 'none';
}

// Función para limpiar etiquetas y solo la primera letra es mayus
function tagsFiltered(ids) {
  return ids.map(id => {
      let tag = document.getElementById(id).value.trim();
      if (tag) {
          tag = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase(); 
      }
      return tag;
  }).filter(tag => tag);
}

document.addEventListener('DOMContentLoaded', () => {
    loadPostsFromLocalStorage();
  });
  
  function addPost() {
    const postContent = document.getElementById('postContent').value.trim();
    const postType = document.getElementById('postType').value;
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
  
    const country = document.getElementById('location-Country').value.trim();
    const city = document.getElementById('location-City').value.trim();
    const location = `${country}, ${city}`;
  
    if (!country || !city) {
      alert("Por favor, completa la ubicación.");
      return;
    }
  
    const tags = tagsFiltered(['tagsInput1', 'tagsInput2', 'tagsInput3']);
    const tripTypeText = tripType.value === "local" ? "Local" : "Extranjero";
  
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
  
    if (postImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
        newPost.image = e.target.result;
        savePostToLocalStorage(newPost);
        renderPost(newPost);
      };
      reader.readAsDataURL(postImage);
    } else {
      savePostToLocalStorage(newPost);
      renderPost(newPost);
    }
  
    if (postArchive) {
      const archiveReader = new FileReader();
      archiveReader.onload = function (e) {
        newPost.archive = e.target.result;
        savePostToLocalStorage(newPost);
        renderPost(newPost);
      };
      archiveReader.readAsDataURL(postArchive);
    }
  
    limpiarFormulario();
    filterPosts();
  }
  
  function limpiarFormulario() {
    document.getElementById('postContent').value = '';
    document.getElementById('includeImageSwitch').checked = false;
    document.getElementById('imageInputContainer').style.display = 'none';
    document.getElementById('postImage').value = '';
    document.getElementById('includeArchiveSwitch').checked = false;
    document.getElementById('archiveInputContainer').style.display = 'none';
    document.getElementById('postArchive').value = '';
    document.querySelectorAll('input[name="tripType"]').forEach(input => input.checked = false);
    document.getElementById('tagsInput1').value = '';
    document.getElementById('tagsInput2').value = '';
    document.getElementById('tagsInput3').value = '';
  }
  
  function loadPostsFromLocalStorage() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => renderPost(post));
  }
  
  function getTimeDifference(postDate) {
    const timeDiffMillis = Date.now() - postDate;
    const minutes = Math.floor(timeDiffMillis / (1000 * 60));
    return minutes;
  }
  
  function savePostToLocalStorage(post) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
  
  const postTypeTextMap = {
    '1': 'Reseña',
    '2': 'Recomendación',
    '3': 'Advertencia de seguridad'
  };
  
  const postTypeClassMap = {
    '1': 'badge-resena',
    '2': 'badge-recomendacion',
    '3': 'badge-advertencia'
  };
  
  function renderPost(post) {
    const feed = document.getElementById('feed');
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
  
    const postDate = post.timestamp;
    const minutesAgo = getTimeDifference(postDate);

    // Creamos un identificador único para cada publicación basado en el timestamp
      card.dataset.timestamp = post.timestamp;

    const tripTypeText = post.type === 'Local' ? 'Local' : 'Extranjero';
    const postTypeText = postTypeTextMap[post.selectedOption];
    const postTypeClass = postTypeClassMap[post.selectedOption];

    function deletePostFromLocalStorage(postToDelete) {
      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      
      posts = posts.filter(post => post.timestamp !== postToDelete.timestamp);
      
      localStorage.setItem('posts', JSON.stringify(posts));
    }
    
    document.addEventListener('DOMContentLoaded', () => {
      renderAllPosts();
    });
  
    card.innerHTML = `
    <img src="${post.image}" class="card-img-top" alt="Imagen adjunta" style="display: ${post.image ? 'block' : 'none'};">
    <div class="card-body">
        <div class="user-profile d-flex align-items-center mb-3">
            <img src="public/Ojos-Mujer.jpg" alt="Perfil" class="rounded-circle me-3" width="50">
            <div>
                <p class="mb-0">Laura Vargas</p>
                <p class="mb-0">@traveler11</p>
            </div>
        </div>
        <p class="card-text">${post.content}</p>
        <p class="card-text"><small class="text-muted">${minutesAgo < 60 ? `Hace ${minutesAgo} minutos` : `Hace aproximadamente ${Math.floor(minutesAgo / 60)} horas`}</small></p>
        <small class="card-text">${post.location}</small>
        <div class="viajePublicacion">
            <p class="card-text"><span class="badge bg-success">${tripTypeText}</span></p>
            <p class="card-text"><span class="badge ${postTypeClass}">${postTypeText}</span></p>
        </div>
        <div class="d-flex flex-wrap">
            ${post.tags.map(tag => `<span class="badge bg-Type me-1">${tag}</span>`).join('')}
        </div>
        <div class="finalCard">
            ${post.archive ? `<a href="${post.archive}" download class="btn btn-primary btn-sm" id="bn-Adjunto">Descargar archivo <i class="bi bi-download"></i></a>` : ''}
            <button class="btn btn-primary btn-sm bn-sl">Comentar <i class="bi bi-chat-square-text"></i></button>
            <button class="btn btn-primary btn-sm bn-mg">Me gusta <i class="bi bi-heart"></i></button>
            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-three-dots-vertical"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-dark" id="drop-Post">
                <li><a class="dropdown-item active" href="#"><i class="bi bi-bookmark-plus"></i> Guardar publicación</a></li>
                <li><a class="dropdown-item" id="btnDelete"><i class="bi bi-trash3"></i> Eliminar publicación</a></li>
                <li><a class="dropdown-item" href="#"><i class="bi bi-exclamation-circle"></i> Reportar publicación</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><i class="bi bi-share"></i> Compartir</a></li>
            </ul>
        </div>
    </div>
    `;
    const deleteButton = card.querySelector('#btnDelete');
    deleteButton.addEventListener('click', function() {
        card.remove();
        deletePostFromLocalStorage(post);
    });
  
    feed.insertBefore(card, feed.firstChild);
  }
  
  // Función para eliminar una publicación del Local Storage
  function deletePostFromLocalStorage(postToDelete) {
    const posts = loadPostsFromLocalStorage();
    const updatedPosts = posts.filter(post => post.postDate !== postToDelete.postDate);
    savePostsToLocalStorage(updatedPosts);
  }
  
  // Función para renderizar todas las publicaciones desde el Local Storage
  function renderAllPosts() {
    const posts = loadPostsFromLocalStorage();
    posts.forEach(renderPost);
  }