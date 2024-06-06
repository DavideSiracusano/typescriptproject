import { IPartecipante } from "../interfaces/IPartecipante";
import { ICorso } from "../interfaces/ICorso";

export class Partecipante implements IPartecipante {
  nome: string;
  cognome: string;
  paeseOrigine: string;
  livelloIstruzione: string;
  competenzeLinguistiche: string;
  ambitoFormazioneInteresse: string;

  constructor(
    nome: string,
    cognome: string,
    paeseOrigine: string,
    livelloIstruzione: string,
    competenzeLinguistiche: string,
    ambitoFormazioneInteresse: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.paeseOrigine = paeseOrigine;
    this.livelloIstruzione = livelloIstruzione;
    this.competenzeLinguistiche = competenzeLinguistiche;
    this.ambitoFormazioneInteresse = ambitoFormazioneInteresse;
  }

  iscrivitiCorso(corso: ICorso): void {
    corso.aggiungiPartecipante(this);
  }
}
