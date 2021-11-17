class VueItem {
    constructor() {
        this.html = document.getElementById("html-vue-item").innerHTML;
        this.item = null;
    }

    initialiseItem(item) {
        this.item = item;
    }

    afficher() {
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("item-nom").innerHTML = this.item.nom;
        document.getElementById("item-auteur").innerHTML = this.item.auteur;
        document.getElementById("item-image").innerHTML = this.item.image;
        document.getElementById("item-date").innerHTML = this.item.date;
    }
}