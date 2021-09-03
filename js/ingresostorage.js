function ingreso(){
    var redirecion = "../japobligatorio/index.html"
    if (localStorage.getItem("Username") === null){
        window.location.href = redirecion;
    } else {
        document.getElementById("logeo").innerHTML=  "Bienvenido: " + " "  + localStorage.getItem("Username") 
    }
}
ingreso()

function borrar() {
    localStorage.removeItem("Username");
}