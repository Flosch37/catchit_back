'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class UserItemOwned extends Model {
  ate(models) {
      
      UserItemOwned.belongsTo(models.User, { foreignKey: 'userId' });
      UserItemOwned.belongsTo(models.Item, { foreignKey: 'itemId' });
    }
  }
  UserItemOwned.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    itemId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Item', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserItemOwned',
  });
  return UserItemOwned;
};
