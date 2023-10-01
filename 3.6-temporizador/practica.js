function mostrarAlarma(){
    alert("Se acabó el tiempo");
}

function descontarTiempo(){
    setTimeout(mostrarAlarma(), 5000);
}

function mostrarAlarma(){
    alert("Se acabo el tiempo");
}

function descontarTiempo(){
    setTimeout(mostrarAlarma(), 1000 * 10);
}