class vueCreation{
    constructor(){
      this.html = document.getElementById("html-vue-creation").innerHTML;
      // import QrScanner from '../lib/qr-scanner.min.js';
      
      this.htmlMenu = document.getElementById("html-vue-menu").innerHTML; //implémenter le menu dans la vue
      this.html = this.html.replace("{menu}", this.htmlMenu);
    }

    afficher() {
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        var btnCreation  = document.getElementById("bouton-valider");
        btnCreation.addEventListener("click", recupererDonner);
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
function recupererDonner(){
  // var httpc = new XMLHttpRequest(); // simplified for clarity
  // var url = "http://51.161.32.22/DevoirMobile/traitement-donner-qrart.php";
  // httpc.open("POST", url, true); // sending as POST

  // httpc.onreadystatechange = function() { //Call a function when the state changes.
  //     if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
  //         alert(httpc.responseText); // some processing here, or whatever you want to do with the response
  //         console.log("Reponce" + httpc.responseText);
  //     }
  // };
  // console.log("Test ajout");
  // httpc.send("nom=Test&auteur=Romain&image=wow.png&date=2021-05-21");
  const options = {
    method: 'post',
    data: { nom: "Test", auteur: 'Romain',image:"wow.ngn", date:"2021-05-21" }
  };
  
  cordova.plugin.http.sendRequest('http://51.161.32.22/DevoirMobile/traitement-donner-qrart.php', options, function(response) {
    // prints 200
    console.log(response.status);
  }, function(response) {
    // prints 403
    console.log(response.status);
  
    //prints Permission denied
    console.log(response.error);
  });
}