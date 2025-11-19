// Função principal que orquestra o cálculo
function main() {
    // Simulação de dados (Para testar vários casos e usar Laços de Repetição)
    // Cada objeto representa um jogador ou uma temporada diferente
    const historicoPartidas = [
        { vitorias: 8, derrotas: 3 },   // Deve ser Ferro
        { vitorias: 25, derrotas: 5 },  // Saldo 20 -> Bronze (limite)
        { vitorias: 45, derrotas: 10 }, // Saldo 35 -> Prata
        { vitorias: 90, derrotas: 15 }, // Saldo 75 -> Ouro
        { vitorias: 100, derrotas: 5 }, // Saldo 95 -> Lendário
        { vitorias: 200, derrotas: 10 } // Saldo 190 -> Imortal
    ];

    // Laço de repetição para processar cada caso de teste
    for (let i = 0; i < historicoPartidas.length; i++) {
        let partida = historicoPartidas[i];
        
        // Chamada da função que calcula e classifica
        let resultado = calcularRank(partida.vitorias, partida.derrotas);
        
        // Saída formatada
        console.log(`O Herói tem de saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}`);
    }
}

// Função que recebe vitórias e derrotas e retorna um Objeto com o saldo e o nível
function calcularRank(vitorias, derrotas) {
    // 1. Calculo do saldo (Operadores e Variáveis)
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // 2. Estrutura de Decisão para definir o nível com base no SALDO
    // Observação: Ajustei os intervalos para cobrir "buracos" lógicos (ex: o número 10 ou 20 exatos)
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorno dos dados para quem chamou a função
    return { saldo: saldoVitorias, nivel: nivel };
}

// Executa o programa
main();
