//se ejecuta siempre 1 vez el código y después verifica si se cumplen las condiciones para volver a ejecutarlo.
//sintaxis:
// do (codigo) while ( condiciones ){
//    codigo a ejecutar
// }

// let vidas = 5;

// do{
//     console.log("Vidas: " + vidas);
//     vidas --;
// } while (vidas >= 0);

//let algo = prompt("Escribe algo", "Escribe aquí");

let nombre;
do{
    nombre = prompt("Dime mi nombre");
}while (nombre != "Fede");
    document.write("<h1>Ese es mi nombre!</h1>");

//Practicas
//mplemente la función testLoop, donde debe utilizar un Loop Do While que itere tantas veces como lo indique el 
//parámetro vueltas y que imprima en la consola en cada iteración el número de vuelta de la siguiente forma: 
//Vuelta 0, Vuelta 1, etc. Utilice la variable contador para ir contando la cantidad de vueltas que va dando el ciclo.
function testLoop(vueltas){
    let contador = 0;
    do {
        console.log("Vuelta " + contador);
        contador ++;
    } while (contador < vueltas);
}

//mplemente en la función testLoop, un Loop Do While que imprima en la consola la tabla de multiplicar (del 1 al 10) 
//del numero pasado por parámetro. Es decir, que si por parámetro se pasa el numero 8, en la consola se debe imprimir: 8,16,24...



function testLoop(numero) {
    let x = 1;
    do {
        console.log(numero*x);
        x++;
    } while (x<11)
}