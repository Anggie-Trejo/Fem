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




// Function to validate form fields
/*function validateForm() {
    var userEmail = document.getElementById("userEmail").value;
    var password = document.getElementById("passwords").value;
  
    // Check if fields are empty
    if (userEmail.trim() === "" || password.trim() === "") {
      alert("Por favor llena todos los campos");
      return false;
    }
  
    // Password validation using regular expressions

    // For now, let's assume the username is "test" and password is "password"
    if (userEmail !== "test" || password !== "password") {
      alert("Usuario o contraseña inválidos");
      return false;
    }
  
    // Store user data in LocalStorage
    localStorage.setItem("userEmail", userEmail);
  
    return true;
  }

  // Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
      // If form is valid, redirect to another web page
      window.location.href = "../html/Home.html"; // Replace "dashboard.html" with the URL of your desired web page
    }
  }
  
  // Event listener for form submission
  document.getElementById("inicioses").addEventListener("submit", handleFormSubmission);


// El código se ejecuta hasta que todo el html esté cargado
document.addEventListener("DOMContentLoaded", ()=> {

    // Referencia al formulario de inicio de sesión
    const formLogin = document.getElementById("inicioses"); 

    // Campos del formulario: correo y contraseña
    const inputEmail = document.getElementById("userEmail");
    const inputPassword = document.getElementById("passwords");

    // Mensajes de error y éxito
    const alertaError = document.querySelector(".alert-danger");
    const alertaExito = document.querySelector(".alert-success");

    // Recuperar el correo electrónico del almacenamiento local si está disponible
    const storedEmail = localStorage.getItem('storedEmail');
    if (storedEmail) {
        inputEmail.value = storedEmail;
    }

    formLogin.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar el envío del formulario

        const email = inputEmail.value;
        const password = inputPassword.value;

        // Validar correo electrónico
        if (!validateEmail(email)) {
            mostrarAlerta("Correo electrónico inválido.");
            return;
        }

        // Validar contraseña (Con Database agregar validación de contraseña)
        if (!validatePassword(password)) {
            mostrarAlerta("Contraseña inválida.");
            return;
        }

        // Verificar si la contraseña está en la base de datos hipotética
        if (!passwordInDataBase(password)) {
            mostrarAlerta("La contraseña no es reconocida. Por favor, inténtalo de nuevo.");
            return;
        }

        // Si todo está bien, guardar el correo en Local Storage
        localStorage.setItem('storedEmail', email);

        // Si todo está bien, mostrar mensaje de éxito
        mostrarMensajeExito("¡Bienvenida!");
    });

    // Función para validar el correo electrónico
    function validateEmail(email) {
        // Con Database agregar validación de correo electrónico
        // Ejemplo: Comprobar si contiene un @
        return email.includes("@");
    }

    // Función para validar la contraseña
    function validatePassword(password) {
        // Con Database agregar validación de contraseña
        // Ejemplo: Comprobar si tiene al menos 8 caracteres
        return password.length >= 8;
    }

    // Función para verificar si la contraseña está en la base de datos hipotética
    function passwordInDataBase(password) {
        // Verificar contraseña en la base de datos
        // Ejemplo: devolver true si la contraseña es "password123"
        return password === "password123";
    }

    // Función para  alerta de error:
    function mostrarAlerta(mensaje) {
        alertaError.textContent = mensaje;
        alertaError.style.display = "block";
        setTimeout(() => {
            alertaError.style.display = "none";
        }, 3000);
    }

    // Función para  mensaje de éxito
    function mostrarMensajeExito(mensaje) {
        alertaExito.textContent = mensaje;
        alertaExito.style.display = "block";
        setTimeout(() => {
            alertaExito.style.display = "none";
        }, 3000);
    }
});





/*function acceso() {
    const email=document.getElementById("email").value;
    const password=document.getElementById("contraseña").value;
    
    if(email=="algo@otracosa.com" && password==="probandoando")
        {
            window.location="prueba.html"
        } else {
            alert("Datos incorrectos")
        }
    
    }
*/