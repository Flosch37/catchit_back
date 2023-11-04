const express = require('express');
const app = express();
const port = 3000;

const db = require('./config/database'); 
const userRoutes = require('./routes/userRoutes');

// Activation de la gestion des données JSON dans les requêtes
app.use(express.json());

app.use('/user', userRoutes);

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

console.log("clown")
