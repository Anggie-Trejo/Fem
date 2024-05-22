document.addEventListener("DOMContentLoaded", function() {
    /**
     * usamos addEvent Listener para que el código dentro de la función solo se ejecute una vez que todo el contenido HTML se haya cargado por completo.
     */
    const form = document.getElementById("form");
    const nombre = document.getElementById("name");
    const email = document.getElementById("email");
    const msj = document.getElementById("textarea");
    const text = document.getElementById("warnings");
    /**
     * Estas líneas obtienen referencias a los elementos del formulario usando getElementById. Cada constante almacena un elemento específico del DOM.
     */
    form.addEventListener("submit", function(e) {
        //Este evento se activa cuando el formulario se envía. "e" representa el evento del envío del formulario.
        e.preventDefault();
        /**
         * Esta línea previene que el formulario se envíe automáticamente y se recargue la página, permitiendo validar los datos primero.
         */
        let warnings = "";
        /** 
         * una cadena donde se acumulan los mensajes de advertencia.
         * */
        let entrar = false;
        /**
         * Un booleano que indica si hay alguna advertencia que mostrar.
         */
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        /**
         * una expresión regular para validar el formato del correo electrónico.
        */
        if (nombre.value.trim().length < 3) { 
            warnings += `El nombre debe tener al menos 3 caracteres <br>`;
            entrar = true;
        }
        /**
         * Esta condición verifica si el nombre tiene al menos 3 caracteres (después de eliminar espacios en blanco al principio y al final).Si la longitud no cumple con el tamañao definido, se agrega una advertencia*/
        if (!regexEmail.test(email.value)) {
            warnings += `El email no es válido <br>`;
            entrar = true;
        }
        /**
         * Esta condición verifica si el valor del correo electrónico cumple con el formato de la expresión regular. Si no es válido, se añade una advertencia
         */
        if (entrar) {
            text.innerHTML = warnings;
        } else {
            text.innerHTML = "Enviado";
            form.reset();
        }
        /**
         * Si hay advertencias, se muestran los mensajes en el elemento text.Si no hay advertencias, se muestra el mensaje "Enviado" y se restablece el formulario (form.reset()), limpiando todos los campos.
         */
    });
});
