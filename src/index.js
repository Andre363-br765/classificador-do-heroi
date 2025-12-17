class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando heróis
const herois = [
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Arthur", 35, "guerreiro"),
  new Heroi("Lee", 40, "monge"),
  new Heroi("Hanzo", 28, "ninja")
];

// Executando ataques
for (const heroi of herois) {
  heroi.atacar();
}
