class VuePrincipale{
  constructor(){
    this.html = document.getElementById("html-vue-principale").innerHTML;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    
    // Grab elements, create settings, etc.
    var video = document.getElementById('video');

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
}