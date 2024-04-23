const express = require('express');
const app = express();
const mongoose = require('mongoose')
const StuffRoutes = require('./routes/stuff')
const userRoutes = require('./routes/user')



app.use(express.json())

mongoose.connect('mongodb+srv://MonVieuxGrimoire:azerty12345@crowns.z9bxsko.mongodb.net/?retryWrites=true&w=majority&appName=crowns',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


//ajout d'un livre
app.post('/api/books', StuffRoutes )

//partie poour modifier un book
app.put('/api/books/:id', StuffRoutes)

//bibliotheque de tout les livres 
app.get('/api/books', StuffRoutes)

//suppression d'un objets
app.delete('/api/books/:id', StuffRoutes)

//  partie concernant l'id en detail
app.get('/api/books/:id', StuffRoutes);

app.use('/api/auth', userRoutes)



module.exports = app;