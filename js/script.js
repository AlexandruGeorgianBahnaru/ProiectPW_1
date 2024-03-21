
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
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude; 
  }

