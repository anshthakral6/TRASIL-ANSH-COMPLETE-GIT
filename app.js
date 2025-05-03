const express = require('express');
const app = express();
const PORT = 3001;

const itineraries = {
  paris: {
    destination: 'Paris',
    activities: ['Eiffel Tower Visit', 'Seine River Cruise', 'Louvre Museum'],
    flights: ['Air France - ₹32,000', 'IndiGo - ₹28,500'],
    hotels: ['Hotel Le Meurice - ₹12,000', 'Novotel Paris - ₹7,500'],
    party: ['Rex Club', 'Le Duplex']
  }
};

app.get('/api/itinerary/:city', (req, res) => {
  const city = req.params.city.toLowerCase();
  if (itineraries[city]) {
    res.json(itineraries[city]);
  } else {
    res.status(404).json({ error: 'Itinerary not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Trasil backend server running at http://localhost:${PORT}`);
});
