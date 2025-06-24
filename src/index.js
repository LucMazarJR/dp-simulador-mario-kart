import { getPlayer } from './players.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();

console.log("🏁 Simulador de Corrida Mario Kart 🏁\n");
console.log("Personagens:\n1. Mario\n2. Peach\n3. Yoshi\n4. Bowser\n5. Luigi\n6. Donkey Kong\n");
console.log("Jogador 1, escolha seu personagem: ");
let player1Index

do{
    player1Index = parseInt(prompt("Escolha um número entre 1 e 6: ")) - 1;
    if(player1Index < 0 || player1Index > 5) {
        console.log("Número inválido! Por favor, escolha um número entre 1 e 6.");
    }
}while(player1Index < 0 || player1Index > 5);

let player2Index
do{
    player2Index = parseInt(prompt("Jogador 2, escolha seu personagem (diferente do Jogador 1): ")) - 1;
    if(player2Index === player1Index) {
        console.log("Escolha inválida! O Jogador 2 deve escolher um personagem diferente do Jogador 1.");
    }
    else if(player2Index < 0 || player2Index > 5) {
        console.log("Número inválido! Por favor, escolha um número entre 1 e 6.");
    }
}while(player2Index === player1Index || player2Index < 0 || player2Index > 5);

let player1 = getPlayer(player1Index);
let player2 = getPlayer(player2Index);

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result

    switch (true){
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
    }
    return result;
}

async function logRollResult(charName, block, diceResult, attribute) {
    console.log(`${charName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(p1, p2) {
    for(let i = 1; i <= 5; i++) {
        console.log(`🏁  Rodada ${i}`)

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

            let diceResult2 = await rollDice();
        let diceResult1 = await rollDice();

        let testSkill1 = 0;
        let testSkill2 = 0;

        if(block === "RETA") {
            testSkill1 = p1.Velocidade + diceResult1;
            testSkill2 = p2.Velocidade + diceResult2;

            await logRollResult(p1.Nome, "Velocidade", diceResult1, p1.Velocidade);
            await logRollResult(p2.Nome, "Velocidade", diceResult2, p2.Velocidade);
        }
        else if(block === "CURVA") {
            testSkill1 = p1.Manobrabilidade + diceResult1;
            testSkill2 = p2.Manobrabilidade + diceResult2;

            await logRollResult(p1.Nome, "Manobrabilidade", diceResult1, p1.Manobrabilidade);
            await logRollResult(p2.Nome, "Manobrabilidade", diceResult2, p2.Manobrabilidade);
        }
        else{
            let powerResult1 = p1.Poder + diceResult1;
            let powerResult2 = p2.Poder + diceResult2;
            
            console.log(`${p1.Nome} confrontou com ${p2.Nome}🥊`);
            await logRollResult(p1.Nome, "Poder", powerResult1, p1.Poder);
            await logRollResult(p2.Nome, "Poder", powerResult2, p2.Poder);

            if(powerResult1 > powerResult2 && p2.Pontos > 0){
                console.log(`${p1.Nome} Ganhou o confronto! ${p2.Nome} perdeu 1 ponto.`);
                p2.Pontos -= 1;
            }
            else if(powerResult2 > powerResult1 && p1.Pontos > 0) {
                console.log(`${p2.Nome} Ganhou o confronto! ${p1.Nome} perdeu 1 ponto.`);
                p1.Pontos -= 1;
            }
            else{
                console.log("Empate no confronto! Nenhum ponto foi perdido.");
            }
        }

        if(testSkill1 > testSkill2) {
            console.log(`${p1.Nome} marcou um ponto!`);
            p1.Pontos += 1;
        }
        else if(testSkill2 > testSkill1) {
            console.log(`${p2.Nome} marcou um ponto!`);
            p2.Pontos += 1;
        }
        console.log("----------------------------------\n");
    }
}

async function displayFinalResults(p1, p2) {
    console.log("🏁 Corrida finalizada! 🏁");
    console.log(`${p1.Nome}: ${p1.Pontos} ponto(s)`);
    console.log(`${p2.Nome}: ${p2.Pontos} ponto(s)`);

    if(p1.Pontos > p2.Pontos) {
        console.log(`\n${p1.Nome} venceu a corrida! Parabéns 🎉`);
    }
    else if(p2.Pontos > p1.Pontos) {
        console.log(`\n${p2.Nome} venceu a corrida! Parabéns 🎉`);
    }
    else {
        console.log("\nEmpate! Nenhum vencedor desta vez.");
    }
}

(async function main() {
    console.log(`🏁 Corrida entre ${player1.Nome} e ${player2.Nome} começando\n`);

    await playRaceEngine(player1, player2)
    await displayFinalResults(player1, player2);
})();