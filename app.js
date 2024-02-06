import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
import cors from 'cors';

// Assurez-vous que les chemins d'importation sont corrects
import userRoutes from './routes/userRoutes.js';
import collectionRoutes from './routes/collectionRoutes.js';
import objectRoutes from './routes/objectRoutes.js';
import userObjectOwnedRoutes from './routes/userObjectOwnedRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import loginRoute from './routes/loginRoute.js'; // Assurez-vous que le chemin est correct
import registerRoute from './routes/registerRoute.js'; // Assurez-vous que le chemin est correct
import authRoutes from './routes/authRoutes.js'

app.use(cors());
app.use(express.json()); // Utilisation correcte de express.json() pour parser le corps des requêtes JSON

// Utilisation des routes
app.use('/api/auth', authRoutes); // Assurez-vous que authRoutes contient ou regroupe vos routes d'authentification
app.use('/api/users', userRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/objects', objectRoutes);
app.use('/api/userObjectsOwned', userObjectOwnedRoutes);
app.use('/api/reviews', reviewRoutes);
// Utilisation des routes de connexion et d'inscription
app.use(loginRoute);
app.use(registerRoute);

// Connexion à la base de données
import './database.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
