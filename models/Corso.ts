import { IPartecipante } from "../interfaces/IPartecipante";
import { ICorso } from "../interfaces/ICorso";

export class Corso implements ICorso {
  titolo: string;
  descrizione: string;
  settoreProfessionale: string;
  durata: number;
  iscritti: IPartecipante[];
  constructor(
    titolo: string,
    descrizione: string,
    settoreProfessionale: string,
    durata: number
  ) {
    this.titolo = titolo;
    this.descrizione = descrizione;
    this.settoreProfessionale = settoreProfessionale;
    this.durata = durata;
    this.iscritti = [];
  }

  aggiungiPartecipante(partecipante: IPartecipante): void {
    this.iscritti.push(partecipante);
  }
}
