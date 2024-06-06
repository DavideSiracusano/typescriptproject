"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Corso_1 = require("../models/Corso");
const Azienda_1 = require("../models/Azienda");
const Partecipante_1 = require("../models/Partecipante");
const partecipante1 = new Partecipante_1.Partecipante("Luca", "Rossi", "Albania", "Diploma", "Italiano, Inglese, Albanese", "Meccanica");
const partecipante2 = new Partecipante_1.Partecipante("Mario", "Verdi", "Albania", "Diploma", "Italiano, Inglese, Tedesco", "Elettronica");
const corsoMeccanica = new Corso_1.Corso("Meccanica", "corso intermedio di meccanica", "industria", 6);
const corsoElettronica = new Corso_1.Corso("Elettronica", "corso intermedio di elettronica", "industria", 6);
partecipante1.iscrivitiCorso(corsoMeccanica);
partecipante2.iscrivitiCorso(corsoElettronica);
const azienda1 = new Azienda_1.Azienda("Officina", "Meccanica", "Officina auto", [
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
