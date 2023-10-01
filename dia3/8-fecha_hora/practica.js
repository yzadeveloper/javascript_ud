// Muestre en un alert, la fecha del dia de hoy con el formato DD/MM/YYYY. 
//Para ello debe usar la función toLocaleDateString('es-ES') que proporciona el objeto Date.

function mostrarFecha() {
    var fechaActual = new Date();
    
    alert(fechaActual.toLocaleDateString('es-ES'));

   }

   //Dado el código brindado, 
   //declarar (fuera de la función) un intervalo que ejecute la función test cada 1 segundo.

   function test() {
    console.log("+1 segundo");
}
   setInterval(test, 1000);