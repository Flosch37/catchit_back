'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Item extends Model {
  static associate(models) {
    Item.belongsTo(models.Collection, { foreignKey: 'collectionId' });
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

export default Item;