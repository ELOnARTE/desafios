/*
  =============================================================
  DESAFIO 1: CLASSIFICADOR DE NÍVEL DE HERÓI
  =============================================================
  Requisitos: Variáveis, Operadores, Estruturas de Decisões.
*/

// 1. Variáveis para armazenar o nome e a XP do herói
let nomeHeroi = "Eloah";
let xpHeroi = 11000; // Altere este valor para testar diferentes níveis
let nivelHeroi = "";

// 2. Estrutura de Decisão (If/Else If) para classificar o nível
// Operadores de comparação (>, <, >=, <=) e lógicos (&&) são utilizados.
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else { // xpHeroi >= 10001
    nivelHeroi = "Radiante";
}

// 3. Saída do Classificador de Herói
console.log("==============================================");
console.log("CLASSE DO HERÓI");
console.log("==============================================");
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);
console.log("----------------------------------------------\n");

/*
  =============================================================
  DESAFIO SURPRESA: CADASTRO DE POKÉMON DA IMAGEM
  =============================================================
  Requisitos: Variáveis, Laços de repetição.
*/

// 4. Variável (Array de Objetos) para armazenar informações dos Pokémon
let timePokemon = [
    { nome: "Poochyena", nivel: 2, hp: "13/13", sexo: "Macho" },
    { nome: "Zigzagoon", nivel: 2, hp: "13/13", sexo: "Fêmea" },
    { nome: "Dragonite", nivel: 5, hp: "25/25", sexo: "Macho" },
    { nome: "Dragonite", nivel: 5, hp: "24/24", sexo: "Fêmea" },
    { nome: "Dragonite", nivel: 5, hp: "24/24", sexo: "Fêmea" },
    { nome: "Poochyena", nivel: 3, hp: "15/15", sexo: "Fêmea" },
    { nome: "Wurmple", nivel: 2, hp: "7/14", sexo: "Macho" }
];

// 5. Laço de Repetição (`for...of` para clareza ou `for` tradicional)
console.log("==============================================");
console.log("CADASTRO DE POKÉMON");
console.log("==============================================");

for (const pokemon of timePokemon) {
    // 6. Saída do Cadastro (utilizando template literals para concatenação)
    console.log(`O Pokémon de nome **${pokemon.nome}** (Lv ${pokemon.nivel}, HP ${pokemon.hp}) foi **Cadastrado com sucesso**.`);
}
console.log("----------------------------------------------");
