// Milestone 1: calcolo prezzo su due input, output in console

document.getElementById('genera').addEventListener('click', function() {
  const km  = parseFloat(document.getElementById('km').value);
  const ageCat = document.getElementById('age').value;
  const ticketContainer = document.getElementById('ticket');

  // Calcola prezzo base
  let price = km * 0.21;

  // Applicazione dello sconto
  if (age < 18) {
    // 20% di sconto
    price *= 0.8;   
  } 
  else if (age >= 65) {
    // 40% di sconto
    price *= 0.6;   
  }

 // Formattazione
  const formattedPrice = price.toFixed(2) + '€';

 // 5) Età
  let ageText;
  if (ageCat === 'minorenne')       
    ageText = 'Minorenne';
  else if (ageCat === 'over65')     
    ageText = 'Over 65';
  else                               
  ageText = 'Maggiorenne';

   // Carrozza e codice CP
  const carriage = Math.floor(Math.random() * 9) + 1;
  const code = Math.floor(Math.random() * 90000) + 10000;


});