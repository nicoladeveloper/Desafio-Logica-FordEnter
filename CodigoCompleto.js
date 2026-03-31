    function mostrar(texto){
        document.write(texto);
        document.write("<br>");
   }

    let soma = 0;
    let menorValor = Infinity;

    let distancia;
    let consumoMedio;
    let preco;

do {
    distancia = parseFloat(prompt("Digite a distância (Km):"));

    if (isNaN(distancia)) {
        alert("Erro! Digite um número válido para a distância.");
    }

} while (isNaN(distancia));


do {
    consumoMedio = parseFloat(prompt("Digite o consumo médio (Km/L):"));

    if (isNaN(consumoMedio)) {
        alert("Erro! Digite um número válido para o consumo Médio do veículo");
    }

} while (isNaN(consumoMedio));

    let litros = distancia / consumoMedio;
    let consumoLitros = distancia/consumoMedio;


   let quantidadePostos = parseInt(prompt("Quantos postos pesquisados?"));

    for (let i = 1; i <= quantidadePostos; i++){
        let preco = parseFloat(prompt("Digite o preço do posto " + i + ":"));
        
        if(isNaN(preco)){
            alert("Valor inválido! Digite um número valido.");
            i--;
            continue;
        }

        soma+=preco;

        if (preco < menorValor){
            menorValor = preco;

        }
    }

    mostrar("Consumo necessário: " + consumoLitros.toFixed(2) + " litros");

    let media = soma / quantidadePostos;
        mostrar("Média dos preços: " + media.toFixed(2));

        mostrar("Menor preço: " + menorValor.toFixed(2));
        
    let gastoDiario = 2 * (consumoLitros * menorValor);
        mostrar("Gasto diário: " + gastoDiario.toFixed(2));
      
      // Para resolver o problema do NaN, foi utilizada 
      // a função isNaN() para verificar se o valor digitado
      // pelo usuário é realmente um número. Quando o usuário
      // digita algo inválido, o programa mostra uma mensagem
      // de erro e pede o valor novamente, garantindo que apenas
      // números sejam usados nos cálculos. De acordo com materiais
      // do W3Schools e discussões no StackOverflow, essa validação
      // é essencial, pois o parseFloat() pode retornar NaN quando
      // recebe textos, o que pode causar erros nos resultados.
