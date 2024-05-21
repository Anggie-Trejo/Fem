const formRegister = document.querySelector(".form-register");
const inputUser = document.getElementById("userNames");
const inputLastNames = document.getElementById("userLastNames");
const inputEmail= document.getElementById("userEmail");
const inputPassword = document.getElementById("passwords");
const inputPasswordcopy = document.getElementById("passwordClone");
const alertaError= document.querySelector(".alerta-error");
const alertaExito = document.querySelector(".alerta-exito");

formRegister.addEventListener("submit", e =>{
    e.preventDefault();
    enviarFormulario();

} );

/*Expresiones regulares. La primera permite uno o dos nombres, de 2 a 12 caracteres cada uno, cualquier letra en minúscula o mayúscula*/
const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ]{3,10}(?:\s[a-zA-ZáéíóúÁÉÍÓÚüÜ]{0,10})?$/;
const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

//Para ocupar en función validarCampo
const estadoValidacion = {
    userNames: false,
    userLastNames: false,
    userEmail: false,
    userPassword: false,


};

document.addEventListener("DOMContentLoaded", () => {
    formRegister.addEventListener("submit", e => {
        e.preventDefault();
        enviarFormulario();
    });

    inputUser.addEventListener("input", () =>{
        validarCampo(nameRegex, inputUser, "El nombre debe tener mínimo 3 caracteres, sin caracteres especiales.");
    })

    inputLastNames.addEventListener ("input", () =>{
        validarCampo(nameRegex, inputLastNames, "El apellido debe tener mínimo 3 caracteres, sin caracteres especiales");
    })

    inputEmail.addEventListener("input", () => {
        validarCampo(emailRegex, inputEmail, "Dirección de correo electrónico no válido.");
    })

    inputPassword.addEventListener("input", () =>{
        validarCampo(passwordRegex, inputPassword, "La contraseña debe tener mínimo una letra mayúscula, minúscula y algún digito numérico.")
    })

    });


function validarCampo(regularExpresion, campo, mensaje) {
    const validarCampo = regularExpresion.test(campo.value);
    if (validarCampo) {
        //console.log("Campo correcto");
        eliminarAlerta(campo.parentElement);
        estadoValidacion[campo.id] = true;
       // console.log(estadoValidacion);
        campo.classList.remove("error");
    } else {
        estadoValidacion[campo.id] = false;
        mostrarAlerta(campo.parentElement,mensaje);
        campo.classList.add("error");
        
    }
}


function mostrarAlerta(referencia, mensaje) {
    eliminarAlerta(referencia);
    const alertaDiv = document.createElement("div");
    alertaDiv.classList.add("alerta");
    alertaDiv.textContent = mensaje;
    referencia.append(alertaDiv);
}


//Para que no se repitan las alertas
function eliminarAlerta(referencia) {
    const alerta = referencia.querySelector(".alerta");
    if(alerta) {
        alerta.remove();
        
    }
}



// Validamos el envío del formulario
function enviarFormulario() {
    if(estadoValidacion.userNames && estadoValidacion.userLastNames && estadoValidacion.userEmail && estadoValidacion.userPassword) {

 
        formRegister.reset();
        alertaExito.classList.add("alertaExito");
        alertaError.classList.remove("alertaError");
        setTimeout(() => {
            alertaExito.classList.remove("alertaExito");
        }, 5000);
        
    } else {
        alertaExito.classList.remove("alertaExito");
        alertaError.classList.add("alertaError");
        setTimeout(() =>{
            alertaError.classList.remove("alertaError");
        }, 5000);
        
    }
}

console.log(alertaExito);