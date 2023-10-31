`use strict`;

const elementNome = document.getElementById('nome');
const elementCognome = document.getElementById('cognome');
const elementColor = document.getElementById('color');
const elementPassword = document.getElementById('password');

elementNome.innerHTML = 'Il tuo nome: ';
elementCognome.innerHTML = 'Il tuo cognome: ';
elementColor.innerHTML = 'Il tuo colore preferito: ';
elementPassword.innerHTML = 'La tua Password: ';

// const nomeImput = prompt('Inserisci il tuo nome');
// const cognomeImput = prompt('Inserisci il tuo cognome');
// const colorImput = prompt('Inserisci il tuo colore preferito');

elementNome.innerHTML += prompt('Inserisci il tuo nome');
console.log(elementNome);
elementCognome.innerHTML += prompt('Inserisci il tuo cognome');
console.log(elementCognome);
elementColor.innerHTML += prompt('Inserisci il tuo colore preferito');
console.log(elementColor);

elementPassword.innerHTML +=
  prompt('Inserisci il tuo nome') +
  prompt('Inserisci il tuo cognome') +
  prompt('Inserisci il tuo colore preferito');

console.log(elementPassword);

let x = Math.floor(Math.random() * 100 + 1);
document.getElementById('number').innerHTML = x;
