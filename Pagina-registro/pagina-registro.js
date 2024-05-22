// El código se ejecuta hasta que todo el html esté cargado
document.addEventListener("DOMContentLoaded", ()=> {

const formRegister = document.querySelector(".form-register"); // Referencia al formulario de registro completo
const inputUser = document.getElementById("userNames");
const inputLastNames = document.getElementById("userLastNames");
const inputEmail= document.getElementById("userEmail");
const inputPassword = document.getElementById("passwords");
const inputPasswordcopy = document.getElementById("passwordClone");
const alertaError= document.querySelector(".alerta-error");
const alertaExito = document.querySelector(".alerta-exito");


/*Expresiones regulares. Son reglas de validación. La primera permite uno o dos nombres, de 2 a 12 caracteres cada uno, cualquier letra en minúscula o mayúscula*/
const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ]{3,10}(?:\s[a-zA-ZáéíóúÁÉÍÓÚüÜ]{0,10})?$/;
const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;



//El add.EventListener se dispara cada que el usuario escribe y llama a la función validarCampo
    inputUser.addEventListener("input", () =>{
        validarCampo(nameRegex, inputUser, "El nombre debe tener mínimo 3 caracteres, sin caracteres especiales.");
    });

    inputLastNames.addEventListener ("input", () =>{
        validarCampo(nameRegex, inputLastNames, "El apellido debe tener mínimo 3 caracteres, sin caracteres especiales");
    })

    inputEmail.addEventListener("input", () => {
        validarCampo(emailRegex, inputEmail, "Dirección de correo electrónico no válido.");
    })

    inputPassword.addEventListener("input", () =>{
        validarCampo(passwordRegex, inputPassword, "La contraseña debe tener mínimo una letra mayúscula, minúscula y algún digito numérico.")
    });

    inputPasswordcopy.addEventListener("input", validPassword);

    // La función que se ejecutará cuando el formulario se envíe. Típicamente, esta función realiza validaciones finales y previene el envío del formulario si hay errores.
    formRegister.addEventListener("submit", e => {
        e.preventDefault();
        enviarFormulario();
    });

//Estado de validación para ocupar en función validarCampo
const estadoValidacion = {
    userNames: false,
    userLastNames: false,
    userEmail: false,
    userPassword: false,
    userPasswordCopy: false,


};
    
//Se ocupa .test() para verificar si el valor del campo cumple las restricciones/reglas
// classList.add añade la clase error
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

//Gestión de creación y eliminación de las alertas
//La referencia es donde quiero mostrar mi alerta

function mostrarAlerta(referencia, mensaje) {
    eliminarAlerta(referencia);
    const alertaDiv = document.createElement("div"); //Se crea elemento div donde se mostrará la alerta
    alertaDiv.classList.add("alerta"); // al div se le añade la clase alerta
    alertaDiv.textContent = mensaje; //Agrega texto a la alerta
    referencia.append(alertaDiv); //Se añade como hijo del elemento referencia
}


//Para que no se repitan las alertas
function eliminarAlerta(referencia) {
    const alerta = referencia.querySelector(".alerta");
    if(alerta) {
        alerta.remove();
        
    }
}

//Validar contraseña
function validPassword(){

    if(inputPassword.value !== inputPasswordcopy.value){
        mostrarAlerta(inputPasswordcopy.parentElement, "No coinciden las contraseñas");
        estadoValidacion.userPasswordCopy = false;

    } else{
        eliminarAlerta(inputPasswordcopy.parentElement);
        estadoValidacion.userPasswordCopy = true;
    
    }

}




// Validamos el envío del formulario
function enviarFormulario() {
    if(estadoValidacion.userNames && estadoValidacion.userLastNames && estadoValidacion.userEmail && estadoValidacion.userPassword && estadoValidacion.userPasswordCopy) {

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
});

//console.log(alertaExito);