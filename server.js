require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon =require('./models/pokemon');
const jsxViewEngine =require('jsx-view-engine');
const mongoose=require('mongoose');

app.set('view engine', 'jsx')
app.set('views', './views')
app.engine('jsx',jsxViewEngine())

//// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

// Middleware
app.use(express.urlencoded({ extended: false }));

//////////////////////////

// Index
app.get('/pokemon', async (req, res) => {
  try {
    const foundPokemon = await Pokemon.find({});
    console.log(foundPokemon);
    res.status(200).render('Index', {
      pokemon: foundPokemon,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New
app.get('/pokemon/new', (req, res) => {
  console.log('New controller');
  res.render('New');
});

// Create
app.post('/pokemon', async (req, res) => {
  try {
    
   const createdPokemon = await Pokemon.create(req.body);

    res.status(201).redirect('/pokemon');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show
app.get('/pokemon/:id', async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);

    //second param of the render method must be an object
    res.render('Show', {
      //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
      pokemon: foundPokemon,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// // Route
// app.get('/', (req, res) => {
//   res.send('<h1>Welcome to the Pokemon App!</h1>');
// });

// // Index Route
// app.get('/pokemon', (req, res) => {
//   res.render('Index', {pokemon});
// });

// // Show Route
//   app.get('/pokemon/:id', (req, res) => {
//     res.render('Show', {
//       pokemon: pokemon[req.params.id],
//     });
//   });
  
  
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
  