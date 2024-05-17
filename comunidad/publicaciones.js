function toggleImageInput(){
  const imageInput = document.getElementById('postImage');
      const includeImageSwitch = document.getElementById('includeImageSwitch');
      if (includeImageSwitch.checked) {
        imageInput.style.display = 'block';
      } else {
        imageInput.style.display = 'none';
        imageInput.value = ''; // Limpiar el valor del input si se desactiva el switch
      }
    }

function addPost() {
    // Obtener el contenido del textarea
    const postContent = document.getElementById('postContent').value;
    const postImage = document.getElementById('postImage').files[0];
    const postType = document.getElementById('postType').value;

    // Verificar si el contenido no está vacío
    if (postContent.trim() !== '') {
      // Crear un nuevo elemento de publicación
      const newPost = document.createElement('div');
      newPost.classList.add('mb-3');

      // Agregar el contenido de la publicación
      let postHTML = `
        <div class="user-profile d-flex align-items-center mb-3">
          <img src="mujer.png" alt="Sandra F." class="rounded-circle me-3" width="50">
          <div>
            <p class="mb-0">Sandra F.</p>
            <small>Público</small>
            <span class="text-muted d-block">Hace un momento</span>
          </div>
        </div>
        <h5>${postType}</h5>
        <p class="post-text">${postContent}</p>
        <hr>
      `;

      // Si hay una imagen y el switch está activado, agregarla a la publicación
      if (postImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
          postHTML += `<img src="${e.target.result}" alt="Imagen de la publicación" class="img-fluid rounded mb-3">`;
          newPost.innerHTML = postHTML + '<hr>';
          document.getElementById('feed').prepend(newPost);
        };
        reader.readAsDataURL(postImage);
      } else {
        newPost.innerHTML = postHTML + '<hr>';
        document.getElementById('feed').prepend(newPost);
      }
      

      // Limpiar el textarea
      document.getElementById('postContent').value = '';
      document.getElementById('postImage').value = '';
      document.getElementById('postImage').style.display = 'none';
      document.getElementById('includeImageSwitch').checked = false;
    } else {
      alert('Por favor, escribe algo antes de publicar.');
    }
  }

 