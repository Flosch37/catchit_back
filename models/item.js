'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Item extends Model {
    
    static associate(models) {
      Item.belongsTo(models.Collection, { foreignKey: 'collectionId', as: 'items' });
    }
  }
  Item.init({
    collectionId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image_path: DataTypes.STRING,
    is_real: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};