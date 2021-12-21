# Projet QR Art

## Vidéo de présentation du projet 

Lien de la vidéo : https://youtube.com/shorts/O0EnJhgrEQU?feature=share

<h1> Résumé du projet</h1></br>
Application de collection d’œuvres d’artistes. L’utilisateur doit scanner des codes QR cachés dans un lieu afin d’obtenir l’œuvre reliée à celui-ci. Création de son propre code QR avec ses propres dessins. </br></br>
<h1> Choix des technologies</h1> </br>
Cordova </br>
nimiq/qr-scanner : https://github.com/bitpay/cordova-plugin-qrscanner </br>
Zingtouch pour le swipe : https://zingchart.github.io/zingtouch/ </br>
QRCode.js : https://davidshimjs.github.io/qrcodejs/</br>
</br>
<h1>Features :</h1> </br>
&#9744; La collection</br>
&#9744;Le scan des codes (Camera) </br>
&#9744;L’affichage en AR des œuvres</br>
&#9744;Création du code QR (Gallery)</br></br>
<h1>Échanges de données</h1>
<h3>Protocole</h3>
Lorsqu'un QR code est scanné, le numéro du scan est envoyé à la base de données qui elle, renvoie les données de l'item lié au scan et affiche l'item sur l'écran.<br>
<br>
<h3>Échantillon de données</h3>
Échantillon de données pour la récupération d'un item en XML.<br>

QRArt<br />
    &emsp; id 1<br />
    &emsp; nomDuQRArt Pixel Perroquet<br />
    &emsp; nomCreateur Nicolas Rimbault<br />
    &emsp; image perroquet-pixel-art.png<br />
    &emsp; date 2021.11.18<br />
QRArt<br />
