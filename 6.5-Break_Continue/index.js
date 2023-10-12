let array1 = [ 1,5,24,95,11,10,62,15,9];
for (let numero of array1){
    if (numero < 50){
        document.write(numero + "<br>");
    } else {
        break;
    }
}

document.write("Esto es todo");

//Practicas:

//Modifique el Loop For Of de la función testLoop, para que ante la primer letra 'B' que 
//encuentre dentro del array, corte el ciclo con la instrucción break

function testLoop() {
    for(let letra of miArray) {
        if (letra != "B"){
        console.log(letra);
         } else {
            break;
        }
    }
}

//Modifique el Loop For Of, dentro de la función testLoop, para que imprima en la consola el elemento
// del array solo si este es mayor a 5. Utilice la palabra clave continue

let miArray = [9, 5, 6, 2, 7];
 
function testLoop() {
    for (let numero of miArray) {
        if (numero <= 5) {
            continue;
        }
        console.log(numero);
    }
}