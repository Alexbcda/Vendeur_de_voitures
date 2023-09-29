// Garage.ts
import { Vehicule } from './Vehicule';
import { Camion } from './Camion'; // Assurez-vous d'importer la classe Camion si nécessaire

export class Garage {
  private _nomGarage: string;
  private _vehicules: Vehicule[] = [];

  constructor(nomGarage: string, vehicules: Vehicule[]) {
    this._nomGarage = nomGarage;
    this._vehicules = vehicules;
  }

  getVehiculeMoinsCher(): Vehicule | null {
    if (this._vehicules.length === 0) {
      return null;
    }

    let moinsCher = this._vehicules[0];

    for (const vehicule of this._vehicules) {
      if (vehicule.getPrix() < moinsCher.getPrix()) {
        moinsCher = vehicule;
      }
    }

    return moinsCher;
  }

  getVehiculesParCouleur(couleurRecherchee: string): Vehicule[] {
    const vehiculesParCouleur: Vehicule[] = [];

    for (const vehicule of this._vehicules) {
      if (vehicule.getCouleur().toLowerCase() === couleurRecherchee.toLowerCase()) {
        vehiculesParCouleur.push(vehicule);
      }
    }

    return vehiculesParCouleur;
  }

  ajouterVehicules(vehicules: Vehicule[]): void {
    this._vehicules.push(...vehicules);
  }

  rechercherKilometrageCamionSuperieurA(kilometrageRecherche: number): Camion[] {
    const camionsSuperieurs: Camion[] = [];

    for (const vehicule of this._vehicules) {
      if (vehicule instanceof Camion && vehicule.getKilometrage() > kilometrageRecherche) {
        camionsSuperieurs.push(vehicule);
      }
    }

    return camionsSuperieurs;
  }
}
