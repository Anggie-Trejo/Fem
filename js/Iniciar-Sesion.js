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