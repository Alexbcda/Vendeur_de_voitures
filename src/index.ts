import { Voiture } from "./Voiture";
import { Garage } from './Garage';
import { Moto } from './Moto';
import {Camion} from './Camion';


// Créez une instance de Garage avec des voitures
const monGarage = new Garage('Mon Garage', [
  new Voiture('Toyota', 'Camry', 'ABC123', 'Noir', 50000, 5000, 2018),
  new Voiture('Honda', 'Civic', 'XYZ789', 'Rouge', 40000, 12000, 2017),
  new Voiture('Ford', 'Focus', 'DEF456', 'Noir', 60000, 18000, 2019),
]);

// Ajoutez 5 motos à votre garage
const motos = [
  new Moto('Harley', 'Fat BOB', 'immatfatbob', 'Noir', 2500, 16000, 2023),
  new Moto('Yamaha', 'XJR', 'imatxjr', 'Bleu', 4000, 2000, 2023),
  new Moto('Ducati', 'Monster', 'immatmonster', 'Rouge', 6000, 7500, 2022),
  new Moto('Suzuki', 'svt', 'immatsvt', 'Jaune', 8000, 7350, 2020),
  new Moto('Gucci', 'gucimoto', 'immatgucci', 'Rouge', 3500, 12000, 2021)
];

// Instanciez 5 camions
const camions = [
  new Camion('Volvo', 'XC', 'IMMAT1', 'Blanc', 5000, 15000, 2019),
  new Camion('Ford', 'F-150', 'IMMAT2', 'Noir', 2000, 20000, 2020),
  new Camion('Chevrolet', 'Silverado', 'IMMAT3', 'Bleu', 5000, 22000, 2018),
  new Camion('Toyota', 'Tundra', 'IMMAT4', 'Gris', 28000, 17000, 2021),
  new Camion('Dodge', 'Ram', 'IMMAT5', 'Rouge', 40000, 25000, 2017)
];

// Ajoutez les camions au garage, en excluant ceux avec plus de 30 000 km
for (const camion of camions) {
  if (camion.getKilometrage() <= 30000) {
    monGarage.ajouterVehicules(camions); 
  }
}

// Ajoutez les motos au garage
monGarage.ajouterVehicules(motos);

// Obtenez la voiture la moins chère du garage en utilisant une boucle
let voitureMoinsChere: Voiture | null = null;

for (const vehicule of monGarage['_vehicules']) {
  if (vehicule instanceof Voiture) {
    if (voitureMoinsChere === null || vehicule.getPrix() < voitureMoinsChere.getPrix()) {
      voitureMoinsChere = vehicule;
    }
  }
}

if (voitureMoinsChere) {
  console.log('La voiture la moins chère est :', voitureMoinsChere.getMarque(), voitureMoinsChere.getModele());
} else {
  console.log('Aucune voiture dans le garage.');
}

// Obtenez toutes les voitures de couleur noire
const voituresNoires = monGarage.getVehiculesParCouleur('Noir');
for (const vehicule of voituresNoires) {
  if (vehicule instanceof Voiture) {
    console.log(`Voiture ${vehicule.getMarque()} ${vehicule.getModele()} de couleur ${vehicule.getCouleur()}`);
  }
}

// Obtenez la moto la moins chère du garage en utilisant la méthode de l'instance
const motoMoinsChere = monGarage.getVehiculeMoinsCher();
if (motoMoinsChere) {
  console.log('La moto la moins chère est :', motoMoinsChere.getMarque(), motoMoinsChere.getModele());
} else {
  console.log('Aucune moto dans le garage.');
}

// Obtenez toutes les motos de couleur rouge
const motosRouges = monGarage.getVehiculesParCouleur('Rouge');
for (const vehicule of motosRouges) {
  if (vehicule instanceof Moto) {
    console.log(`Moto ${vehicule.getMarque()} ${vehicule.getModele()} de couleur ${vehicule.getCouleur()}`);
  }
// Obtenez le camion en fonction de son kilometrage

const kilometrageRecherche = 30000; // Par exemple, vous pouvez rechercher les camions avec plus de 30 000 km

const camionsSuperieurs = monGarage.rechercherKilometrageCamionSuperieurA(kilometrageRecherche);

if (camionsSuperieurs.length > 0) {
  console.log(`Camions avec plus de ${kilometrageRecherche} km :`);
  for (const camion of camionsSuperieurs) {
    console.log(`Camion ${camion.getMarque()} ${camion.getModele()} avec ${camion.getKilometrage()} km`);
  }
} else {
  console.log(`Aucun camion avec plus de ${kilometrageRecherche} km dans le garage.`);
}


}
