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

}