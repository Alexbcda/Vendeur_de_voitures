// Vehicule.ts
export abstract class Vehicule {
    private _marque: string;
    private _modele: string;
    private _immatriculation: string;
    private _couleur: string;
    private _kilometrage: number;
    private _prix: number;
    private _anneeMiseEnCirculation: number;
  
    constructor(
      marque: string,
      modele: string,
      immatriculation: string,
      couleur: string,
      kilometrage: number,
      prix: number,
      anneeMiseEnCirculation: number
    ) {
      this._marque = marque;
      this._modele = modele;
      this._immatriculation = immatriculation;
      this._couleur = couleur;
      this._kilometrage = kilometrage;
      this._prix = prix;
      this._anneeMiseEnCirculation = anneeMiseEnCirculation;
    }
  
    abstract getNomType(): string;
    abstract afficherDetails(): void;
  
    getMarque(): string {
      return this._marque;
    }
  
    getModele(): string {
      return this._modele;
    }
  
    getImmatriculation(): string {
      return this._immatriculation;
    }
  
    getCouleur(): string {
      return this._couleur;
    }
  
    getKilometrage(): number {
      return this._kilometrage;
    }
  
    getPrix(): number {
      return this._prix;
    }
  
    getAnneeMiseEnCirculation(): number {
      return this._anneeMiseEnCirculation;
    }
  
    setMarque(value: string) {
      this._marque = value;
    }
  
    setModele(value: string) {
      this._modele = value;
    }
  
    setImmatriculation(value: string) {
      this._immatriculation = value;
    }
  
    setCouleur(value: string) {
      this._couleur = value;
    }
  
    setKilometrage(value: number) {
      this._kilometrage = value;
    }
  
    setPrix(value: number) {
      this._prix = value;
    }
  
    setAnneeMiseEnCirculation(value: number) {
      this._anneeMiseEnCirculation = value;
    }
  }