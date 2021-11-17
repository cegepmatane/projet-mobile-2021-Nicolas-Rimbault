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

        let listeItem = document.getElementById("liste-item");
        const listeItemHTML = listeItem.innerHTML;
        let listeItemHTMLRemplacement = " ";

        for (var numeroItem in this.listeItemDonnee) {
            let listeObjetItemHTMLRemplacement = listeItemHTML;
            listeObjetItemHTMLRemplacement = listeObjetItemHTMLRemplacement.replace("{Item.id}", this.listeItemDonnee[numeroItem].id);
            listeObjetItemHTMLRemplacement = listeObjetItemHTMLRemplacement.replace("{Item.nom}", this.listeItemDonnee[numeroItem].nom);
            listeItemHTMLRemplacement += listeObjetItemHTMLRemplacement;
        }

        listeItem.innerHTML = listeItemHTMLRemplacement;
    }
}