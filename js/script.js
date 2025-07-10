// Milestone 1: calcolo prezzo su due input, output in console

document.getElementById('genera').addEventListener('click', function() {
  const km  = parseFloat(document.getElementById('km').value);
  const age = parseInt(document.getElementById('age').value, 10);

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

  // output
  console.log(`Prezzo finale del biglietto: €${price.toFixed(2)}`);
});