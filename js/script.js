
document.getElementById('genera').addEventListener('click', function() {
  const km  = parseFloat(document.getElementById('km').value);
  const name = document.getElementById('name').value;
  const ageCat = document.getElementById('age').value;
  const ticketContainer = document.getElementById('ticket');

  // Calcola prezzo base
  let price = km * 0.21;

  // 3) Applicazione sconto
  let offerText = 'Biglietto Standard';
  if (ageCat === 'minorenne') {
    price *= 0.8;
    offerText = 'Sconto Minorenni';
  } 
  else if (ageCat === 'over65') {
    price *= 0.6;
    offerText = 'Sconto Over 65';
  }
  // Formattazione
  const formattedPrice = price.toFixed(2) + '€';

  // Carrozza e codice CP
  const carriage = Math.floor(Math.random() * 9) + 1;
  const code = Math.floor(Math.random() * 90000) + 10000;

  // 7) Iniezione in pagina
   document.getElementById('ticket').innerHTML = `<div class="ticket">
   <img src="../assets/icon.gif" alt="icon" class="ticket-icon">
      <h2>Il tuo biglietto</h2>
      <div><strong>Dettaglio Passeggero</strong> ${name}</div>
      <p><strong>Offerta:</strong> ${offerText}</p>
      <div><strong>Carrozza:</strong> ${carriage}</div>
      <div><strong>Codice CP:</strong> ${code}</div>
      <div><strong>Costo biglietto:</strong> ${formattedPrice}</div>
    </div>`;
});

annulla.addEventListener('click', () => {
  document.getElementById('name').value = '';
  document.getElementById('km').value = '';
  document.getElementById('age').value = '';
  ticketContainer.innerHTML = '';
});