let currentScreen = 1;

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

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
    console.log("Device Ready");
      var touchArea = document.getElementsByTagName("body")[0];
      var myRegion = new ZingTouch.Region(touchArea,undefined,false);

      myRegion.bind(touchArea, 'swipe', function(e){
        if(90 < e.detail.data[0].currentDirection && e.detail.data[0].currentDirection < 270){
          console.log("Droite SWIPE");
          allerDroite();
        } else{
          console.log("Gauche SWIPE");
          allerGauche();
        }
      });
    }
    function allerDroite(){
      if(currentScreen == 1){
        window.location.hash = '#parametre';
        currentScreen =2;
      }else if (currentScreen == 0){
        window.location.hash = '#principale';
        currentScreen =1;
      }
    }
    function allerGauche(){
      if(currentScreen == 1){
        window.location.hash = '#liste-item';
        currentScreen =0;
      }else if (currentScreen == 2){
        window.location.hash = '#principale';
        currentScreen =1;
      }
    }
  }

  naviguer() {
    let hash = window.location.hash;
    if (!hash || hash.match(/^#principale/)) {
      currentScreen = 1;
      document.body.style.backgroundColor= "transparent";
      this.vuePrincipale.afficher();
    } else if (hash.match(/^#liste-item/)) {
      currentScreen = 0;
      document.body.style.backgroundColor = "black";
      this.vueListeItem.initialiserListeItem(this.itemDAO.lister());
      this.vueListeItem.afficher();
    } else if (hash.match(/^#parametre/)) {
      currentScreen = 2;
      document.body.style.backgroundColor = "black";
      this.vueParametre.afficher();
    } else if (hash.match(/^#reussite/)) {
      this.vueReussite.afficher();
    } else if (hash.match(/^#inscription/)) {
      this.vueInscription.afficher();
    } else if (hash.match(/^#connexion/)) {
      this.vueConnexion.afficher();
    }else if (hash.match(/^#creation/)) {
      document.body.style.backgroundColor = "black";
      this.vueCreation.afficher();
    }else{
      let navigation = hash.match(/^#item\/([0-9]+)/);
      let idItem = navigation[1];

      this.vueItem.initialiserItem(this.itemDAO.lister()[idItem]);
      this.vueItem.afficher();

    }
  }
  actionAjouterItem(item){
    this.ItemDAO.ajouter(item);
    this.window.location.hash = "#";
  }
}

new Application(window, new VuePrincipale(), new ItemDAO(), new VueListeItem(), new vueParametre(), new VueItem(), new vueConnexion(), new vueInscription(), new vueCreation(), new vueReussite());