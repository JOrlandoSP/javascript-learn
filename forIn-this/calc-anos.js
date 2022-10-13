// Função criada utilizando a THIS, onde THIS é uma referencia de aocontexto, ou seja, casos this seja declarado dentro de um metodo em um objeto, o valor dele é o objeto onde ele está contido. Quando declarada sozinha ou dentro de uma função, em seu estado normal, possui referencia de contexto global, ou seja, dentro de um navegador seu valor sera WINDOW.
//
// Quando dentro de um evento, seu contexto de referencia é o elemento que recebe o evento.


function calcAnos (anos){
	return `Daqui a ${anos} anos, ${this.nome} terá
	${this.idade + anos} anos de idade`;
}

const pesoa1 = {
	nome: "Matusalen",
	idade: 999
}
const pesoa2 = {
	nome: "Zé Batata",
	idade: 21
}
const animal = {
	nome: "Gato Gateiro",
	idade: 4
}

// Neste caso utilizamos o metodo CALL para que THIS passe a representar o parametro informado dentro dos parentedes, caso seja necessario fornecer mais parenteses utilizamos a ",".
console.log("Utilizando CALL")
console.log(calcAnos.call(pesoa1, 30))
console.log(calcAnos.call(pesoa2, 22))
console.log(calcAnos.call(pesoa1, 15))

// Também é possivel manipular o THIS utilizando o metodo APLLY da seguinte forma para obter o mesmo resultado
// O argumentos adicionais deven ser informados dentro de um ARRAY
console.log("Utilizando APPLY")
console.log(calcAnos.apply(pesoa1, [30]))
console.log(calcAnos.apply(pesoa2, [22]))
console.log(calcAnos.apply(pesoa1, [15]))

