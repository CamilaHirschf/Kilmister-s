function validar(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("pass").value;
    if(usuario=="alejo" && contraseña=="123456"){
        alert("Usuario y contraseña correctos");
    } else {
        alert("Datos incorrectos");
    }
}