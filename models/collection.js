'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Collection extends Model {
  static associate(models) {
    Collection.belongsTo(models.User, { foreignKey: 'userId' });
  }
}

Collection.init({
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  isAdmin: DataTypes.BOOLEAN,
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User', // Assurez-vous que cela correspond au nom du modèle dans la base de données
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}, {
  sequelize,
  modelName: 'Collection',
});

export default Collection;
