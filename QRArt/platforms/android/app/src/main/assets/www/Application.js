class Application {
  constructor(window, vuePrincipale, itemDAO, vueListeItem) {

    this.window = window;
    this.itemDAO = itemDAO;
    this.vueListeItem = vueListeItem;
    this.vuePrincipale = vuePrincipale;

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
    }
  }
}

new Application(window, new VuePrincipale(), new ItemDAO(), new VueListeItem());