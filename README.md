# 🏎️ Simulador de Corridas do Mario Kart com Node.js

Este projeto foi desenvolvido como parte de um desafio de um desafio de projeto do curso **Mobile Developer** da DIO.  
O objetivo era criar um simulador simples de corrida inspirado no **Mario Kart**, utilizando Node.js para aplicar conceitos básicos de lógica de programação.

---

## 🚀 Funcionalidades

- Escolha de personagens entre 6 opções: Mario, Peach, Yoshi, Bowser, Luigi e Donkey Kong  
- Simulação de 5 rodadas com diferentes tipos de blocos de corrida:  
  - **Reta** (testa Velocidade)  
  - **Curva** (testa Manobrabilidade)  
  - **Confronto** (testa Poder e permite perder pontos)  
- Sistema de pontos acumulados durante a corrida  
- Exibição do vencedor ao final da corrida (ou empate)  

---

## 🛠️ Tecnologias usadas

- [Node.js](https://nodejs.org/)  
- [prompt-sync](https://www.npmjs.com/package/prompt-sync)  

---

## 📂 Como executar

1. Clone o repositório:

```bash
git clone <URL_DO_SEU_REPO>
cd dp-simulador-mario-kart
```

2. Instale as dependências:
```bash
npm install prompt-sync
```

3. Execute o simulador:
```bash
node src/index.js
```

Se o projeto estiver configurado como ES module ("type": "module" no package.json), mantenha seus arquivos com import/export e rode:
3. Execute o simulador:
```bash
node src/index.js
```

## 👾 Como funciona

1. Jogadores escolhem personagens diferentes.
2. Em cada rodada, um bloco é sorteado:
   - **Reta** (Velocidade)
   - **Curva** (Manobrabilidade)
   - **Confronto** (Poder)
3. Cada jogador rola um dado e soma ao atributo relevante.
4. Quem tiver maior resultado ganha 1 ponto; em **Confronto**, o perdedor perde 1 ponto.
5. Após 5 rodadas, exibe-se o vencedor (ou empate).

## ✨ Créditos
Projeto desenvolvido por Luciano como desafio do curso Mobile Developer - DIO.
