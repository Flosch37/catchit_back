// database.js

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Créez une nouvelle instance Sequelize en utilisant les variables d'environnement du fichier .env
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    // Ajoutez les paramètres additionnels selon vos besoins
    // logging: false, // Désactivez le logging si vous ne voulez pas de logs de Sequelize
    // define: {
    //   freezeTableName: true // Si vous voulez que le nom des tables reste tel que défini dans les modèles
    // }
});

// Testez la connexion à la base de données
sequelize.authenticate()
  .then(() => console.log('Connexion à la base de données MySQL établie avec succès.'))
  .catch(err => console.error('Impossible de se connecter à la base de données:', err));

// Exportez l'instance sequelize pour l'utiliser dans d'autres parties de votre application
export default sequelize;
