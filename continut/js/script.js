
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

  function schimbaContinut(resursa, jsFisier, jsFunctie) {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("continut").innerHTML = this.responseText;
            
            if (jsFisier) {
                var elementScript = document.createElement('script');
                elementScript.onload = function () {
                    console.log("Fișierul JavaScript a fost încărcat cu succes.");
                    if (jsFunctie) {
                        window[jsFunctie]();
                    }
                };
                elementScript.src = jsFisier;
                document.head.appendChild(elementScript);
            } else {
                if (jsFunctie) {
                    window[jsFunctie]();
                }
            }
        }
    };

    xhttp.open("GET", resursa + ".html", true);
    xhttp.send();
}
function removeClass(){
    document.getElementById('buttonDespre').classList.remove('current-page-button');
    document.getElementById('buttonDesen').classList.remove('current-page-button');
    document.getElementById('buttonVideo').classList.remove('current-page-button');
    document.getElementById('buttonInvat').classList.remove('current-page-button');
    document.getElementById('buttonInregistreaza').classList.remove('current-page-button');

}

function buttonHighlight(name){
    removeClass();
    if (name == "desen") {
      // If the associated page is loaded, change the button style
      document.getElementById('buttonDesen').classList.add('current-page-button');

    }
    else if (name == "video") {
        // If the associated page is loaded, change the button style
        document.getElementById('buttonVideo').classList.add('current-page-button');
    }
    else if (name == "despre") {
        // If the associated page is loaded, change the button style
        document.getElementById('buttonDespre').classList.add('current-page-button');
    }
    else if (name == "invat") {
        // If the associated page is loaded, change the button style
        document.getElementById('buttonInvat').classList.add('current-page-button');
    }
    else if (name == "inregistreaza") {
        // If the associated page is loaded, change the button style
        document.getElementById('buttonInregistreaza').classList.add('current-page-button');
    }
  }

