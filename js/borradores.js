function addBorrador() {
    const postContent = document.getElementById('postContent').value.trim();
    const postType = document.getElementById('postType').value;
    const postImage = document.getElementById('postImage').files[0];
    const postArchive = document.getElementById('postArchive').files[0];
    const tripType = document.querySelector('input[name="tripType"]:checked');

    if (!postContent) {
        alert('Por favor, escribe algo antes de guardar como borrador.');
        return;
    }
    if (!tripType) {
        alert("Por favor, selecciona un tipo de viaje.");
        return;
    }
    if (!document.getElementById('tagsInput1').value.trim() &&
        !document.getElementById('tagsInput2').value.trim() &&
        !document.getElementById('tagsInput3').value.trim()) {
        alert("Por favor, completa al menos una etiqueta.");
        return;
    }

    const country = document.getElementById('location-Country').value.trim();
    const city = document.getElementById('location-City').value.trim();
    const location = `${country}, ${city}`;
    const tripTypeText = tripType.value === "local" ? "Local" : "Extranjero";

    const tags = [
        document.getElementById('tagsInput1').value.trim(),
        document.getElementById('tagsInput2').value.trim(),
        document.getElementById('tagsInput3').value.trim()
    ].filter(tag => tag);

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

}

function saveDraftToLocalStorage(draft) {
    const drafts = JSON.parse(localStorage.getItem('drafts')) || [];
    drafts.push(draft);
    localStorage.setItem('drafts', JSON.stringify(drafts));
}

function loadDraftsFromLocalStorage() {
    const drafts = JSON.parse(localStorage.getItem('drafts')) || [];
    drafts.forEach(draft => renderDraft(draft));
}

function renderDraft(draft) {
    const draftsContainer = document.getElementById('draftsContainer'); 
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    const postDate = draft.timestamp;
    const minutesAgo = getTimeDifference(postDate);
    const tripTypeText = draft.type === 'Local' ? 'Local' : 'Extranjero';
    const postTypeText = postTypeTextMap[draft.selectedOption];
    const postTypeClass = postTypeClassMap[draft.selectedOption];

    card.innerHTML = `
    <img src="${draft.image}" class="card-img-top" alt="Imagen adjunta" style="display: ${draft.image ? 'block' : 'none'};">
    <div class="card-body">
        <div class="user-profile d-flex align-items-center mb-3">
            <img src="../public/Ojos-Mujer.jpg" alt="Perfil" class="rounded-circle me-3" width="50">
            <div>
                <p class="mb-0">Laura Vargas</p>
                <p class="mb-0">@traveler11</p>
            </div>
        </div>
        <p class="card-text">${draft.content}</p>
        <p class="card-text"><small class="text-muted">${minutesAgo < 60 ? `Hace ${minutesAgo} minutos` : `Hace aproximadamente ${Math.floor(minutesAgo / 60)} horas`}</small></p>
        <small class="card-text">${draft.location}</small>
        <div class="viajePublicacion">
            <p class="card-text"><span class="badge bg-success">${tripTypeText}</span></p>
            <p class="card-text"><span class="badge ${postTypeClass}">${postTypeText}</span></p>
        </div>
        <div class="d-flex flex-wrap">
            ${draft.tags.map(tag => `<span class="badge bg-Type me-1">${tag}</span>`).join('')}
        </div>
        <div class="finalCard">
            ${draft.archive ? `<a href="${draft.archive}" download class="btn btn-primary btn-sm" id="bn-Adjunto">Descargar archivo <i class="bi bi-download"></i></a>` : ''}
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

    draftsContainer.insertBefore(card, draftsContainer.firstChild);
}

document.addEventListener('DOMContentLoaded', function() {
    loadDraftsFromLocalStorage(); 
});