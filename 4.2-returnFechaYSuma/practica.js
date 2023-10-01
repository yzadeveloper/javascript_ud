// Escribir el código necesario para hacer que la funcion sumar() resuelva la siguiente suma (15 + 19) 
// y retorne el resultado de la misma, para que sea utilizada por la función mostrarResultado()


function mostrarResultado() {
    let resultado = sumar();
    alert(resultado);
}

function sumar() {
    return 15 + 19;
    
}

// Declarar la función obtenerFecha(), la cual debe obtener la fecha actual en formato DD/MM/YYYY 
// (utilizar la función toLocaleDateString('es-ES') del objeto Date) 
// y retornarla para que la función mostrarFecha la utilice.

function mostrarFecha() {
    alert(obtenerFecha());
}

function obtenerFecha(){
    var fechaActual = new Date();
    return fechaActual.toLocaleDateString('es-ES');
    
}