"use strict";
function contadorVogais() {
    let contador = 0;
    let vogais = "aeiou";
    let word = document.getElementById("txtPalavra").value;
    for (let i = 0; i < word.length; i++) {
        if (vogais.includes(word[i].toLowerCase()))
            contador++;
    }
    document.getElementById("res").innerHTML = `Esta palavra possui <b>${contador}</b> ${contador == 1 ? "vogal" : "vogais"}`;
}
