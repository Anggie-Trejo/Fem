document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inicioses");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const emailInput = document.getElementById("userEmail").value;
        const passwordInput = document.getElementById("userPassword").value;
        const errorMessages = document.getElementById("warnings");
        
        // Expresiones regulares para validar el email y la contraseña
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passwordRegex = /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)[a-zA-Z\dñÑ!@#$%^&*(),.?":{}|<>]{8,}$/;
                              
        // Limpiar mensajes de error previos
        errorMessages.innerHTML = "";

        // Validar campos vacíos
        if (emailInput.trim() === "" || passwordInput.trim() === "") {
            errorMessages.innerHTML = "Por favor, completa todos los campos.";
            return;
        }

        // Validar formato de email
        if (!emailRegex.test(emailInput)) {
            errorMessages.innerHTML = "Por favor, introduce un correo electrónico válido.";
            return;
        }

        // Validar formato de contraseña
        if (!passwordRegex.test(passwordInput)) {
            errorMessages.innerHTML = "Revisa tu contraseña, quizá faltó algo o Bloq Mayus está activado.";
            return;
        }

        // Guardar correo electrónico en localStorage
        localStorage.setItem("email", emailInput);

        // Guardar contraseña en localStorage
        localStorage.setItem("password", passwordInput);

        // Redirigir al usuario a la página "Mi Perfil"
        window.location.href = "../html/Mi-Perfil.html";
    });
});


/*
// El código se ejecuta hasta que todo el html esté cargado
document.addEventListener("DOMContentLoaded", ()=> {
    
    const inputNickname = document.getElementById("userNickname");
    const inputEmail= document.getElementById("userEmail");
    const inputPassword = document.getElementById("passwords");
    
    const alertaError= document.querySelector(".alert-danger");
    const alertaCorreo = document.querySelector(".alert-warning");
    const alertaUser = document.querySelector(".alert-info");
    
    const botonRegistro = document.getElementById("botonRegistro");
    
    botonRegistro.addEventListener("click", () => {
        const formData = {
            email: inputEmail.value,
            nickname: inputNickname.value,
            password: inputPassword.value,
            passwordcopy: inputPasswordcopy.value
        };

        console.log(formData); // Imprimir los datos en la consola

        // Cargar los datos del almacenamiento local al cargar la página
        let storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

        // Verificar si storedFormData es un array
        if (!Array.isArray(storedFormData)) {
            console.error('Datos corruptos en localStorage.');
            storedFormData = [];
        }

        // Verificar si el correo del usuario ya está registrado
        const correoRegistrado = storedFormData.find(user => user.email === formData.email);
        // Verificar si el nombre de usuario ya está registrado
        const nicknameOcupado = storedFormData.find(user => user.nickname === formData.nickname);

        if (correoRegistrado == undefined && correoRegistrado == null && correoRegistrado == "") {
            mostrarAlerta(alertaCorreo, "Este correo no ha sido registrado.");
            limpiarAlerta(alertaUser);
            limpiarAlerta(alertaError);
            
        } else if (nicknameOcupado == undefined && nicknameOcupado == null && nicknameOcupado == "") {
            mostrarAlerta(alertaUser, "Por favor, verifica tu nombre de usuario.");
            limpiarAlerta(alertaCorreo);
            limpiarAlerta(alertaError);
            
        } else  {
            mostrarAlerta(alertaError, "Por favor, completa todos los campos correctamente.");
            if (validarFormulario(formData)) {
                window.location.href = '../html/Mi-Perfil.html';
            }
        } 

     }); 
    
    const nickRegex = /^@[A-Za-z0-9._/-]{5,}$/;
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)[a-zA-Z\dñÑ!@#$%^&*(),.?":{}|<>]{8,}$/;
    
    // Función para validar el formulario
    function validarFormulario(formData) {
        const validarCampo = (regex, valor) => regex.test(valor);
        const validarEmail = validarCampo(emailRegex, formData.email);
        const validarNickname = validarCampo(nickRegex, formData.nickname);
        const validarPassword = validarCampo(passwordRegex, formData.password);
        const validarPasswordCopy = formData.password === formData.passwordcopy;

        if (validarEmail && validarNickname && validarPassword && validarPasswordCopy) {
            return true;
        } else {
            return false;
        }
    }

    // Función para mostrar una alerta
    function mostrarAlerta(alerta, mensaje) {
        alerta.textContent = mensaje;
        alerta.style.display = "block";
    }

    // Función para limpiar una alerta
    function limpiarAlerta(alerta) {
        alerta.style.display = "none";
    }

    // Función para validar el envío del formulario
    function enviarFormulario(formData, storedFormData) {
        // Aquí puedes agregar la lógica para validar el formulario y enviar los datos si es válido
    }

});
*/

        


/*
// Función para codificar la contraseña (puedes usar una función más segura en producción)
function codificarTexto(texto) {
    return btoa(texto); // Base64 encoding
}

// Almacenar un usuario de prueba en el LocalStorage
function almacenarUsuario(email, password) {
    // Obtener usuarios almacenados
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Agregar el nuevo usuario
    usuarios.push({
        email: email,
        password: codificarTexto(password)
    });

    // Guardar en LocalStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}
// Función para validar el formulario de inicio de sesión
function validarFormulario() {
    const email = document.getElementById('userInput').value;
    const password = document.getElementById('passwords').value;

    // Verificar campos vacíos
    if (!userInput || !password) {
        window.alert('Por favor, complete todos los campos.');
        return false;
    }

    // Obtener usuarios almacenados
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Validar datos
    const usuarioEncontrado = usuarios.find(usuario => 
        (usuario.email === userInput || usuario.nombre === userInput)
    );

    if (usuarioEncontrado) {
        if (codificarTexto(password) === usuarioEncontrado.password) {
            return true; // true para redirigir a la página de perfil
        } else {
            window.alert('Nombre de usuario o contraseña inválidos.');
            return false;
        }
    } else {
        window.alert('No se encontró el usuario.');
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
    almacenarUsuario();
};

// Agregar el evento de clic al botón
document.getElementById('boton').addEventListener('click', acceso);

// Elemento de entrada de usuario
const userInput = document.getElementById('userInput');

// EventListener para validar el campo de entrada del usuario para nombre de usuario
userInput.addEventListener("input", () => {
    const userInputValue = userInput.value.trim();
    if (userInputValue.startsWith('@')) {
        alert('Recuerda que tu nombre de usuario comienza con @');
    }
});

// EventListener para validar el campo de entrada del usuario para correo electrónico
userInput.addEventListener("input", () => {
    const userInputValue = userInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(userInputValue)) {
        // Es un correo electrónico válido
    } else {
        window.alert('Dirección de correo electrónico no válido');
    }
});
*/
