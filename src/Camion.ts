//Camion.ts

import { Vehicule } from "./Vehicule";

export class Camion extends Vehicule {

    constructor (
        marque: string,
        modele : string,
        immatriculation: string,
        couleur: string,
        kilometrage: number,
        prix: number,
        anneeMiseEnCirculation: number

    ) {

        super (
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
    return 'Moto';
}


afficherDetails(): void {
    console.log('Type: ${this.getNomType()}');
    console.log('Marque: ${this.getMarque()}')
    console.log('Modele : $this.getModele()}')
}

}