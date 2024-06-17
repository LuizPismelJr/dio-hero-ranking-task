var heroi =
    [
        ["Cleiton", 100000, "Rank"],
        ["Cleber", 8450, "Rank"],
        ["Marcia", 3300, "Rank"],
        ["Vitin", 5340, "Rank"],
        ["Ragnar", 1100, "Rank"],
        ["Bruce Wayne", 2320, "Rank"],
        ["Vagner", 100, "Rank"],
        ["Pricilão", 50000, "Rank"],
        ["Blastoise", 6000, "Rank"],
        ["Barbara", 7200, "Rank"],
        ["Honey", 2320, "Rank"],
        ["Dunny", 7000, "Rank"],
    ]

for (let n in heroi) {

    heroi[n][1] = Math.floor(Math.random() * 10100)

    if (heroi[n][1] <= 1000) {
        heroi[n][2] = "Ferro"
    } else if (heroi[n][1] <= 2000 && heroi[n][1] > 1001) {
        heroi[n][2] = "Bronze"
    }
    else if (heroi[n][1] <= 5000 && heroi[n][1] > 2001)
        heroi[n][2] = "Prata"

    else if (heroi[n][1] <= 7000 && heroi[n][1] > 5001)
        heroi[n][2] = "Ouro"

    else if (heroi[n][1] <= 8000 && heroi[n][1] > 7001)
        heroi[n][2] = "Platina"

    else if (heroi[n][1] <= 9000 && heroi[n][1] > 8001)
        heroi[n][2] = "Ascendente"

    else if (heroi[n][1] <= 10000 && heroi[n][1] > 9001)
        heroi[n][2] = "Imortal"

    else if (heroi[n][1] >= 10001)
        heroi[n][2] = "Radiante"

    if (heroi[n][1] > 8000) {
        console.log("O Herói de nome " + heroi[n][0] + " está no nível " + heroi[n][2] + " com mais de 8 mil!!")
    } else {
        console.log("O Herói de nome " + heroi[n][0] + " está no nível " + heroi[n][2])
    }

}
