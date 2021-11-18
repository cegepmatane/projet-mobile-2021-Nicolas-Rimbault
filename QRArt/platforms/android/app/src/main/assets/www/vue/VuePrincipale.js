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
    
    function onDeviceReady() {
      console.log('Device Ready');
      alert("Device Ready");

        // Now safe to use device APIs
        var done = function(err, status){
          if(err){
            console.error(err._message);
            console.log('QRScanner Echec');
            alert("test1");
  
  
          } else {
            console.log('QRScanner is initialized. Status:');
            console.log(status);
            alert("test2");

  
          }
        };
  
        window.QRScanner.prepare(done);
    }
    document.addEventListener("deviceready", onDeviceReady, false);

    // Grab elements, create settings, etc.
    var video = document.getElementById('video');
    console.log("TEST2");

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
