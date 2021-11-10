let listaMails = ["osobuco@gmail.com", "claudio@gmail.com", "jeremias@gmail.com"];
let listaDocumentos = ["43251047", "43251046"];

function validar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let domicilio = document.getElementById("domicilio").value;
    let dni = document.getElementById("dni").value;
    let numeroTarjeta = document.getElementById("numeroTarjeta").value;
    let nombreTitular = document.getElementById("nombreTitular").value;
    let codigoTarjeta = document.getElementById("codigoTarjeta").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let tipoUsuario = document.getElementById("tipoUsuario").value;


    if (listaMails.includes(email)) {
        alert("Email ya registrado");
        return true;
    }
    if (listaDocumentos.includes(dni)) {
        alert("Numero de documento ya registrado");
        return true;
    }
    if ((nombre == "") || (apellido == "") || (domicilio == "") || (dni == "") ||
        (numeroTarjeta == "") || (codigoTarjeta == "") || (nombreTitular == "") || (pass == "")) {
        alert("Faltan rellenar campos");
        return true;
    }
    if(tipoUsuario=="comprador"){
        window.location.href = "registerExitoso.html";
    } else {
        window.location.href = "registerVehiculo.html";
    }
}