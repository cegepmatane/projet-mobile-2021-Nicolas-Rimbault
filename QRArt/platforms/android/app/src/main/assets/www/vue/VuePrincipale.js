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
        alert("test1");

    QrScanner.WORKER_PATH = '../lib/qr-scanner-worker.min.js';

    alert("test");
    // Grab elements, create settings, etc.
    var video = document.getElementById('video');

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
