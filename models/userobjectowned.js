'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class UserObjectOwned extends Model {
  ate(models) {
      
      UserObjectOwned.belongsTo(models.User, { foreignKey: 'userId' });
      UserObjectOwned.belongsTo(models.Object, { foreignKey: 'objectId' });
    }
  }
  UserObjectOwned.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    objectId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Object', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserObjectOwned',
  });
  return UserObjectOwned;
};
