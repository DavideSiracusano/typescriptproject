import { IAzienda } from "../interfaces/IAzienda";
import { IPartecipante } from "../interfaces/IPartecipante";

export class Azienda implements IAzienda {
  nome: string;
  settore: string;
  descrizione: string;
  posizioniAperte: string[];

  constructor(
    nome: string,
    settore: string,
    descrizione: string,
    posizioniAperte: string[]
  ) {
    this.nome = nome;
    this.settore = settore;
    this.descrizione = descrizione;
    this.posizioniAperte = posizioniAperte;
  }

  offriPosizione(partecipante: IPartecipante, posizione: string) {
    const offerta = `offerta: ${partecipante.nome} ${partecipante.cognome}, ${posizione} presso: ${this.nome}`;
    return offerta;
  }
}
