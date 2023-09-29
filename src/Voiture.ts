// Voiture.ts
import { Vehicule } from './Vehicule';

export class Voiture extends Vehicule {
  constructor(
    marque: string,
    modele: string,
    immatriculation: string,
    couleur: string,
    kilometrage: number,
    prix: number,
    anneeMiseEnCirculation: number
  ) {
    super(
      marque,
      modele,
      immatriculation,
      couleur,
      kilometrage,
      prix,
      anneeMiseEnCirculation
    );
  }

  getNomType(): string {
    return 'Voiture';
  }

  afficherDetails(): void {
    console.log(`Type: ${this.getNomType()}`);
    console.log(`Marque: ${this.getMarque()}`);
    console.log(`Modèle: ${this.getModele()}`);
    // Vous pouvez appeler d'autres méthodes héritées ici
  }
}