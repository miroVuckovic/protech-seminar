const footer = document.createElement('footer');
footer.className = 'footer';

const p1 = document.createElement('p');
p1.textContent = 'Autor: Miroslav Vučković';

const p2 = document.createElement('p');
const emailLink = document.createElement('a');
emailLink.id = 'email';
emailLink.href = 'mailto:mvuckovic@unisb.hr';
emailLink.target = '_blank';
emailLink.rel = 'noreferrer';
emailLink.textContent = 'mvuckovic@unisb.hr';
p2.appendChild(emailLink);

const p3 = document.createElement('p');
p3.textContent = '© 2024 protech d.o.o.';

footer.appendChild(p1);
footer.appendChild(p2);
footer.appendChild(p3);

document.body.appendChild(footer);
