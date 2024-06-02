document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Spriječiti standardno slanje obrasca

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    // Spremi podatke u kolačiće
    document.cookie = "name=" + encodeURIComponent(name) + "; path=/";
    document.cookie = "email=" + encodeURIComponent(email) + "; path=/";
    document.cookie = "subject=" + encodeURIComponent(subject) + "; path=/";
    document.cookie = "message=" + encodeURIComponent(message) + "; path=/";

    console.log("Podaci spremljeni u cookije!");

    // Opcionalno, ovdje možete poslati podatke obrasca poslužitelju ako je potrebno
    // Na primjer, korištenjem fetch() ili XMLHttpRequest
});

// Funkcija za čitanje vrijednosti cookieja.
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// Učitaj spremljene podatke iz cookieja u polja obrasca (ako postoje)
window.onload = function() {
    let name = getCookie("name");
    let email = getCookie("email");
    let subject = getCookie("subject");
    let message = getCookie("message");

    if (name) {
        document.getElementById('name').value = name;
    }
    if (email) {
        document.getElementById('email').value = email;
    }
    if (subject) {
        document.getElementById('subject').value = subject;
    }
    if (message) {
        document.getElementById('message').value = message;
    }
}