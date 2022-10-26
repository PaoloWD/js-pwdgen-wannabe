const userName = prompt("Scrivi il tuo nome");
const userSurname = prompt("Scrivi il tuo cognome");
const userColor = prompt("Scrivi il tuo colore preferito");
const number = 21;

const password = document.getElementById("password");
password.innerHTML = `${userName}${userSurname}${userColor}${number}`;
