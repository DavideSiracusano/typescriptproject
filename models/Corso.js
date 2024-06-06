"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corso = void 0;
class Corso {
    constructor(titolo, descrizione, settoreProfessionale, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.iscritti = [];
    }
    aggiungiPartecipante(partecipante) {
        this.iscritti.push(partecipante);
    }
}
exports.Corso = Corso;
