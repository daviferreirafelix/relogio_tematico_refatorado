setInterval(function diaSemana() {
  let data = new Date();
  let hora = data.getHours();

  let relogio = document.querySelector("#relogio");
  relogio.textContent = data.toLocaleTimeString("pt-BR");

  const semana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feria",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  document.querySelector("#dia").textContent = `Hoje é dia ${data.toLocaleDateString("pt-BR")}, ${semana[data.getDay()]}`;

  let saudacao = document.querySelector("#saudacao");
  let tema = document.querySelector("#tema");

  if (hora >= 00 && hora <= 5) {
    saudacao.textContent = "Boa madrugada!";
    tema.removeAttribute("class");
    tema.classList.add("madrugada");
  } else if (hora >= 5 && hora <= 12) {
    saudacao.textContent = "Bom dia!";
    tema.removeAttribute("class");
    tema.classList.add("manha");
  } else if (hora >= 12 && hora <= 18) {
    saudacao.textContent = "Boa tarde!";
    tema.removeAttribute("class");
    tema.classList.add("tarde");
  } else if (hora >= 18) {
    saudacao.textContent = "Boa noite!";
    tema.removeAttribute("class");
    tema.classList.add("madrugada");
  }
}, 1000);
