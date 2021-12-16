let liste = "";
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

        const options = {

        };
      
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

                let item = new Item(liste.getElementsByTagName("nomDuQRArt")[x].childNodes[0].nodeValue,
                                    liste.getElementsByTagName("nomCreateur")[x].childNodes[0].nodeValue,
                                    liste.getElementsByTagName("image")[x].childNodes[0].nodeValue,
                                    liste.getElementsByTagName("date")[x].childNodes[0].nodeValue,
                                    liste.getElementsByTagName("id")[x].childNodes[0].nodeValue);
                listeItem.push(item);
            }
    
            return listeItem;
        }, 2000); 
    }

    ajouter(item){
        if(this.listeItem.length > 0)
        item.id = this.listeItem[this.listeItem.length-1].id + 1;
    else
    item.id = 0;

    this.listeItem[item.id] = item;

    localStorage['item'] = JSON.stringify(this.listeItem);
    console.log("JSON.stringify(this.listeItem) : " + JSON.stringify(this.listeItem));
    }
}