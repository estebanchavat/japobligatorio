//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function ingresoUsername() {
    var correos = document.getElementById("email").value;
    localStorage.setItem ("Username", correos);
}




