// Garage.ts
import { Vehicule } from './Vehicule';

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

  // Ajoutez cette méthode pour ajouter des véhicules au garage
  ajouterVehicules(vehicules: Vehicule[]): void {
    this._vehicules.push(...vehicules);
  }
}
