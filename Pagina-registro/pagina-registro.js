// El código se ejecuta hasta que todo el html esté cargado
document.addEventListener("DOMContentLoaded", ()=> {

    const formRegister = document.querySelector(".form-register"); // Referencia al formulario de registro completo
    const inputUser = document.getElementById("userNames");
    const inputLastNames = document.getElementById("userLastNames");
    const inputEmail= document.getElementById("userEmail");
    const inputPhone = document.getElementById("userPhone");
    const inputAge = document.getElementById("userAge");
    const selectResidence = document.getElementById("userResidencia");
    const inputCity = document.getElementById("userCity");
    const inputPassword = document.getElementById("passwords");
    const inputPasswordcopy = document.getElementById("passwordClone");
    
    const alertaError= document.querySelector(".alert-danger");
    const alertaExito = document.querySelector(".alert-success");
    
        // Cargar los datos del almacenamiento local al cargar la página
        const storedFormData = JSON.parse(localStorage.getItem('formData'));
        if (storedFormData) {
            inputUser.value = storedFormData.name || '';
            inputLastNames.value = storedFormData.lastname || '';
            inputEmail.value = storedFormData.email || '';
            inputPhone.value = storedFormData.phone || '';
            inputAge.value = storedFormData.age || '';
            selectResidence.value = storedFormData.country || '';
            inputCity.value = storedFormData.city || '';
            inputPassword.value = storedFormData.password || '';
            inputPasswordcopy.value = storedFormData.passwordcopy || '';
        }
        
        formRegister.addEventListener("submit", (event) => {
            event.preventDefault(); // Evitar el envío del formulario
    
        const formData = {
            name: inputUser.value,
            lastname: inputLastNames.value,
            email: inputEmail.value,
            phone: inputPhone.value,
            age: inputAge.value,
            country: selectResidence.value,
            city: inputCity.value,
            password: inputPassword.value,
            passwordcopy: inputPasswordcopy.value
        };
    
        // Guardar los datos en el almacenamiento local
        localStorage.setItem('formData', JSON.stringify(formData));
    
        console.log(formData); // Imprimir los datos en la consola
    
    });
    
    
    /*Expresiones regulares. Son reglas de validación. La primera permite uno o dos nombres, de 2 a 12 caracteres cada uno, cualquier letra en minúscula o mayúscula*/
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ]{3,10}(?:\s[a-zA-ZáéíóúÁÉÍÓÚüÜ]{0,10})?$/;
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)[a-zA-Z\dñÑ!@#$%^&*(),.?":{}|<>]{8,}$/;
    const cityRegex= /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]{5,}$/;
    const phoneRegex= /^\+?(\d{1,4})?[\s-]?(\(?\d{2,3}\)?)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
    
    
    
    
    //El add.EventListener se dispara cada que el usuario escribe y llama a la función validarCampo
        inputUser.addEventListener("input", () =>{
            validarCampo(nameRegex, inputUser, "El nombre debe tener mínimo 3 caracteres, sin caracteres especiales.");
        });
    
        inputLastNames.addEventListener ("input", () =>{
            validarCampo(nameRegex, inputLastNames, "El apellido debe tener mínimo 3 caracteres, sin caracteres especiales");
        });
    
        inputEmail.addEventListener("input", () => {
            validarCampo(emailRegex, inputEmail, "Dirección de correo electrónico no válido.");
        });
    
        inputPhone.addEventListener("input", () => {
            validarCampo(phoneRegex, inputPhone, "Formato de número inválido")
        });
    
        inputAge.addEventListener("input", validAge);
        
        selectResidence.addEventListener("change", () => {
            validarResidence(selectResidence, "Selecciona un país de residencia.");
        });
    
        inputCity.addEventListener("input", () =>{
            validarCampo(cityRegex, userCity, "Escribe el nombre de tu ciudad");
        });
    
        inputPassword.addEventListener("input", () =>{
            validarCampo(passwordRegex, inputPassword, "La contraseña debe tener mínimo 8 caracteres.")
        });
    
        inputPasswordcopy.addEventListener("input", validPassword);
    
        // La función que se ejecutará cuando el formulario se envíe. Típicamente, esta función realiza validaciones finales y previene el envío del formulario si hay errores.
        
        formRegister.addEventListener("submit", e => {
            e.preventDefault();
            enviarFormulario();
        });
        
    
    //Objeto de Estado de validación para ocupar en funciones validarCampo, validar contraseña, calcular edad, etc.
    const estadoValidacion = {
        userNames: false,
        userLastNames: false,
        userEmail: false,
        userPhone: false,
        userAge: false,
        userResidencia: false,
        userCity: false,
        passwords: false,
        passwordClone: false,
    
    
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
    };
    
    //Gestión de creación y eliminación de las alertas
    //La referencia es donde quiero mostrar mi alerta
    
    function mostrarAlerta(referencia, mensaje) {
        eliminarAlerta(referencia);
        const alertaDiv = document.createElement("div"); //Se crea elemento div donde se mostrará la alerta
        alertaDiv.classList.add("alerta"); // al div se le añade la clase alerta
        alertaDiv.textContent = mensaje; //Agrega texto a la alerta
        referencia.append(alertaDiv); //Se añade como hijo del elemento referencia
    };
    
    
    //Para que no se repitan las alertas
    function eliminarAlerta(referencia) {
        const alerta = referencia.querySelector(".alerta");
        if(alerta) {
            alerta.remove();
            
        }
    };
    
    //Validar contraseña
    function validPassword(){
    
        if(inputPassword.value !== inputPasswordcopy.value){
            mostrarAlerta(inputPasswordcopy.parentElement, "No coinciden las contraseñas");
            estadoValidacion.passwordClone = false;
            inputPasswordcopy.classList.add("error");
    
        } else{
            eliminarAlerta(inputPasswordcopy.parentElement);
            estadoValidacion.passwordClone = true;
            inputPasswordcopy.classList.remove("error");
        
        }
    
    }
    
    //Calcular edad de la usuaria
    function validAge(){
     const birthday = new Date(inputAge.value);
     const today = new Date();
    
     let age= today.getFullYear() - birthday.getFullYear();
     const monthDifference = today.getMonth - birthday.getMonth();
     const dayDifference = today.getDate() - birthday.getDate();
    
     //Ajustar la edad si el mes y día actual es menor que el mes y día de nacimiento, age-- ajusta la edad si la persona no ha cumplido años este año
     if( monthDifference <0 || (monthDifference === 0 && dayDifference < 0)){
         age--;
     }
    
     if (age >= 18) {
        estadoValidacion.userAge =true;
        eliminarAlerta(inputAge.parentElement);
        inputAge.classList.remove("error");
        } else{
        mostrarAlerta(inputAge.parentElement, "Lo sentimos, debes ser mayor de 18 años para poder accesar.");
        estadoValidacion.userAge=false;
        inputAge.classList.add("error");
     }
    
    }
    
    //Validar selección de país de residencia
    function validarResidence(campo, mensaje) {
        if (campo.value !== "Seleccionar") {
            eliminarAlerta(campo.parentElement);
            estadoValidacion[campo.id]=true;
            campo.classList.remove("error");
        } else {
            estadoValidacion[campo.id]=false;
            mostrarAlerta(campo.parentElement, "Selecciona una opción");
            campo.classList.add("error");
        }
    
    }
    
    
    
    // Validamos el envío del formulario
    function enviarFormulario() {
        if(estadoValidacion.userNames && estadoValidacion.userLastNames && estadoValidacion.userEmail && estadoValidacion.userPhone && estadoValidacion.userAge && estadoValidacion.userResidencia && estadoValidacion.userCity && estadoValidacion.passwords && estadoValidacion.passwordClone) {
    
            formRegister.reset();
            alertaExito.classList.add("alertaExito");
            alertaError.classList.remove("alertaError");
            setTimeout(() => {
                alertaExito.classList.remove("alertaExito");
            }, 3000);
            
        } else {
            alertaExito.classList.remove("alertaExito");
            alertaError.classList.add("alertaError");
            setTimeout(() =>{
                alertaError.classList.remove("alertaError");
            }, 3000);
            
        }
    }
    });
    
    //console.log(alertaExito);