class vueCreation{
    constructor(){
      this.html = document.getElementById("html-vue-creation").innerHTML;
      // import QrScanner from '../lib/qr-scanner.min.js';
      
      this.htmlMenu = document.getElementById("html-vue-menu").innerHTML; //implémenter le menu dans la vue
      this.html = this.html.replace("{menu}", this.htmlMenu);
    }

    afficher() {
        document.getElementsByTagName("body")[0].innerHTML = this.html;
    }

    enregistrer(){
      evenement.preventDefault();

      let nom = document.getElementById("nom-creation").value;
      let auteur = "admin";
      let image = document.getElementById("image-creation").value;
      
      let date = Date.now();

      this.actionAjouterItem(new Item(nom, auteur, image, date, null));
    }
}