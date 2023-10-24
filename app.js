const express = require('express');
const db = require('./config/database');
const userRoutes = require('./routes/userRoutes');


const app = express();
const port = 3000;
app.use(express.json())

// Importez votre modèle de données User
const User = require('./models/userModel'); 


db.authenticate()
  .then(() => {
    console.log('Connecté à la base de données MySQL');
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données : ' + err);
  });



app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

app.use('/users', userRoutes);
