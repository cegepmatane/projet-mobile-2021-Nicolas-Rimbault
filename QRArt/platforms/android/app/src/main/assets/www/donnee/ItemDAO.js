class ItemDAO {
    constructor(){
        this.listeItem = [
            {nom:"Spaghetti", auteur:"Longues", image:"Semoule", date:"8 - 9 minutes", id:0},
            {nom:"Pappardelle aux oeufs", auteur:"Longues", image:"Oeufs", date:"7 - 8 minutes", id:1},
            {nom:"Penne rigate", auteur:"Courtes", image:"Semoule", date:"11 - 12 minutes", id:2},
            {nom:"Farfalle", auteur:"Courtes", image:"Semoule", date:"11 - 12 minutes", id:3},
            {nom:"Lasagnes aux oeufs", auteur:"Lasagnes", image:"Oeufs", date:"20 minutes", id:4}
        ]
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