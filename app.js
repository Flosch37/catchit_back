import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
import cors from 'cors';

// Importations des routes ajustées
import userRoutes from './routes/userRoutes.js';
import collectionRoutes from './routes/collectionRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import userItemOwnedRoutes from './routes/useItemOwnedRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
// Supposons que vous avez créé des fichiers séparés pour l'enregistrement et la connexion
import registerRoute from './routes/registerRoute.js'; 
import loginRoute from './routes/loginRoute.js';

app.use(cors());
app.use(express.json());

// Configuration des routes ajustée
app.use('/api/users', userRoutes);
app.use('/api/register', registerRoute); // Configuration de la route d'enregistrement
//app.use('/api/login', loginRoute); // Configuration de la route de connexion

app.use('/collection', collectionRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/userItemsOwned', userItemOwnedRoutes);
app.use('/api/reviews', reviewRoutes);

// Connexion à la base de données
import './database.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
