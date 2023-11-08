const express = require('express');
const userRoutes = require('./routes/userRoutes')
const collectionRoutes = require('./routes/collectionRoutes')
const objectRoutes = require('./routes/objectRoutes')
const userObjectOwnedRoutes = require('./routes/userObjectOwnedRoutes');
const reviewRoutes = require('./routes/reviewRoutes')
const app = express();
const port = 3000;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: null,
  database: 'catchit_db',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connecté à la base de données MySQL');
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données : ' + err);
  });

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});



// Activation de la gestion des données JSON dans les requêtes
app.use(express.json());
app.use('',userRoutes);
app.use('',collectionRoutes);
app.use('',objectRoutes);
app.use('',userObjectOwnedRoutes);
app.use('', reviewRoutes);




