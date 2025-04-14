// Desafio do Felipão do Curso Lógica de Programação da DIO
let heroi = "Felipão";
let XP = 10001;
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

console.log(`O Herói ${heroi} possui XP equivalente a ${XP} e está no ranking ${rank}`);
