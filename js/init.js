const CATEGORIES_URL = "http://localhost:3000/category/all";
const PUBLISH_PRODUCT_URL = "http://localhost:3000/product/publish";
const CATEGORY_INFO_URL = "http://localhost:3000/category/info";
const PRODUCTS_URL = "http://localhost:3000/product/all";
const PRODUCT_INFO_URL = "http://localhost:3000/product/info";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:3000/product/comments";
const CART_INFO_URL = "http://localhost:3000/cart";
const CART_BUY_URL = "http://localhost:3000/cart/buy";
const CART_INFO_DESAFIATE_URL = "http://localhost:3000/cart/desafiate"

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});


