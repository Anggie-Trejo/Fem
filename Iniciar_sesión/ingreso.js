


function acceso() {
const email=document.getElementById("email").value;
const password=document.getElementById("contraseña").value;

if(email=="algo@otracosa.com" && password==="probandoando")
    {
        window.location="prueba.html"
    } else {
        alert("Datos incorrectos")
    }

}