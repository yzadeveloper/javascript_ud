//¿se cumple la condición x? -> Sí-> se sigue ejecutando un código || No -> fin del loop
//sintaxis:
// for ( condiciones de repetición ){
//    codigo a ejecutar
// }

//ej:
// for ( parte 1 (expresión inicial, let x = 0;), parte 2 (expresión condicional, x < 5;), parte 3 (expresión de actualización x + 1;) ){
//    console.log("Hola");
//    console.log("mundo");
// }


// for(x=0; x<5; x++){
//     console.log("Número igual a " + x);
// }

// for(x=1; x<6; x++){
//     document.write("<h" + x + ">Hola mundo</h" + x + ">")
// }

function multiplicar(){
    //Obtener el número
    let elementoTextotabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextotabla.value ;
    let numeroTabla = Number(textoNumeroTabla);

    //Obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //Producir y mostrar resultados
    for(x=1; x<=10; x++){
        //calcular el resultado
        let numeroResultado = numeroTabla * x;

        //Armar string con resultado
        let textoResultado = numeroTabla + " por " + x + " es igual a " + numeroResultado;

        //Crear un elemento de la lista

        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }

}