/* ==================================================
EXERCÍCIO 1 - CLASSE SIMPLES (Pessoa)

 Enunciado: Crie uma classe chamada Pessoa que possua:
 - nome 
 - idade 

 Crie um método apresentar() que exiba no console
 o nome e a idade da pessoa.
 ==================================================== */

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome,
            this.idade = idade
    }

    apresentar() {
        console.log(`Nome: ${this.nome} e a Idade: ${this.idade} anos.`)
    }
}

const pessoa1 = new Pessoa(`Lets Roberts`, 18)
pessoa1.apresentar()

/* ==================================================
EXERCÍCIO 2 - CLASSE SIMPLES (Produto)

 Enunciado: Crie uma classe Produto com:
 - nome 
 - preco 

 Crie um método mostrarPreco() que exiba
 o nome do produto e seu preço.
 ==================================================== */

class Produto {
    constructor(nome, preco) {
        this.nome = nome,
            this.preco = preco
    }

    mostrarPreco() {
        console.log(`Nome do Produto: ${this.nome}
Preço: R$ ${this.preco}.`)
    }
}

const produto1 = new Produto(`Livro`, 35.99)
produto1.mostrarPreco()

/* ==================================================
EXERCÍCIO 3 - HERANÇA (Funcionário)

 Enunciado: Crie uma classe Funcionário com:
 - nome

Crie uma classe Gerente que herda de Funcionário e
possui:
- setor

 Crie um método que exiba o nome e o setor do Gerente.
 ==================================================== */

class Funcionario {
    constructor(nome) {
        this.nome = nome
    }
}

class Gerente extends Funcionario {
    constructor(nome, setor) {
        super(nome)
        this.setor = setor
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome}
Setor: ${this.setor}.`)
    }
}

const gerente1 = new Gerente("Celso", "DP")
gerente1.mostrarDados()

/* ==================================================
EXERCÍCIO 3 - HERANÇA (Veículo)

 Enunciado: Crie uma classe Veículo com:
 - marca

Crie uma classe Carro que herda de Veículo e
possui:
- modelo

 Crie um método que exiba a marca e o modelo do carro.
 ==================================================== */

class Veiculo {
    constructor(marca) {
        this.marca = marca
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo) {
        super(marca)
        this.modelo = modelo
    }

    mostrarDados() {
        console.log(`Marca: ${this.marca}.
Modelo: ${this.modelo}.`)
    }
}

const carro1 = new Carro("Ford", "Fusion")
carro1.mostrarDados()

/* ==================================================
EXERCÍCIO 5 - ENCAPSULAMENTO (Conta)

 Enunciado:
 Crie uma classe Conta onde:
 - o saldo seja um atributo privado;
 - exista um método depositar(valor);
 - exista um método mostrarSaldo().
 ==================================================== */

class Conta {
    #saldo
    constructor() {
        this.#saldo = 0
    }

    depositar(valor) {
        this.#saldo = this.#saldo + valor
        console.log(`Foi adicionado R$ ${valor}! Agora você tem R$ ${this.#saldo} na conta.`)
    }

    mostarSaldo() {
        console.log(`Você tem R$ ${this.#saldo} na conta!`)
    }
}

const conta1 = new Conta()
conta1.depositar(10)
conta1.mostarSaldo()

/* ==================================================
EXERCÍCIO 6 - ENCAPSULAMENTO (Conta)

 Enunciado:
 Crie uma classe Aluno onde:
 - a nota seja um atributo privado;
 - exista um método definirNota(nota);
 - exista um método mostrarNota().
 ==================================================== */

class Aluno {
    #nota
    constructor() {
        this.#nota = 0
    }

    definirNota(nota) {
        if (this.#nota >= 10 || this.#nota < 0) {
            console.log(`Você não pode alterar essa nota!`)
        }
        else {
            this.#nota = nota
            console.log(`Você definiu a nota: ${this.#nota}!`)
        }
    }

    mostrarNota() {
        console.log(`Sua nota: ${this.#nota}.`)
    }
}

const aluno1 = new Aluno()
aluno1.definirNota(8)
aluno1.mostrarNota()