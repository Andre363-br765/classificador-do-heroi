# 🦸 Desafio Classificador de Nível de Herói

Projeto desenvolvido como parte do desafio da DIO, com o objetivo de praticar lógica de programação utilizando variáveis, operadores, estruturas de decisão e laços de repetição.

## 🚀 Tecnologias
- JavaScript

## 🎯 Objetivo
Classificar o nível de um herói com base na sua quantidade de experiência (XP).

### Classificações
- Ferro: XP < 1.000  
- Bronze: 1.001 – 2.000  
- Prata: 2.001 – 5.000  
- Ouro: 5.001 – 7.000  
- Platina: 7.001 – 8.000  
- Ascendente: 8.001 – 9.000  
- Imortal: 9.001 – 10.000  
- Radiante: XP ≥ 10.001  

## 🖥️ Execução
Para rodar o projeto, abra o terminal na pasta do projeto e execute:

```bash
node src/index.js
```

## 📌 Saída esperada

```
O Herói de nome Zelda está no nível de Platina
O Herói de nome Link está no nível de Ferro
O Herói de nome Ganondorf está no nível de Radiante
```

## 💡 Como adicionar novos heróis

Basta incluir um novo objeto dentro do array `herois` em `src/index.js`:

```js
{ nome: "NovoHerói", xp: 5000 }
```