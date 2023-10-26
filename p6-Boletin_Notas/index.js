let notas = [8, 4, 7, 9, 5];

function listarNotas() {
    let lista = document.getElementById("listaNotas");

    for(let nota of notas) {
        let item = document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);
    }
}

function calcularNotaMedia() {
    let suma = 0;

    for (x=0; x < 5; x++) {
        suma += notas[x];
    }
    let promedio = (suma / 5);
    document.getElementById("promedio"). textContent = promedio;

}

function buscarNotaAlta() {
    let notaAlta = 0;
    let x = 0;
    while (x < 5) {
        if (notas[x] > notaAlta) {
            notaAlta = notas[x];
        }
        x++;
    }
    document.getElementById("notaAlta").textContent = notaAlta;
}

function buscarSuspenso() {
    let suspenso = "No";
    let x = 0;
    do {
        if (notas[x] < 5) {
            suspenso = "Sí";
            break;
        }
        x++;
    } while (x < 5);
    document.getElementById("suspenso").textContent = suspenso;
}