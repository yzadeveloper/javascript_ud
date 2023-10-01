function calcularLitros(){
    let elementoKm = document.getElementById("textoKm");
    let textoKm = elementoKm.value;
    let cantKm = Number(textoKm);

    let cantLitros = Math.ceil(cantKm / 8.8);

    let resultado =document.getElementById("textoResultado");
    resultado.textContent = "carga " + cantLitros + " litros de combustible"; 
    //da los litros sin redondear,
    //añadir Math.ceil para redondear al alza.
    //resultado.textContent = "carga " + Math.ceil(cantLitros) + " litros de combustible";
    //es mejor redondearlo en el calculo: let cantLitros = Math.ceil(cantKm / 8.8);
}