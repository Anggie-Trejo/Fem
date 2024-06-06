document.addEventListener('DOMContentLoaded', loadBorradoresFromLocalStorage);

function loadBorradoresFromLocalStorage() {
    const borradores = JSON.parse(localStorage.getItem('borradores')) || [];
    borradores.forEach(borrador => renderBorrador(borrador));
}

function renderBorrador(borrador) {
    const feed = document.getElementById('borradoresFeed');

    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    const borradorDate = borrador.timestamp;
    const minutesAgo = getTimeDifference(borradorDate);
    const tripTypeText = borrador.type === 'Local' ? 'Local' : 'Extranjero';
    const postTypeText = postTypeTextMap[borrador.selectedOption];
    const postTypeClass = postTypeClassMap[borrador.selectedOption];

    card.innerHTML = `
        <img src="${borrador.image}" class="card-img-top" alt="Imagen adjunta" style="display: ${borrador.image ? 'block' : 'none'};">
        <div class="card-body">
            <div class="user-profile d-flex align-items-center mb-3">
                <img src="../public/Ojos-Mujer.jpg" alt="Perfil" class="rounded-circle me-3" width="50">
                <div>
                    <p class="mb-0">Laura Vargas</p>
                    <p class="mb-0">@traveler11</p>
                </div>
            </div>
            <p class="card-text">${borrador.content}</p>
            <p class="card-text"><small class="text-muted">${minutesAgo < 60 ? `Hace ${minutesAgo} minutos` : `Hace aproximadamente ${Math.floor(minutesAgo / 60)} horas`}</small></p>
            <small class="card-text">${borrador.location}</small>
            <div class="viajePublicacion">
                <p class="card-text"><span class="badge bg-success">${tripTypeText}</span></p>
                <p class="card-text"><span class="badge ${postTypeClass}">${postTypeText}</span></p>
            </div>
            <div class="d-flex flex-wrap">
                ${borrador.tags.map(tag => `<span class="badge bg-Type me-1">${tag}</span>`).join('')}
            </div>
            <div class="finalCard"">
            ${borrador.archive ? `<a href="${borrador.archive}" download class="btn btn-primary mt-3">Descargar archivo adjunto</a>` : ''}
                <button class="btn btn-primary btn-sm bn-sl"> Publicar <i class="bi bi-chat-square-text"></i>  </button>
                <button class="btn btn-primary btn-sm bn-mg"> Eliminar <i class="bi bi-trash3"></i> </button>
            </div>
        </div>
    `;

    feed.appendChild(card);
}

function getTimeDifference(postDate) {
    const timeDiffMillis = Date.now() - postDate;
    const minutes = Math.floor(timeDiffMillis / (1000 * 60));
    return minutes;
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