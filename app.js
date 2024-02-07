import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
import cors from 'cors';

// Importations des routes
import userRoutes from './routes/userRoutes.js';
import collectionRoutes from './routes/collectionRoutes.js';
import objectRoutes from './routes/objectRoutes.js';
import userObjectOwnedRoutes from './routes/userObjectOwnedRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import authRoutes from './routes/authRoutes.js'; 

app.use(cors());
app.use(express.json());

// Configuration des routes
app.use('/api/auth', authRoutes); 
app.use('/api/users', userRoutes);
app.use('/collection', collectionRoutes);
app.use('/api/objects', objectRoutes);
app.use('/api/userObjectsOwned', userObjectOwnedRoutes);
app.use('/api/reviews', reviewRoutes);

// Connexion à la base de données
import './database.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
