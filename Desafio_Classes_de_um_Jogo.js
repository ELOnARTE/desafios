// Definição da Classe (O Molde)
class Heroi {
    // O Constructor é chamado na hora que criamos um novo herói (new Heroi)
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método (Ação)
    atacar() {
        let ataque;

        // Verificação do tipo para definir o ataque
        // O switch é mais limpo que vários if/else para essa situação
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        // Exibe a mensagem final conforme o desafio pede
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// --- TESTANDO O CÓDIGO (Instanciando Objetos) ---

// Criando heróis diferentes usando a mesma classe
const heroi1 = new Heroi("Gandalf", 1500, "mago");
const heroi2 = new Heroi("Conan", 30, "guerreiro");
const heroi3 = new Heroi("Bruce Lee", 32, "monge");
const heroi4 = new Heroi("Naruto", 16, "ninja");

// Chamando o método atacar de cada um
heroi1.atacar(); // Saída: o mago atacou usando magia
heroi2.atacar(); // Saída: o guerreiro atacou usando espada
heroi3.atacar(); // Saída: o monge atacou usando artes marciais
heroi4.atacar(); // Saída: o ninja atacou usando shuriken
