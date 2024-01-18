let nomeDoPersonagem = "Titan"
let xp = 300

if (xp < 1000) {
    console.log(" O Herói " + nomeDoPersonagem + " está no nível de " + "ferro")
} else if (xp > 2000 && xp <= 5000) {
    console.log(" O Herói " + nomeDoPersonagem + " está no nível de " + "Bronze")
} else if (xp > 5000 && xp <= 8000) {
    console.log(" O Herói " + nomeDoPersonagem + " está no nível de " + "Platina Diamante")
} else if (xp > 8000 && xp <= 9000){
    console.log("O Herói" + nomeDoPersonagem + " está no nível " + "Ascendente")
}