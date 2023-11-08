'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserObjectOwned extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserObjectOwned.belongsTo(models.User, { foreignKey: 'userId' });
      UserObjectOwned.belongsTo(models.Object, { foreignKey: 'objectId' });
    }
  }
  UserObjectOwned.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User', // 'Users' would be the table name
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    objectId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Object', // 'Objects' would be the table name
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
