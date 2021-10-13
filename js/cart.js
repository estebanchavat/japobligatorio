//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", () => {
    getJSONData(CART_INFO_DESAFIATE_URL).then( carroObj => {
        if (carroObj.status == "ok"){
            let priceproduct = carroObj.data;
            let articulos = priceproduct.articles 
            let carrito = "";
           
            
            
            for (i= 0; i < articulos.length; i++){
                let costonormalizado = cambio(articulos[i].currency, articulos[i].unitCost);

                carrito += `
                <table class="table table-striped table-dark tabla" >
            <tr>
                <th scope="row"> * </th>
                    <td> <img src="${articulos[i].src}"  class="imagetable"> </td>
                    <td>` + articulos[i].name + `</td>
                    <td>` + articulos[i].count + `</td>
                    <td class="productprice"> ` + "UYU" + " " + costonormalizado + `</td>
             </tr><br>
             </table>
                    `
                 }
                
                document.getElementById("micarrito").innerHTML=carrito;
        }
    })
})

function sumar (){
    let precios = document.getElementsByClassName("productprice")
    let suma =0; 
    for (i=0; i< precios.length; i++){
        suma+= parseFloat(precios[i].innerHTML);
    }
    document.getElementById("subtotal").innerHTML=(suma).toFixed;
}


function cambio(moneda,costo){
 
    if ( moneda === "USD") {
        return costo * 40; 
    }
    return costo
}
