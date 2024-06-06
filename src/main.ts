import { Corso } from "../models/Corso";
import { Azienda } from "../models/Azienda";
import { Partecipante } from "../models/Partecipante";

const partecipante1 = new Partecipante(
  "Luca",
  "Rossi",
  "Albania",
  "Diploma",
  "Italiano, Inglese, Albanese",
  "Meccanica"
);

const partecipante2 = new Partecipante(
  "Mario",
  "Verdi",
  "Albania",
  "Diploma",
  "Italiano, Inglese, Tedesco",
  "Elettronica"
);

const corsoMeccanica = new Corso(
  "Meccanica",
  "corso intermedio di meccanica",
  "industria",
  6
);

const corsoElettronica = new Corso(
  "Elettronica",
  "corso intermedio di elettronica",
  "industria",
  6
);

partecipante1.iscrivitiCorso(corsoMeccanica);

partecipante2.iscrivitiCorso(corsoElettronica);

const azienda1 = new Azienda("Officina", "Meccanica", "Officina auto", [
  "meccanico",
  "carrozziere",
  "elettricista",
]);

console.log("dettagli partecipanti");
console.log(partecipante1);
console.log(partecipante2);

console.log("dettagli corsi");
console.log(corsoMeccanica);
console.log(corsoElettronica);

console.log("dettagli posizioni:");
console.log(azienda1.offriPosizione(partecipante1, "meccanico"));
console.log(azienda1.offriPosizione(partecipante2, "elettricista"));
