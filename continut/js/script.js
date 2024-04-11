
const x = document.getElementById("locatie");
window.onload = function dateTimeFunction()
{
    var date = new Date();
    var dateTime = document.getElementById("dateTime");
    dateTime.innerHTML = date.toLocaleString();

    var url = document.getElementById("url");
    url.innerHTML = document.location;

    var locatie = document.getElementById("locatie");
    navigator.geolocation.getCurrentPosition(showPosition);
    
    var versiuneBrowser = document.getElementById("versiuneBrowser");
    versiuneBrowser.innerHTML = window.navigator.appName + " , Version: " + window.navigator.appVersion;

    var so = document.getElementById("so");
    let userAgent = window.navigator.userAgent;
    let os = "Unknown OS";

    if (userAgent.indexOf("Win") != -1) os = "Windows";
    if (userAgent.indexOf("Mac") != -1) os = "MacOS";
    if (userAgent.indexOf("X11") != -1) os = "UNIX";
    if (userAgent.indexOf("Linux") != -1) os = "Linux";
    so.innerHTML = os;

    document.registrationForm.age.oninput = function(){
        document.registrationForm.labelAge.value = document.registrationForm.age.value;
     }
    
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude; 
}

function updateRangeinput(val) {
    document.getElementById('labelAge').value=val; 
  }

window.addEventListener('DOMContentLoaded', (event) => {

    const currentPage = window.location.pathname;
    const desenPage = "desen.html";
    const desprePage = "despre.html";
    const videoPage = "video.html";
    const inregistreazaPage = "inregistreaza.html";
    const invatPage = "invat.html";
    if (currentPage.endsWith(desenPage)) {
      // If the associated page is loaded, change the button style
      document.getElementById('buttonDesen').classList.add('current-page-button');
    }
    else if (currentPage.endsWith(videoPage)) {
        // If the associated page is loaded, change the button style
        document.getElementById('buttonVideo').classList.add('current-page-button');
    }
    else if (currentPage.endsWith(desprePage)) {
        // If the associated page is loaded, change the button style
        document.getElementById('buttonDespre').classList.add('current-page-button');
    }
    else if (currentPage.endsWith(invatPage)) {
        // If the associated page is loaded, change the button style
        document.getElementById('buttonInvat').classList.add('current-page-button');
    }
    else if (currentPage.endsWith(inregistreazaPage)) {
        // If the associated page is loaded, change the button style
        document.getElementById('buttonInregistreaza').classList.add('current-page-button');
    }
  });

