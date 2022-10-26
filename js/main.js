const userName = prompt("Scrivi il tuo nome");
const userSurname = prompt("Scrivi il tuo cognome");
const userColor = prompt("Scrivi il tuo colore preferito");
const number = 21;

const first_name = document.getElementById("first_name");
first_name.innerHTML = userName;
const surname = document.getElementById("surname");
surname.innerHTML = userSurname;
const color = document.getElementById("color");
color.innerHTML = userColor;
const pref_number = document.getElementById("pref_number");
pref_number.innerHTML = number;
