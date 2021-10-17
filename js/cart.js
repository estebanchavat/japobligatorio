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
                <table>
            <tr>
                    <td> <img src="${articulos[i].src}"  class="imagetable"> </td>
                    <td>` + articulos[i].name + `</td>
                    <td>` + articulos[i].count + `</td>
                    <td > ` + "UYU" + " " + ` <span class="productprice"> ` + costonormalizado +`  </span></td>
                    <td ><input type='number' onchange="sumar()" value=1 min="0" </td>
                    <td id="subTotal${i}" class='precio' > ` + costonormalizado + ` </td></tr>
             </tr><br>
             </table>
                    `
                 }
                
                document.getElementById("micarrito").innerHTML=carrito;
                sumar();
        }
    })
})

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
