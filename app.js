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
import registerRoute from './routes/registerRoute.js'; 

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/register', registerRoute); 
app.use('/api/collection', collectionRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/userItemsOwned', userItemOwnedRoutes);
app.use('/api/reviews', reviewRoutes);

import './database.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
