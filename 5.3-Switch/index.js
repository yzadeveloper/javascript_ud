function consultarPrecio(){
    let elementoRespuesta = document.getElementById("textoPrecio");
    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value ;

    switch (fruta){
        case "1":
            elementoRespuesta.textContent = "8.45€";
            break;
        case "2":
            elementoRespuesta.textContent = "5.90€";
            break;
        case "3":
            elementoRespuesta.textContent = "7.40€";
            break;
        case "4":
            elementoRespuesta.textContent = "9.60€";
            break;
        case "5":
            elementoRespuesta.textContent = "2.80€";
            break;
    }
}