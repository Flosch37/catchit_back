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
      model: 'User', 
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
