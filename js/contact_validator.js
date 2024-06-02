document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (validateForm(name, email, subject, message)) {
        console.log('Ime i prezime:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Poruka:', message);
        alert('Hvala što ste nas kontaktirali!');
    }
});

function validateForm(name, email, subject, message) {
    if (!name || !email || !subject || !message) {
        alert('Potrebno je popuniti sva polja.');
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Molimo, unesite valjanu email adresu.');
        return false;
    }

    return true;
}