function contadorVogais(): void {
    let contador:number = 0;
    let vogais:string = "aeiou";
    let word = (<HTMLInputElement>document.getElementById("txtPalavra")).value;

    for (let i:number = 0; i < word.length; i++) {
        if (vogais.includes(word[i].toLowerCase()))
            contador++;
    }
    document.getElementById("res").innerHTML = `Esta palavra possui <b>${contador}</b> ${contador == 1 ? "vogal" : "vogais"}`;
}