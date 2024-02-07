'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Object extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Object.init({
    collectionId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image_path: DataTypes.STRING,
    is_real: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Object',
  });
  return Object;
};