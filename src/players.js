export function getPlayer(index){
    const players = [
        {
            Nome: "Mario",
            Velocidade: 4,
            Manobrabilidade: 3,
            Poder: 3,
            Pontos: 0,
        },
        {
            Nome: "Peach",
            Velocidade: 3,
            Manobrabilidade: 4,
            Poder: 2,
            Pontos: 0,
        },
        {
            Nome: "Yoshi",
            Velocidade: 2,
            Manobrabilidade: 4,
            Poder: 3,
            Pontos: 0,
        },
        {
            Nome: "Bowser",
            Velocidade: 5,
            Manobrabilidade: 2,
            Poder: 5,
            Pontos: 0,
        },
        {
            Nome: "Luigi",
            Velocidade: 3,
            Manobrabilidade: 4,
            Poder: 4,
            Pontos: 0,
        },
        {
            Nome: "Donkey Kong",
            Velocidade: 2,
            Manobrabilidade: 2,
            Poder: 5,
            Pontos: 0,
        }
    ]

    return players[index] || null;
}