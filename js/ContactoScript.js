document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const nombre = document.getElementById("name");
    const email = document.getElementById("email");
    const msj = document.getElementById("textarea");
    const text = document.getElementById("warnings");

    // Cargar datos de localStorage si existen
    if (localStorage.getItem("nombre")) {
        nombre.value = localStorage.getItem("nombre");
        console.log("Nombre cargado de localStorage:", nombre.value);
    }
    if (localStorage.getItem("email")) {
        email.value = localStorage.getItem("email");
        console.log("Email cargado de localStorage:", email.value);
    }
    if (localStorage.getItem("mensaje")) {
        msj.value = localStorage.getItem("mensaje");
        console.log("Mensaje cargado de localStorage:", msj.value);
    }

    form.addEventListener("submit", function(e) {
        
        e.preventDefault();
        let warnings = "";
        let entrar = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

        if (nombre.value.trim().length < 3) { 
            warnings += `El nombre debe tener al menos 3 caracteres <br>`;
            entrar = true;
        }
        if (!regexEmail.test(email.value)) {
            warnings += `El email no es válido <br>`;
            entrar = true;
        }
        if (msj.value.trim() === "" && msj.value.trim().length<6){ 
            warnings+=`Debes colocar un mensaje en el cuadro de texto <br>`;
            entrar=true;
        } 
        if (entrar) {
            text.innerHTML = warnings;
        } else {
            text.innerHTML = "Enviado";
            // Guardar datos en localStorage
            localStorage.setItem("nombre", nombre.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("mensaje", msj.value);
            form.reset();

        }
    });
});
