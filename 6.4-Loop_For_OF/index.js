//Por cada valor del array

//sintaxis:
// let iterable = [10, 20, 30];

// for (let value of iterable) {
//     value += 1;
//     console.log(value);
//   }
  // 11
  // 21
  // 31

  //let iterable = "boo";

// for (let value of iterable) {
//     console.log(value);
//   }
  // "b"
  // "o"
  // "o"

  let array1 = ['a', 'b', 'c'];

  for(let letra of array1){
    document.write(letra);
  }

  //Practicas:
  //Implementar en la función testLoop, un Loop For Of que recorra miArray y en cada vuelta del ciclo,
  // vaya acumulando en la variable suma el valor de los numeros contenidos en el array. 
  //Se pide acumular, lo que indica que debo sumar el valor que ya contiene la variable suma, 
  //más el valor del elemento que estoy recorriendo y ese resultado asignarlo a suma.
  
let miArray = [5, 9, 6, 4, 8];
let suma = 0;

function testLoop() {
    for(let numero of miArray){
        suma = suma + numero;
    }
    
}

//Implementar la función testLoop, que mediante la utilización de un Loop For Of, 
//recorra mi Array e imprima en consola cada uno de los elementos que contiene el array.

let miArray2 = ['Mensaje 1', 'Mensaje 2', 'Mensaje 3'];

function testLoop() {
    for(let mensaje of miArray2){
        console.log(mensaje);
    }
    
}

