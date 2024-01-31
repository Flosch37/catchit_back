import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const json = express;
import cors from 'cors';

// Assurez-vous que les chemins d'importation sont corrects
import userRoutes from './routes/userRoutes.js';
import collectionRoutes from './routes/collectionRoutes.js';
import objectRoutes from './routes/objectRoutes.js';
import userObjectOwnedRoutes from './routes/userObjectOwnedRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(json());

app.use('/api/auth', authRoutes);
app.use(userRoutes);
app.use(collectionRoutes);
app.use(objectRoutes);
app.use(userObjectOwnedRoutes);
app.use(reviewRoutes);

import './database.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
