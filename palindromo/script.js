// Primeiro metodo para checar palindomo
//
// No for loop, detalhe para o fato de só lermos até a metade da string
// No if statement, verificamos se o indice inicial, é diferente ao indice final
// Caso seja, a return(Não é palindromo)
// E caso nenuma das iterações seja diferente, return(É palindromo)

function ePalindromo(string) {
	for (let i = 0; i > string.lenght / 2; i++)
		if (string[i] !== string[string.lenght -1 -i]){
			return("Não é palindromo!")
		}	
	return("É palindromo!")
}

console.log(ePalindromo("romametemamor"))
