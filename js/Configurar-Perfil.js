// Función para configuración de perfil
// Subir y guardar las fotos en local Storage

//permite que el código JavaScript interactúe con los elementos del DOM.
// sin tener que esperar a que todos los recursos externos se hayan cargado.
document.addEventListener('DOMContentLoaded', function() {
    // Cargar imagenes guardadas al iniciar la página
    const savedProfileImage = localStorage.getItem('profileImage');  //variable en donde se guarda foto de perfil 
    const savedPortadaImage = localStorage.getItem('portadaImage');  //variable en donde se guarda foto de portada 
    if (savedProfileImage) { //si hay un valor aqui,se cambia la imagen mostrada en el elemento con id="img" 
        document.getElementById('img').src = savedProfileImage; // para que se muestre la nueva foto
    }
    if (savedPortadaImage) { 
       
        document.getElementById('portadaImg').src = savedPortadaImage;
    }

    // Guardar la imagen de perfil seleccionada y muestra vista previa
    document.getElementById('profilePic').addEventListener('change', function(event) {
        const [file] = event.target.files;
        if (file) {
            const reader = new FileReader(); //función para cambiar la imagen
            reader.onload = function(e) {
                const img = document.getElementById('img');
                img.src = e.target.result;
                localStorage.setItem('profileImage', e.target.result); // Guardar en LocalStorage
            };
            reader.readAsDataURL(file);
        }
    });

     // Guardar la imagen de portada seleccionada y mostrar vista previa
    document.getElementById('portadaPic').addEventListener('change', function(event) {
        const [file] = event.target.files;
        if (file) {
            const reader = new FileReader(); //función para cambiar la imagen
            reader.onload = function(e) {
                const portadaImg = document.getElementById('portadaImg');
                portadaImg.src = e.target.result;
                localStorage.setItem('portadaImage', e.target.result); // Guardar en LocalStorage
            };
            reader.readAsDataURL(file);
        }
    });
});







//fución para eliminar cuenta
 
/*

async function deleteAccount() {
    const confirmation = confirm('¿Estás seguro de que deseas borrar tu cuenta? Esta acción no se puede deshacer.');
    if (!confirmation) return;

    try {
        const response = await fetch('/api/deleteAccount', {
            method: 'DELETE',
        });

        if (response.ok) {
            alert('Cuenta borrada exitosamente.');
            window.location.href = '/login';
        } else {
            alert('Error al borrar la cuenta.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al conectar con el servidor.');
    }
}

function saveChanges() {
    alert('Cambios guardados exitosamente.');
    // Falta añadir la lógica para guardar cambios adicionales del perfil
}*/