class ContaBancaria {
	constructor(agencia, numero, tipo, saldo){
		this.agencia = agencia;
		this.numero =  numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

	get saldo(){
		return this._saldo;
	}

	set saldo(valor){
		this._saldo = valor;
	}

	sacar(valor){
		if (valor > this._saldo) {
			return "Saldo insuficiente."
		}
		this._saldo = this.saldo - valor

		return this._saldo
	}

	depositar(valor){
		this.saldo = this.saldo + valor

		return this.saldo
	}
};

class ContaCorretnte extends ContaBancaria{
	constructor(agencia, numero, saldo, cartaoCredito) {
		super(agencia, numero, saldo);
		this.tipo = "corrente";
		this._cartaoCredito = cartaoCredito;
	};
	get cartaoCredito(){
		return this.cartaoCredito;
	}
	
	set cartaoCredito(valor){
		this.cartaoCredito = valor
	};
}; 

class ContaPupanca extends ContaBancaria{
	constructor(agencia, numero, saldo) {
		super(agencia, numero, saldo);
		this.tipo = "poupança";
	};
};

class ContaUniversitaria extends ContaBancaria{
	constructor(agencia, numero, saldo) {
		super(agencia, numero, saldo);
		this.tipo = "universitaria";
	};

	sacar(valor){
		if (valor > 500){
			return "Limite de saque de 500"
		}else if (valor > this._saldo) {
			return "Saldo insuficiente."
		}
		this._saldo = this.saldo - valor

		return this._saldo
	}
};
