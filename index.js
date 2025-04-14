// Desafio do Felipão do Curso Lógica de Programação da DIO
let heroi = "Felipão"
let XP = 10001
let rank = ""

switch (true) {
    case 1000:
        console.log("O XP é menor que 1000 = FERRO")
        rank = "FERRO"
    break
    case XP >= 1001 && XP <= 2000:
        console.log("O XP é maior que 1001 e menor que 2000 = BRONZE")
        rank = "BRONZE"
    break
    case XP >= 2001 && XP <= 5000:
        console.log("O XP é maior que 2001 e menor que 3000 = PRATA ")
        rank = "PRATA"
    break
    case XP >= 5001 && XP <= 6000:
        console.log("O XP é maior que 5001 e menor que 6000 =  OURO")
        rank = "OURO"
    break
    case XP >= 6001 && XP <= 8000:
        console.log("O XP é maior que 5001 e menor que 8000 = PLATINA ")
        rank = "PLATINA"
    break
    case XP >= 8001 && XP <= 9000:
        console.log("O XP é maior que 8001 e menor que 9000 = ASCENDENTE")
        rank = "ASCENDENTE"
    break
    case XP >= 9001 && XP <= 10000:
        console.log("O XP é maior que 9001 e menor que 10000 = IMORTAL")
        rank = "IMORTAL"
    break
    case XP >= 10001:
        console.log("O XP é maior ou igual que 10001 = RADIANTE")
        rank = "RADIANTE"
    break
}

console.log("O Herói " + heroi + " possui XP equivalente a " + XP + " e é um ranking " + rank)
