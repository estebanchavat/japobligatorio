//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {


document.getElementById("herephoto").src = localStorage.getItem("dataphoto");
showuser();
});


 function image64() { 
 let visual = document.getElementById("herephoto")
 let file = document.querySelector('input[type=file]').files[0];
 let reader = new FileReader();

reader.onloadend = function() {
 visual.src = reader.result;
localStorage.setItem("dataphoto", reader.result);
    }
  
if (file) {
    reader.readAsDataURL(file);
} else {
    visual.src = "";
    }
 }

function datauser() {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let edad = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let aboutme = document.getElementById("aboutme").value
   

    let data = {name, lastname, edad, phone, aboutme}
    localStorage.setItem("data", JSON.stringify(data))

}

function showuser() {

let user = JSON.parse(localStorage.getItem("data"));
let username = localStorage.getItem("Username")

document.getElementById("gmail").innerHTML = username
document.getElementById("nombre").innerHTML = user.name
document.getElementById("apellido").innerHTML =  user.lastname
document.getElementById("edad").innerHTML = user.edad
document.getElementById("telefono").innerHTML = user.phone
document.getElementById("textarea").innerHTML = user.aboutme



}

