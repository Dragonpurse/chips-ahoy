document.getElementById("first_name").value = "John";
document.getElementById("last_name").value = "Saelens";
document.getElementById("email_2").value = "dragonpurse@gmail.com";
document.getElementById("age").checked = true;
document.getElementById("entry_code_2").value = getParameterByName('code', document.URL);



document.getElementsByTagName("button")[1].click();

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}