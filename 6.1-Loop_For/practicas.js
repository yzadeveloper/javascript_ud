//Implementa un Loop For, dentro de la función testLoop() ya declarada, 
//que cumpla 5 iteraciones inicializando a la variable x en 0 y que en cada vuelta de ciclo (iteración), 
//escriba en nuestro código html (document.write) etiquetas <p> cuyo contenido de la etiqueta sea Vuelta 0, 
//Vuelta 1, Vuelta 2, etc.
// Es decir, el texto Vuelta concatenado con el valor de la variable x del ciclo

// <!DOCTYPE html>
//     <head>
//         <title>Loop For 1</title>
//     </head>
//     <body>
//         <script>
//             function testLoop() {
//                for(x=0; x<5; x++) {
//                     document.write('<p>Vuelta ' + x + '</p>');
//                 }
                
//             }
//         </script>
//     </body>
// </html>

//Implementar un Loop For, dentro de la función testLoop() ya declarada,
// que cumpla 3 iteraciones inicializando a la variable x en 1 y que en cada vuelta de ciclo (iteración), 
//escriba en nuestro código html (document.write) etiquetas <p> cuyo contenido de la etiqueta sea Vuelta 1, 
//Vuelta 2, Vuelta 3. Es decir, el texto Vuelta concatenado con el valor de la variable x del ciclo

// <!DOCTYPE html>
//     <head>
//         <title>Loop For 2</title>
//     </head>
//     <body>
//         <script>
//             function testLoop() {
//                 for(x=1; x<4; x++) {
//                 document.write('<p>Vuelta ' + x + '</p>');
//                 }
                
//             }
//         </script>
//     </body>
// </html>

// 3. implemente un Loop For cuya variable x asociada este inicializada en 1 y la condicion que se debe cumplir para que
//el ciclo se siga ejecutando es que dicha variable sea menor a 5. Esto quiere decir, que el ciclo va a cumplir con 4 vueltas 
//(iteraciones).
//En cada vuelta del ciclo, se debe ir acumulando en la variable suma, el valor de la variable x. 
//Ten en cuenta que estamos diciendo "acumular", lo que significa que debes sumar el valor que ya contiene la variabla suma, 
//más el valor de x y ese resultado asignarlo a suma.

let suma = 0;

function testLoop() {
    for( let x=1; x<5; x++){
        suma = suma + x;
    }
   
}

//Implemente en la función testLoop, un Loop For que imprima en la consola la tabla de multiplicar (hasta el 10) del numero pasado por parámetro. 
function testLoop(numero) {
    for(let x=1; x<11; x++) {
        console.log(numero*x);
    }
    
}