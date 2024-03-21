
window.onload = function dateTimeFunction()
{
    var date = new Date();
    var dateTime = document.getElementById("dateTime");
    dateTime.innerHTML = date.toLocaleString();

    var URL1 = new URL();
    var url = document.getElementById("url");
    url.innerHTML = URL1.toString();
}