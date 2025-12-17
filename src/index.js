// Função que calcula o nível com base nas vitórias
function calcularNivel(vitorias) {
  if (vitorias < 10) return "Ferro";
  if (vitorias <= 20) return "Bronze";
  if (vitorias <= 50) return "Prata";
  if (vitorias <= 80) return "Ouro";
  if (vitorias <= 90) return "Diamante";
  if (vitorias <= 100) return "Lendário";
  return "Imortal";
}

// Função que calcula o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Lista de jogadores
const jogadores = [
  { nome: "Artemis", vitorias: 75, derrotas: 25 },
  { nome: "Link", vitorias: 15, derrotas: 20 },
  { nome: "Ganondorf", vitorias: 105, derrotas: 10 },
  { nome: "Sheik", vitorias: 42, derrotas: 30 }
];

// Processa cada jogador e exibe o resultado
for (const jogador of jogadores) {
  const saldo = calcularSaldo(jogador.vitorias, jogador.derrotas);
  const nivel = calcularNivel(jogador.vitorias);

  console.log(
    `O jogador ${jogador.nome} tem saldo de ${saldo} e está no nível de ${nivel}`
  );
}
