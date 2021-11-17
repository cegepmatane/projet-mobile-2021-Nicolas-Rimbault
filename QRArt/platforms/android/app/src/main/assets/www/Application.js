﻿class Application {
  constructor(window, vuePrincipale, itemDAO, vueListeItem, vueParametre) {

    this.window = window;
    this.itemDAO = itemDAO;
    this.vueListeItem = vueListeItem;
    this.vueParametre = vueParametre;
    // this.listeJeu = [{titre:"Metal Gear Solid", description:"Jeu d'infiltration", studio:"Konami",prix:"59",note:"10", id:0},
    //                     {titre:"Silent Hill", description:"Jeu Survival Horror", studio:"Konami",prix:"59",note:"8", id:1},
    //                     {titre:"Life Is Strage", description:"Jeu d'aventure graphique", studio:"Dontnod",prix:"59",note:"9", id:2}]
    // this.listeJeu = [new Jeu("Metal Gear Solid", "Jeu d'infiltration", "Konami","59","10", 0),new Jeu("Silent Hill", "Jeu Survival Horror", "Konami","59","8", 1),new Jeu("Life Is Strage", "Jeu d'aventure graphique", "Dontnod","59","9", 2)];

    this.vuePrincipale = vuePrincipale;
    this.vueListeItem = vueListeItem;

    console.log("Chargement");

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () => this.naviguer());

    this.naviguer();
  }

  naviguer() {
    let hash = window.location.hash;
    if (!hash) {
      this.vuePrincipale.afficher();
    } else if (hash.match(/^#liste-item/)) {
      this.vueListeItem.afficher();
    } else if (hash.match(/^#parametre/)) {
      this.vueParametre.afficher();
    }
  }
}

new Application(window, new VuePrincipale(), new ItemDAO(), new VueListeItem(), new vueParametre());