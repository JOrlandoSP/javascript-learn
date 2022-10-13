//Dado o array ALUNOS, que contem objetos que correspondem a cada aluno

let alunos = [
	{
		nome: "Zé do alho",
		nota: 3,
		tuma: "z"
	},
	{
		nome: "Chico Bento",
		nota: 4,
		tuma: "z"
	},
	{
		nome: "Benedita da Silva",
		nota: 6,
		tuma: "y"

	},
	{
		nome: "Dr. Enéias",
		nota: 9,
		tuma: "y"

	},
	{
		nome: "Valdomiro Santhiago",
		nota: 7,
		tuma: "w"

	}
]

// É feito um loop utilizando for IN, o qual itera pelos objetos do array
// Verifica se o valor da nota no item iterado é maior ou igual a MEDIA
// Em caso positivo o nome do objeto é enviado para o array APROVADOS
//
// Detalhe para o object destructuring utilizaddo dentro do for
// sem object destructuring seria...
//
// for (iAluno in alunos){
//	if (alunosp[iAluno].nota >= media){
//		aprovados.push(alunosp[iAluno].nome)
//	}
// }
//

function alunosAprovados(alunos, media){
	let aprovados = []

	for (iAluno in alunos){
		const {nome, nota} = alunos[iAluno]
		if (nota >= media){
			aprovados.push(nome)
		}
	}
	console.log(aprovados)
}

alunosAprovados(alunos, 6)
