var cartproduct = {}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});

getJSONData(CART_INFO_URL).then(function(carroObj){
    if (carroObj.status === "ok")
    {
}
 
let cartproduct = carroObj.data;

            // let nombre  = document.getElementById("categoryName");
            // let cuenta = document.getElementById("categorycount");
            // let preciounitario = document.getElementById("unitprice");
            // let imagen = document.getElementById("images");
            
        
            // nombre.innerHTML = cartproduct.articles[0].name;
            // cuenta.innerHTML = cartproduct.articles[0].count;
            // preciounitario.innerHTML = cartproduct.articles[0].currency + " " +  cartproduct.articles[0].unitCost;
            // imagen.innerHTML = cartproduct.articles[0].src;

});

function productcart(array) {
    var carrito = "";

    for (i= 0; i < array.articles; i++){
    
        carrito = `  
        <div class="row">
        <div class="col-3">
            <img src="` + array.articles.src + `" alt="``" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">`+ array.articles.name +`</h4>
                <small class="text-muted">` + array.articles.count + ` vendidos</small>
            </div>
            <p class="mb-1">`+ array.articles.currency + " " + array.articles.unitCost +  ` </p>
        </div>
    </div>
        
        `

        document.getElementById("micarrito").innerHTML = carrito
    }

}
productcart(cartproduct);





