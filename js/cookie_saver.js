document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Spriječiti standardno slanje obrasca

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Spremi podatke u kolačiće
    document.cookie = "name=" + encodeURIComponent(name) + "; path=/";
    document.cookie = "email=" + encodeURIComponent(email) + "; path=/";
    document.cookie = "subject=" + encodeURIComponent(subject) + "; path=/";
    document.cookie = "message=" + encodeURIComponent(message) + "; path=/";

    console.log("Podaci spremljeni u cookije!");

    // Opcionalno, ovdje možete poslati podatke obrasca poslužitelju ako je potrebno
    // Na primjer, korištenjem fetch() ili XMLHttpRequest
});

// Funkcija za čitanje vrijednosti kolačića
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

// Učitaj spremljene podatke iz kolačića u polja obrasca (ako postoje)
window.onload = function() {
    var name = getCookie("name");
    var email = getCookie("email");
    var subject = getCookie("subject");
    var message = getCookie("message");

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