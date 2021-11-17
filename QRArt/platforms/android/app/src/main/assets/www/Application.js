class Application {
  constructor(window, vuePrincipale, itemDAO, vueListeItem, vueItem) {

    this.window = window;
    this.itemDAO = itemDAO;
    this.vueListeItem = vueListeItem;
    this.vuePrincipale = vuePrincipale;
    this.vueItem = vueItem;

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
      this.vueListeItem.initialiserListeItem(this.itemDAO.lister());
      this.vueListeItem.afficher();
    } else if (hash.match(/^#parametre/)) {
      this.vueParametre.afficher();
    } else {
      let navigation = hash.match(/^#item\/([0-9]+)/);
      let idItem = navigation[1];

      this.vueItem.initialiserItem(this.itemDAO.lister()[idItem]);
      this.vueItem.afficher();
    }
  }
}

new Application(window, new VuePrincipale(), new ItemDAO(), new VueListeItem(), new VueItem());