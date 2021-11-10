let usuariosRegistrados = [
    {
        "email":"alejomino@hotmail.com",
        "password":"43251047"
    },
    {
        "email":"jeremiasgutierrez@gmail.com",
        "password":"43251047"
    },
];
function validar() {
        let usuarioIngresado = {"email":document.getElementById("email").value, "password":document.getElementById("pass").value};
        for(let i =0; i < usuariosRegistrados.length;i++){
            if(JSON.stringify(usuarioIngresado)==JSON.stringify(usuariosRegistrados[i])){
                window.location.href="loginExitoso.html";
                console.log("encontreee");
                return true;
            }
        }
        alert("Email o contraseña incorrectos");
        //aca iria el cartel de q no se pudo iniciar sesion
    }