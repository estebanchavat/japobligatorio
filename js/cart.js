let articulos = [];
var sumaT =0;

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", () => {
    getJSONData(CART_INFO_DESAFIATE_URL).then( carroObj => {
        if (carroObj.status == "ok"){
            let priceproduct = carroObj.data;
            articulos = priceproduct.articles 
   
            mostrar();
        }
    })
})


function mostrar() {
    let carrito = "";
           
  
    for (i= 0; i < articulos.length; i++){
        let costonormalizado = cambio(articulos[i].currency, articulos[i].unitCost);

        carrito += `
        <table>
    <tr>
            <td> <img src="${articulos[i].src}"  class="imagetable"> </td>
            <td>` + articulos[i].name + `</td>
            <td>` + articulos[i].count + `</td>
            <td > ` + "UYU" + " " + ` <span class="productprice"> ` + costonormalizado +`  </span></td>
            <td ><input type='number' onchange="sumar()"  value=1 min="0" </td>
            <td id="subTotal${i}" class='precio' > ` + costonormalizado + ` </td>
            <td> <a onclick="deleteRow(${i})" class="btn btn-danger" data-abc="true"> <i class="fa fa-trash"></i> Remover </a> </td>
            </tr>

     </tr><br>
     </table>
            `
         }
        
        document.getElementById("micarrito").innerHTML=carrito;
        sumar();
}

function sumar (){
    let precios = document.getElementsByClassName("productprice")
    let suma =0; 
    let count = document.getElementsByTagName("input") 
    for (i=0; i< precios.length; i++){
        suma+= parseFloat(precios[i].innerHTML) * count[i].value;
        document.getElementById("subTotal"+i).innerHTML = parseFloat(precios[i].innerHTML) * count[i].value;
    }
    document.getElementById("total").innerHTML=(suma).toFixed(2);
}


function cambio(moneda,costo){
 
    if ( moneda === "USD") {
        return costo * 40; 
    }
    return costo
}

function porcentaje(value) {
let totalproducts =  document.getElementById("total").innerHTML

let totalenvio = parseFloat(totalproducts) * value;
let totalmasenvio = parseFloat(totalproducts) + totalenvio;

document.getElementById("costoenvio").innerHTML = (totalenvio).toFixed(2)
document.getElementById("totalenvio").innerHTML = (totalmasenvio).toFixed(2)
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function tarjetadecredito() {
    document.getElementById("validateemail").disabled = true;
    document.getElementById("ccbank").disabled = true;
    document.getElementById("validatecount").disabled = true;
    document.getElementById("validatename").disabled = false;
    document.getElementById("validatenumber").disabled = false;
    document.getElementById("validatedate").disabled = false;
    document.getElementById("validatecvv").disabled = false;
}

function paypal(){
    document.getElementById("validatename").disabled = true;
    document.getElementById("validatenumber").disabled = true;
    document.getElementById("validatedate").disabled = true;
    document.getElementById("validatecvv").disabled = true;
    document.getElementById("ccbank").disabled = true;
    document.getElementById("validatecount").disabled = true;
    document.getElementById("validateemail").disabled = false;

    
}
   
function bank(){
    document.getElementById("validatename").disabled = true;
    document.getElementById("validatenumber").disabled = true;
    document.getElementById("validatedate").disabled = true;
    document.getElementById("validatecvv").disabled = true;
    document.getElementById("validateemail").disabled = true;
    document.getElementById("validatecount").disabled = false;
    document.getElementById("ccbank").disabled = false;
}
   


function deleteRow(r)
    {

    articulos.splice(r, 1);
    mostrar();
    }
