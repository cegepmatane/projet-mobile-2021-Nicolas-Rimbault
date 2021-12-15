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

      
      var done = function(err, status){
        if(err){
          console.error(err._message);
        } else {
          console.log('QRScanner is initialized. Status:');
          console.log(status);
          QRScanner.show();
        }
      };
      
      QRScanner.prepare(done);
      var btnScan = document.getElementById("bouton_photo");
      btnScan.addEventListener("click",scan);
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
    function scan(){
      console.log("test");
      var isTrue = QRScanner.scan(displayContents);
      var checkFaill = 0;
      while(!isTrue && checkFaill <=20){
        console.log("Nombre essait : "+checkFaill);
        isTrue = QRScanner.scan(displayContents);
        checkFaill++;
      }
      //var videoList = document.getElementsByTagName("video");
    }
    
    function displayContents(err, text){
      if(err){
        // an error occurred, or the scan was canceled (error code `6`)
        alert(err);
      } else {
        // The scan completed, display the contents of the QR code:
        alert(text);
        return true;
      }
      return false;
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
