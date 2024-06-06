// Función para codificar la contraseña (puedes usar una función más segura en producción)
function codificarTexto(texto) {
    return btoa(texto); // Base64 encoding
}

// Almacenar un usuario de prueba en el LocalStorage
function almacenarUsuarioDePrueba() {
    const usuarioDePrueba = {
        email: 'Laura@gmail.com',
        password: codificarTexto('Laura@gmail.com'),
    };
    localStorage.setItem('usuarioDePrueba', JSON.stringify(usuarioDePrueba));
}

// Función para validar el formulario de inicio de sesión
function validarFormulario() {
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('passwords').value;

    // Verificar campos vacíos
    if (!email || !password) {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    // Validar datos
    const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuarioDePrueba'));

    if (usuarioAlmacenado) {
        const emailCodificado = usuarioAlmacenado.email;
        const passwordCodificada = usuarioAlmacenado.password;

        if (email === emailCodificado && codificarTexto(password) === passwordCodificada) {
            return true; // true para redirigir a la página de perfil
        } else {
            alert('Nombre de usuario o contraseña inválidos.');
            return false;
        }
    } else {
        alert('No se encontró el usuario almacenado.');
        return false;
    }
}

// Función para manejar el acceso
function acceso(event) {
    event.preventDefault(); // Evitando que el enlace redirija inmediatamente

    if (validarFormulario()) {
        window.location.href = '../html/Mi-Perfil.html'; // Redirigiendo a la página de perfil si la validación es exitosa
    }
}

// Almacenar el usuario de prueba cuando se carga la página
window.onload = function() {
    almacenarUsuarioDePrueba();
};

// Agregar el evento de clic al botón
document.getElementById('boton').addEventListener('click', acceso);



