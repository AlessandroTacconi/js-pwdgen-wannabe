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

const nomeUtente = prompt('Inserisci il tuo nome');
elementNome.innerHTML += nomeUtente;

console.log(elementNome);

const cognomeUtente = prompt('Inserisci il tuo cognome');
elementCognome.innerHTML += cognomeUtente;

console.log(elementCognome);

const coloreUtente = prompt('Inserisci il tuo colore preferito');
elementColor.innerHTML += coloreUtente;
console.log(elementColor);

const x = Math.floor(Math.random() * 100 + 1);
//document.getElementById('number').innerHTML = x;

elementPassword.innerHTML += nomeUtente + cognomeUtente + coloreUtente + x;

console.log(elementPassword);
