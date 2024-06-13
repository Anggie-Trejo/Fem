// borrador.js
function addBorrador() {
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

    const newDraft = {
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
            newDraft.image = e.target.result;
            saveDraftToLocalStorage(newDraft);
            renderDraft(newDraft);
        };
        reader.readAsDataURL(postImage);
    } else {
        saveDraftToLocalStorage(newDraft);
        renderDraft(newDraft);
    }

    if (postArchive) {
        const archiveReader = new FileReader();
        archiveReader.onload = function (e) {
            newDraft.archive = e.target.result;
            saveDraftToLocalStorage(newDraft);
            renderDraft(newDraft);
        };
        archiveReader.readAsDataURL(postArchive);
    }

    limpiarFormulario();
}

function savePostToLocalStorage(post) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function renderDraft(post, minutesAgo, tripTypeText, postTypeText, postTypeClass) {
    const draftsContainer = document.getElementById('draftsContainer');
    const draftCard = document.createElement('div');
    draftCard.classList.add('draft-card', 'mb-3');

    draftCard.innerHTML = `
    <img src="${post.image}" class="card-img-top" alt="Imagen adjunta" style="display: ${post.image ? 'block' : 'none'};">
    <div class="card-body">
        <div class="user-profile d-flex align-items-center mb-3">
            <img src="../public/Ojos-Mujer.jpg" alt="Perfil" class="rounded-circle me-3" width="50">
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
                <li><a class="dropdown-item" href="#"><i class="bi bi-trash3"></i> Eliminar publicación</a></li>
                <li><a class="dropdown-item" href="#"><i class="bi bi-exclamation-circle"></i> Reportar publicación</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><i class="bi bi-share"></i> Compartir</a></li>
            </ul>
        </div>
    </div>
    `;
    draftsContainer.appendChild(draftCard);

    // Manejo del evento de clic para el botón de eliminación
    const deleteButton = draftCard.querySelector('.dropdown-item');
    deleteButton.addEventListener('click', function() {
        draftCard.remove();
        deletePostFromLocalStorage(post);
    });
}

renderDraft(newDraft, minutosAtras, textoTipoViaje, textoTipoPublicacion, claseTipoPublicacion);
