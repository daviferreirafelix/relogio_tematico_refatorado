let relogio = document.querySelector("#relogio");
let dia = document.querySelector("#dia");
let saudacao = document.querySelector("#saudacao");
let tema = document.querySelector("#tema");

const semana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feria",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

setInterval(function diaSemana() {
  const data = new Date();
  const hora = data.getHours();

  relogio.textContent = data.toLocaleTimeString("pt-BR");
  dia.textContent = `Hoje é dia ${data.toLocaleDateString("pt-BR")}, ${semana[data.getDay()]}`;

  if (hora >= 00 && hora <= 5) {
    saudacao.textContent = "Boa madrugada!";
    tema.className = 'madrugada';
  } else if (hora >= 5 && hora <= 12) {
    saudacao.textContent = "Bom dia!";
    tema.className = 'manha';
  } else if (hora >= 12 && hora <= 18) {
    saudacao.textContent = "Boa tarde!";
    tema.className = 'tarde'
  } else if (hora >= 18) {
    saudacao.textContent = "Boa noite!";
    tema.className = 'madrugada';
  }
}, 1000);
