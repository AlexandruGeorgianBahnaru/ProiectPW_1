
//const x = document.getElementById("locatie");
//window.onload = function dateTimeFunction()
//{
    //var date = new Date();
    //var dateTime = document.getElementById("dateTime");
   // dateTime.innerHTML = date.toLocaleString();

    //var url = document.getElementById("url");
    //url.innerHTML = document.location;

    //var locatie = document.getElementById("locatie");
    //navigator.geolocation.getCurrentPosition(showPosition);
    
    //ar versiuneBrowser = document.getElementById("versiuneBrowser");
    //versiuneBrowser.innerHTML = window.navigator.appName + " , Version: " + window.navigator.appVersion;

    //var so = document.getElementById("so");
    //let userAgent = window.navigator.userAgent;
    //let os = "Unknown OS";

   // if (userAgent.indexOf("Win") != -1) os = "Windows";
    //if (userAgent.indexOf("Mac") != -1) os = "MacOS";
   // if (userAgent.indexOf("X11") != -1) os = "UNIX";
   // if (userAgent.indexOf("Linux") != -1) os = "Linux";
   // so.innerHTML = os;
//}
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

function verificaUtilizator() {
    var utilizator = document.getElementById("utilizator").value;
    var parola = document.getElementById("parola").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var utilizatori = JSON.parse(xhr.responseText);
                var gasit = false;
                for (var i = 0; i < utilizatori.length; i++) {
                    if (utilizatori[i].utilizator === utilizator && utilizatori[i].parola === parola) {
                        console.log("\njsonData:", utilizatori[i]);
                        gasit = true;
                        break;
                    }
                }
                if (gasit) {
                    document.getElementById("rezultat").innerText = "Utilizator și parolă corecte!";
                } else {
                    document.getElementById("rezultat").innerText = "Utilizator sau parolă incorecte!";
                }
            } else {
                document.getElementById("rezultat").innerText = "Eroare la cererea AJAX!";
            }
        }
    };
    xhr.open("GET", "resurse/utilizatori.json", true);
    xhr.send();
}

function adaugaUtilizator() {
    var utilizator = document.getElementById("Username").value.trim();
    var parola = document.getElementById("Password").value.trim();
    var nume = document.getElementById("LastName").value.trim();
    var prenume = document.getElementById("FirstName").value.trim();
    var email = document.getElementById("Email").value.trim();
    var numarTelefon = document.getElementById("PhoneNumber").value.trim();
    var sex = document.getElementById("Sex").value.trim();
    var mancarePreferata = document.getElementById("Food").value.trim();
    var culoareaPreferata = document.getElementById("Colors").value.trim();
    var dataNasterii = document.getElementById("date").value.trim();
    var oraNasterii = document.getElementById("time").value.trim();
    var varsta = document.getElementById("labelAge").value.trim();
    var personalUrl = document.getElementById("PersonalUrl").value.trim();
    var descriere = document.getElementById("Description").value.trim();

    var userData = {
        "utilizator": utilizator,
        "parola": parola,
        "nume": nume,
        "prenume": prenume,
        "email": email,
        "numarTelefon": numarTelefon,
        "sex": sex,
        "mancarePreferata": mancarePreferata,
        "culoarePreferata": culoareaPreferata,
        "dataNasterii": dataNasterii,
        "oraNasterii": oraNasterii,
        "varsta": varsta,
        "personalUrl": personalUrl,
        "descriere": descriere
    };

    var jsonData = JSON.stringify(userData);


    var xhr = new XMLHttpRequest();


    xhr.open("POST", "resurse/utilizatori.json", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById("rezultatInregistrare").innerText = "Utilizatorul a fost înregistrat cu succes!";
            } else {
                document.getElementById("rezultatInregistrare").innerText = "Eroare la înregistrarea utilizatorului!";
            }
        }
    };

    xhr.send(jsonData);
}

function removeClass(){
    var element = document.getElementById('buttonDespre');
    if(element !== null)
    {
        element.classList.remove('current-page-button');
    }
    element = document.getElementById('buttonDesen');
    if(element !== null)
    {
        element.classList.remove('current-page-button');
    }
    element = document.getElementById('buttonVideo');
    if(element !== null)
    {
        element.classList.remove('current-page-button');
    }
    element = document.getElementById('buttonInvat');
    if(element !== null)
    {
        element.classList.remove('current-page-button');
    }
    element = document.getElementById('buttonInregistreaza');
    if(element !== null)
    {
        element.classList.remove('current-page-button');
    }
    element = document.getElementById('buttonVerifica');
    if(element !== null)
    {
        element.classList.remove('current-page-button');
    }
}

function buttonHighlight(name){
    removeClass();
    var element = document.getElementById('buttonDesen');
    if (name == "desen") {
        if(element !== null)
        {
            element.classList.add('current-page-button');
        }
    }
    else if (name == "video") {
        element = document.getElementById('buttonVideo');
        if(element !== null)
        {
            element.classList.add('current-page-button');
        }
    }
    else if (name == "despre") {
        element = document.getElementById('buttonDespre');
        if(element !== null)
        {
            element.classList.add('current-page-button');
        }
    }
    else if (name == "invat") {
        element = document.getElementById('buttonInvat');
    if(element !== null)
    {
        element.classList.add('current-page-button');
    }
    }
    else if (name == "inregistreaza") {
        element = document.getElementById('buttonInregistreaza');
        if(element !== null)
        {
            element.classList.add('current-page-button');
        }
    }
    else if (name == "verifica") {
        element = document.getElementById('buttonVerifica');
        if(element !== null)
        {
            element.classList.add('current-page-button');
        }
    }
  }

