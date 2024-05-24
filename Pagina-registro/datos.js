document.addEventListener("DOMContentLoaded", ()=> {

    const formRegister = document.querySelector(".form-register"); // Referencia al formulario de registro completo

    formRegister.addEventListener("submit", e => {
        e.preventDefault();

    
    const user = {
        name: document.getElementById("userNames").value,
        lastname: document.getElementById("userLastNames").value,
        email: document.getElementById("userEmail").value,
        phone: document.getElementById("userPhone").value,
        age: document.getElementById("userAge").value,
        country: document.getElementById("userResidencia").value,
        city: document.getElementById("userCity").value,
        password : document.getElementById("passwords").value,
        passwordcopy : document.getElementById("passwordClone").value
    };
    //Objeto a JSON
    const userJson = JSON.stringify(user);
    const pasedJson = JSON.parse(userJson);

    //Para ver el JSON en consola
    console.log(userJson);
    console.log(pasedJson);

});
     

});
    
    