function ePalindromo(string){
	if(string.split("").reverse().join("") === string){
		return ("É palindromo")}
	else {
		return ("Não é palindromo")
	}
}

console.log(ePalindromo("ovo"))
