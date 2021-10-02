var product = {};
var comments = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];
        if (i == 0){
   
        htmlContentToAppend += `
        <div class="carousel-item active">
        <img src="${imageSrc}" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block">
        <h5> ${product.name} - ${product.currency} ${product.cost} </h5>
      </div>
      </div>`
        } else {
            htmlContentToAppend += `
            <div class="carousel-item">
        <img src="${imageSrc}" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block">
        <h5> ${product.name} - ${product.currency} ${product.cost} </h5>
      </div>
      </div>`
        }

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}


// Productos relacionados

function RelationProduct(array){
    let htmlContentToAppend = "";

    for ( let relacion of array){
    let relatedProductsindex = product2[relacion];
    
    htmlContentToAppend += 
    `<span class="card mr-3" style="width: 18rem; display: inline-block">                       
    <img src="${relatedProductsindex.imgSrc}" class="card-img-top">                   
    <div class="card-body">                     
    <h5 class="card-title">${relatedProductsindex.name}</h5>                     
    <p class="card-text">${relatedProductsindex.description}</p>                   
    </div>                   
    <div class="card-body">                     
    <a href="#" class="card-link">Ver Producto</a>                   
    </div>             
    </span>` ;
    }
        document.getElementById("productRel").innerHTML = htmlContentToAppend;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("user-rating-form").addEventListener("submit", function(e){
        e.preventDefault();
        addComment(comments);
    })
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let nombre  = document.getElementById("categoryName");
            let descripción = document.getElementById("categoryDescription");
            let vendidos = document.getElementById("soldCount");
            let precio = document.getElementById("productCriteria");
            let categorias = document.getElementById("categorycar");
            
        
            nombre.innerHTML = product.name;
            descripción.innerHTML = product.description;
            vendidos.innerHTML = product.soldCount;
            precio.innerHTML = product.currency + " " + product.cost;
            categorias.innerHTML = product.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(commentsobj){
        if (commentsobj.status === "ok"){
            comments = commentsobj.data;
            showComment();
        }
    });

        getJSONData(PRODUCTS_URL).then(function(productobj){
            if (productobj.status === "ok"){
                product2 = productobj.data;
            }
            RelationProduct(product.relatedProducts)
        });    

});

// Traer la petición de Product Info Comments, luego recorre en el for y asigna la cantidad de estrellas pintadas,
// El siguiente for asigna las estrellas sin pintar y se la resta con las pintadas.




function showComment(){

    var htmlcomentarios = "";

    for(let i = 0; i < comments.length; i++){
        let comment = comments[i];
        let stars = ``;
        let emptystars = ``; 

        for (let j=0; j<comment.score; j++){
            stars += '<span class="fa fa-star checked"></span>';
        }

        for (let e=0;  e< 5 -comment.score; e++){
            emptystars += `<span class="fa fa-star"></span>`;
        }

        htmlcomentarios += `
        <div class="row">
        <p><b> ` + comment.user + `</b> ` + "-"  + comment.dateTime + " - " + stars + emptystars + `<br> 
        ` + comment.description + ` <br></p> </div> <hr>
        `
    }
    document.getElementById("comentarios").innerHTML = htmlcomentarios;
}


// Push to new comments 

function addComment(){

var general = {};

// Formato del dia, fecha y hora actual.
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 var fechaNueva = date + ' ' + time

 general.user = localStorage.getItem("Username");
 general.description = document.getElementById ("comment").value;
 general.score = document.getElementById("estrellita").value;
 general.dateTime = fechaNueva;

  comments.push(general);
  showComment(comments);

     console.log(general);
    }
