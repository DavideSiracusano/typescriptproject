"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partecipante = void 0;
class Partecipante {
    constructor(nome, cognome, paeseOrigine, livelloIstruzione, competenzeLinguistiche, ambitoFormazioneInteresse) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazioneInteresse = ambitoFormazioneInteresse;
    }
    iscrivitiCorso(corso) {
        corso.aggiungiPartecipante(this);
    }
}
exports.Partecipante = Partecipante;
