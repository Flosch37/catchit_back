'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Review extends Model {
    
    static associate(models) {
      
      Review.belongsTo(models.User, { foreignKey: 'userId' });
      Review.belongsTo(models.Object, { foreignKey: 'objectId' });
    }
  }
  Review.init({
    objectId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Object', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
