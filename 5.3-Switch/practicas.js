//Dado el array frutas, programe la función calcular, la cual utilizando un switch y el parámetro fruta, 
//asigne a la variable precio los siguientes valores según corresponda:

//Manzana: 15

//Naranja: 20

//Banana: 25

let precio = 0;
let frutas = ['manzana', 'naranja', 'banana'];

function calcular(fruta) {
    switch (fruta) {
    case "manzana":
        precio = 15;
        break;
    case "naranja":
        precio = 20;
        break;
    case "banana":
        precio = 25;
        break;
    }
    
}

//Programa la función mostrar, en donde según el parámetro opcion (cuyo valor es de tipo número) 
//muestre un mensaje en un alert de la siguiente forma:

//Si el parámetro opcion es igual a 1 mostrar "Buenos días"

//Si el parámetro opcion es igual a 2 mostrar "Buenas tardes"

//Si el parámetro opcion es igual a 3 mostrar "Buenas noches"

function mostrar(opcion) {
    switch (opcion){
        case 1:
            alert("Buenos días");
        break;
        case 2:
            alert("Buenas tardes");
        break;
        case 3:
            alert("Buenas noches");
            break;
    }
    
}

