function validar() {
    let modelo = document.getElementById("modelo").value;
    let marca = document.getElementById("marca").value;
    let precio = document.getElementById("precio").value;
    let año = document.getElementById("año").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagenes = document.getElementById("imagenes").value;

    if ((modelo == "") || (marca == "") || (precio == "") || (año == "") ||
        (descripcion == "") || (imagenes == "") ) {
        alert("Faltan rellenar campos");
        return true;
    }
    window.location.href = "registerExitoso.html";
}