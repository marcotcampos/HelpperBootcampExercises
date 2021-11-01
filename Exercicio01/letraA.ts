function carregarVogais(word: string): void {
    let contador:number = 0;
    for(let a = 0; a < word.length; a++) {
      if ('aeiou'.includes(word[a].toLowerCase()))
          contador++;
    }
    // return contador;
    document.getElementById("parA").innerHTML = `A palavra <b>${word}</b> possui <b>${contador}</b> vogais.`
  }