function creategame(player1, hour, player2) {
  return `
  <li>
      <img src="./assets/icon-${player1}.svg" alt="bandeira ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="bandeira ${player2}">
  </li>
  `
}
let delay=0;

function createcard(date, day, games) {
  delay=delay + 1;
  return `
  <div class="card" style="animation-delay:${delay}s">
        <h2>${date}<span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML = createcard(
  "22/11",
  "terça",
  creategame("argentina", "07:00", "arabia_saudita") +
    creategame("franca", "16:00", "australia")) +
    createcard("24/11","Quinta",creategame("brasil", "16:00", "serbia") + creategame("portugal", "13:00", "gana") )+
  createcard(
    "26/11",
    "sábado",
    creategame("argentina", "16:00", "mexico") +
      creategame("franca", "13:00", "dinamarca"))+
    createcard(
      "28/11",
      "Segunda",
      creategame("brasil", "13:00", "switzerland") +
        creategame("portugal", "16:00", "uruguai")) +
createcard(
  "30/11",
  "quarta",
  creategame("polonia", "16:00", "argentina") +
    creategame("tunisia", "12:00", "franca")) +
createcard(
      "02/12",
      "Sexta",
      creategame("camaroes", "16:00", "brasil") + creategame("coreia_do_sul", "12:00", "portugal"))

