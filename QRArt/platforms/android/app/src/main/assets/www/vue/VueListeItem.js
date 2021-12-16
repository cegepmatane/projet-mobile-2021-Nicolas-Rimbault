class VueListeItem {
    constructor(){
        this.html = document.getElementById("html-vue-liste-item").innerHTML;
        this.listeItemDonnee = null;

        this.htmlMenu = document.getElementById("html-vue-menu").innerHTML; //implémenter le menu dans la vue
    this.html = this.html.replace("{menu}", this.htmlMenu);
    }

    initialiserListeItem(listeItemDonnee) {
        this.listeItemDonnee = listeItemDonnee;
    }

    afficher() {
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        recupererListe();

       
    }


}
function recupererListe(){

    const options = {};
  
    cordova.plugin.http.sendRequest('http://51.161.32.22/DevoirMobile/traitement-recuperer-listqr.php', options, function(response) {
      // prints 200
      console.log(response.status);
      parser = new DOMParser();
      let listeItem = parser.parseFromString(response.data,"text/xml");
      liste = listeItem;
    }, function(response) {
      // prints 403
      console.log(response.status);
      //prints Permission denied
      console.log(response.error);
    });



    // if(localStorage['item']) {
    //     this.listeItem = JSON.parse(localStorage['item']);
    // }
    // for(let test in liste) {
    //     console.log(test.documentElement.textContent);
    // }
    let listeItem = [];
    setTimeout(function(){
        //console.log(liste.getElementsByTagName("nomCreateur")[0].childNodes[0].nodeValue);
        for (let x = 0; x < liste.getElementsByTagName("nomCreateur").length; x++) {
            //console.log(liste.getElementsByTagName("nomCreateur")[x].childNodes[0].nodeValue);

            let item = new Item(liste.getElementsByTagName("nomCreateur")[x].childNodes[0].nodeValue,
                                liste.getElementsByTagName("nomDuQRArt")[x].childNodes[0].nodeValue,
                                liste.getElementsByTagName("image")[x].childNodes[0].nodeValue,
                                liste.getElementsByTagName("date")[x].childNodes[0].nodeValue,
                                liste.getElementsByTagName("id")[x].childNodes[0].nodeValue);
            listeItem.push(item);
        }
        afficherListe(listeItem);
        return;
    }, 500);
}
function afficherListe(listeItemValeur) {
    let listeItem = document.getElementById("liste-item");
    const listeItemHTML = listeItem.innerHTML;
    let listeItemHTMLRemplacement = " ";

    for (var numeroItem in listeItemValeur) {
        let listeObjetItemHTMLRemplacement = listeItemHTML;
        // console.log(listeItemValeur[numeroItem].nom);
        listeObjetItemHTMLRemplacement = listeObjetItemHTMLRemplacement.replace("{Item.id}", listeItemValeur[numeroItem].id);
        listeObjetItemHTMLRemplacement = listeObjetItemHTMLRemplacement.replace("{Item.nom}", listeItemValeur[numeroItem].nom);
        listeItemHTMLRemplacement += listeObjetItemHTMLRemplacement;
    }

    listeItem.innerHTML = listeItemHTMLRemplacement;
}