class VuePrincipale{
  constructor(){
    this.html = document.getElementById("html-vue-principale").innerHTML;
    // import QrScanner from '../lib/qr-scanner.min.js';
    
    this.htmlMenu = document.getElementById("html-vue-menu").innerHTML; //implémenter le menu dans la vue
    this.html = this.html.replace("{menu}", this.htmlMenu);
    
    //Setup du lecteur de QRcode
   // QrScanner.WORKER_PATH = '../lib/qr-scanner-worker.min.js';
  }


  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    // Grab elements, create settings, etc.
    var video = document.getElementById('video');
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
      console.log("Test");
      console.log("Etat : "+ QRScanner);
      QRScanner.prepare(onDone); // show the prompt

      function onDone(err, status){
        if (err) {
         // here we can handle errors and clean up any loose ends.
         console.error(err);
         alert("");
        }
        if (status.authorized) {
          // W00t, you have camera access and the scanner is initialized.
          // QRscanner.show() should feel very fast.
        } else if (status.denied) {
         // The video preview will remain black, and scanning is disabled. We can
         // try to ask the user to change their mind, but we'll have to send them
         // to their device settings with `QRScanner.openSettings()`.
        } else {
          // we didn't get permission, but we didn't get permanently denied. (On
          // Android, a denial isn't permanent unless the user checks the "Don't
          // ask again" box.) We can ask again at the next relevant opportunity.
        }
      }
    }
    if(mobileCheck()){
      var constraints = navigator.mediaDevices.getSupportedConstraints();


      navigator.mediaDevices.getUserMedia({
          'video': {
              'facingMode': 'environment'
          }
      }).then(function(mediaStream) {
          video.srcObject = mediaStream;
          video.src = URL.createObjectURL(mediaStream);
          video.play();
      });
    }else{
      // Get access to the camera!
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        });
      }
      //window.QRScanner.prepare(onDone);

     
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
