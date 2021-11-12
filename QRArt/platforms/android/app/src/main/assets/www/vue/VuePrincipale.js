class VuePrincipale{
  constructor(){
    this.html = document.getElementById("html-vue-principale").innerHTML;

    
    this.htmlMenu = document.getElementById("html-vue-menu").innerHTML; //implémenter le menu dans la vue
    this.html = this.html.replace("{menu}", this.htmlMenu);
  }


  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    

    // Grab elements, create settings, etc.
    var video = document.getElementById('video');
    console.log("TEST2");

    if(mobileCheck()){
      var constraints = navigator.mediaDevices.getSupportedConstraints();
      alert(constraints);

      navigator.mediaDevices.getUserMedia({
          'video': {
              'facingMode': 'environment'
          }
      }).then(function(mediaStream) {
          var mediaControl = document.querySelector('video');
          mediaControl.srcObject = mediaStream;
          mediaControl.src = URL.createObjectURL(mediaStream);
      });
    }else{
          console.log("TEST8");

      // Get access to the camera!
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        });
      }
    }

    function mobileCheck() {
      
      let text = document.URL;
      if(text.includes("android_asset")){
          return true;
      }
      return false;
  };
  }
  
}
