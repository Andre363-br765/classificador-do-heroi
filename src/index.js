// Retorna o nível do herói baseado no XP
function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  if (xp <= 2000) return "Bronze";
  if (xp <= 5000) return "Prata";
  if (xp <= 7000) return "Ouro";
  if (xp <= 8000) return "Platina";
  if (xp <= 9000) return "Ascendente";
  if (xp <= 10000) return "Imortal";
  return "Radiante";
}

// Heróis e XP
const herois = [
  { nome: "Zelda", xp: 7200 },
  { nome: "Link", xp: 950 },
  { nome: "Ganondorf", xp: 15000 }
];

// Exibe nome e nível de cada herói
for (const heroi of herois) {
  console.log(
    `O Herói de nome ${heroi.nome} está no nível de ${classificarNivel(heroi.xp)}`
  );
}
