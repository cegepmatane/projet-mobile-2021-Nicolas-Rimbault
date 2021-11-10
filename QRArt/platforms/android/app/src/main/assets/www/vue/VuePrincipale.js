class VuePrincipale{
  constructor(){
    this.html = document.getElementById("html-vue-principale").innerHTML;
  }

  afficher(){
    console.log("Test Vue Principale");
    document.getElementsByTagName("body")[0].innerHTML = this.html;
  }
}
