function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

/* let rand = random(1, 50)
console.log(rand) */
const min = 1
const max = 50
let rand = random(min, max)

while(rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}


/* let nome = 'Luiz'

let i = 0

while(i < nome.length ) {
    console.log(nome[i])
    i++
}
console.log('Segue a vida...') */