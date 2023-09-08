const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon =require('./models/pokemon')
const jsxViewEngine =require('jsx-view-engine')


app.set('view engine', 'jsx')
app.set('views', './views')
app.engine('jsx',jsxViewEngine())

// Route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Pokemon App!</h1>');
});

// Index Route
app.get('/pokemon', (req, res) => {
  res.render('Index', {pokemon});
});

// Show Route
  app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
      pokemon: pokemon[req.params.id],
    });
  });
  
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  