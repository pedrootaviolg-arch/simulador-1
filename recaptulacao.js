const nome = "Josimary";
let diaUrgente;

for (let dia = 1; dia <= 7; dia++) {
  console.log(`Início do expediente ${dia}`);

  // Verifica se é fim de semana
  if (dia === 6 || dia === 7) {
    diaUrgente = false;
    console.log("Dia de fim de semana");
  } else {
    diaUrgente = true;
    console.log("Dia de meio de semana");
  }

  // Executa rotina do dia útil
  if (diaUrgente) {
    let periodoDoDia = "manhã";

    while (periodoDoDia !== "madrugada") {
      switch (periodoDoDia) {
        case "manhã":
          console.log(`Durante a manhã a ${nome} está feliz`);
          periodoDoDia = "tarde";
          break;

        case "tarde":
          console.log(`Durante a tarde ${nome} está fazendo atividades`);
          periodoDoDia = "noite";
          break;

        case "noite":
          console.log(`Durante a noite ${nome} está no tempo livre`);
          periodoDoDia = "madrugada";
          break;

        default:
          periodoDoDia = "madrugada";
      }
    }
  } else {
    console.log(`${nome} está descansando`);
  }

  console.log(`Final do dia ${dia}`);
  console.log();
}