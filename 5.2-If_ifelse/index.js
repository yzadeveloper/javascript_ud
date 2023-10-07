// si ( condición ) {
//    declaracion;
// } si no {
//    declaracion;
// }

// if ( precio <5 ) {
//    declaracion;
// } else {
//    declaracion;
// }

function evaluarCompra(){
    let elementoRespuesta = document.getElementById("decision");
    
    let elementoPrecio = document.getElementById("textoPrecio");
    let precio = elementoPrecio.value ;

    if (precio < 5){
        elementoRespuesta.textContent = "comprar 2 cartones de leche";
    } else {
        if (precio < 8){
            elementoRespuesta.textContent = "comprar solo 1 cartón de leche";
        } else {
            elementoRespuesta.textContent = "no comprar nada";
        }
    }
}
