
/* Splice altera o array inicial */

let arr = ["pão", "alface", "tomate", "hamburger", "picles"]

soPicles = arr.splice(-1)

console.log(arr)
console.log(soPicles)

/* Slice NÃO altera o array inicial */

let arr2 = ["casquinha", "calda", "sorvete", "confeitos", "cereja"]

soSorvete = arr2.slice(2,3,1)

console.log(arr2)
console.log(soSorvete)


/* Metodo built-in para reversão de strings 
1Separa a string
  .split('')

Reverte a string
  .reverse()

Junta a string previamente separada
  .join('')
*/

let frase = "batata"
let esarf = frase.split('').reverse().join('')

console.log(esarf)

console.log(esarf.split(""))
console.log(esarf.split("").reverse())
console.log(esarf.split('').reverse().join(''))