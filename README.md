# 🕹️ Calculadora de Partidas Rankeadas

Projeto desenvolvido como parte do desafio da DIO, com o objetivo de praticar lógica de programação utilizando variáveis, operadores, estruturas de decisão, laços de repetição e funções em JavaScript.

## 🚀 Tecnologias
- JavaScript

## 🎯 Objetivo
Criar uma função que recebe a quantidade de vitórias e derrotas de um jogador, calcula o saldo de partidas rankeadas e determina o nível do jogador com base nas vitórias.

### Classificações de Nível
- Ferro: vitórias < 10  
- Bronze: 11 – 20  
- Prata: 21 – 50  
- Ouro: 51 – 80  
- Diamante: 81 – 90  
- Lendário: 91 – 100  
- Imortal: vitórias ≥ 101  

## 🖥️ Execução
Para rodar o projeto, abra o terminal na pasta do projeto e execute:

```bash
node index.js
```

## 📌 Saída esperada

```
O jogador Artemis tem saldo de 50 e está no nível de Ouro
O jogador Link tem saldo de -5 e está no nível de Bronze
O jogador Ganondorf tem saldo de 95 e está no nível de Imortal
O jogador Sheik tem saldo de 12 e está no nível de Prata
```

## 💡 Como adicionar novos jogadores

Basta incluir um novo objeto no array `jogadores` dentro do arquivo `index.js`:

```js
{ nome: "NovoJogador", vitorias: 60, derrotas: 10 }
```