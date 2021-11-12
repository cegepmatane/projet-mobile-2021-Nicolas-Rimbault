class ItemDAO {
    constructor(){
        this.listeItem = [];
    }

    lister(){
        if(localStorage['item']) {
            this.listeItem = JSON.parse(localStorage['item']);
        }

        for(let position in this.listeItem) {
            let item = new Item(this.listeItem[position].nom,
                                this.listeItem[position].auteur,
                                this.listeItem[position].image,
                                this.listeItem[position].date,
                                this.listeItem[position].id);
            this.listeItem[item.id] = item;
        }

        return this.listeItem;
    }
}