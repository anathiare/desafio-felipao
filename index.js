function jogar() {
    let heroi = prompt("Digite o nome do herói:");
    let XP = 0;
  
    for (let i = 1; i <= 10; i++) {
        let escolha = prompt(`Ataque ${i}: Digite 1 para ÍMPAR ou 2 para PAR`);

        while (escolha !== "1" && escolha !== "2") {
            escolha = prompt(`Entrada inválida. Digite 1 para ÍMPAR ou 2 para PAR`);
        }

        let numero = Math.floor(Math.random() * 10) + 1;
        let paridade = numero % 2 === 0 ? "2" : "1"; // "2" = PAR, "1" = ÍMPAR
        let valor;

        if (escolha === paridade) {
            valor = 1050;
            alert(`✅ Acertou! Número sorteado: ${numero}. Ganhou ${valor} XP! 🎯`);
        } else {
            valor = -Math.floor(Math.random() * (300 - 50 + 1)) - 50;
            alert(`❌ Errou! Número sorteado: ${numero}. Perdeu ${Math.abs(valor)} XP 😢`);
        }

        XP += valor;
    }

    // Garante que o XP não seja negativo
    if (XP < 0) XP = 0;
  
    let rank = "";
  
    switch (true) {
        case XP <= 1000:
            console.log("O XP é menor ou igual a 1000 = FERRO");
            rank = "FERRO";
            break;
        case XP >= 1001 && XP <= 2000:
            console.log("O XP está entre 1001 e 2000 = BRONZE");
            rank = "BRONZE";
            break;
        case XP >= 2001 && XP <= 5000:
            console.log("O XP está entre 2001 e 5000 = PRATA");
            rank = "PRATA";
            break;
        case XP >= 5001 && XP <= 6000:
            console.log("O XP está entre 5001 e 6000 = OURO");
            rank = "OURO";
            break;
        case XP >= 6001 && XP <= 8000:
            console.log("O XP está entre 6001 e 8000 = PLATINA");
            rank = "PLATINA";
            break;
        case XP >= 8001 && XP <= 9000:
            console.log("O XP está entre 8001 e 9000 = ASCENDENTE");
            rank = "ASCENDENTE";
            break;
        case XP >= 9001 && XP <= 10000:
            console.log("O XP está entre 9001 e 10000 = IMORTAL");
            rank = "IMORTAL";
            break;
        case XP >= 10001:
            console.log("O XP é maior ou igual a 10001 = RADIANTE");
            rank = "RADIANTE";
            break;
    }
    
    document.getElementById("resultado").innerHTML =
      `⚔️ O Herói <strong>${heroi}</strong> terminou com <strong>${XP}</strong> XP e está no ranking <strong>${rank}</strong>! ⚔️`;
  }
  