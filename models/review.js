'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Review extends Model {
    
    static associate(models) {
      
      Review.belongsTo(models.User, { foreignKey: 'userId' });
      Review.belongsTo(models.Item, { foreignKey: 'itemId' });
    }
  }
  Review.init({
    itemId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Item', 
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
