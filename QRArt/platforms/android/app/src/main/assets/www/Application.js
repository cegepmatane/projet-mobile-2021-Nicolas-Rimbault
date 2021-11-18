class Application {
  constructor(window, vuePrincipale, itemDAO, vueListeItem, vueParametre, vueItem, vueConnexion, vueInscription, vueCreation, vueReussite) {

    this.window = window;
    this.itemDAO = itemDAO;
    this.vueListeItem = vueListeItem;
    this.vuePrincipale = vuePrincipale;
    this.vueItem = vueItem;
    this.vueParametre = vueParametre;
    this.vueConnexion = vueConnexion;
    this.vueInscription = vueInscription;
    this.vueCreation = vueCreation;
    this.vueReussite = vueReussite;

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
    } else if (hash.match(/^#reussite/)) {
      this.vueReussite.afficher();
    } else if (hash.match(/^#inscription/)) {
      this.vueInscription.afficher();
    } else if (hash.match(/^#connexion/)) {
      this.vueConnexion.afficher();
    }else if (hash.match(/^#creation/)) {
      this.vueCreation.afficher();
    } else {
      let navigation = hash.match(/^#item\/([0-9]+)/);
      let idItem = navigation[1];

      this.vueItem.initialiserItem(this.itemDAO.lister()[idItem]);
      this.vueItem.afficher();
    }
  }
}

new Application(window, new VuePrincipale(), new ItemDAO(), new VueListeItem(), new vueParametre(), new VueItem(), new vueConnexion(), new vueInscription(), new vueCreation(), new vueReussite());