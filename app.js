const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const objectRoutes = require('./routes/objectRoutes');
const userObjectOwnedRoutes = require('./routes/userObjectOwnedRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const { Sequelize } = require('sequelize');

function createApp() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    return app;
}

function initializeRoutes(app) {
    app.use(userRoutes);
    app.use(collectionRoutes);
    app.use(objectRoutes);
    app.use(userObjectOwnedRoutes);
    app.use(reviewRoutes);
}

function initializeDatabase() {
    const sequelize = new Sequelize('catchit_db', 'root', null, {
        host: 'localhost',
        dialect: 'mysql'
    });

    sequelize.authenticate()
        .then(() => console.log('Connecté à la base de données MySQL'))
        .catch(err => console.error('Erreur de connexion à la base de données:', err));
}

function startServer(app) {
    const port = 3000;
    app.listen(port, () => {
        console.log(`Serveur en cours d'exécution sur le port ${port}`);
    });
}

const app = createApp();
initializeRoutes(app);
initializeDatabase();
startServer(app);
