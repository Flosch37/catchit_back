'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Collection belongs to User
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
        model: 'User', // 'Users' would be the table name
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' if you want to delete the collection when the user is deleted
    }
  }, {
    sequelize,
    modelName: 'Collection',
  });
  return Collection;
};
