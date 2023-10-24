const express = require('express');
const mysql = require('mysql');
const dbConfig = require('./dbConfig');

const app = express();
const port = 3000;

// Configuration de la connexion à la base de données
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

// Définissez vos routes ici

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
