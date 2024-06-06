"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Azienda = void 0;
class Azienda {
    constructor(nome, settore, descrizione, posizioniAperte) {
        this.nome = nome;
        this.settore = settore;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    offriPosizione(partecipante, posizione) {
        const offerta = `offerta: ${partecipante.nome} ${partecipante.cognome}, ${posizione} presso: ${this.nome}`;
        return offerta;
    }
}
exports.Azienda = Azienda;
