"use strict";
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Review extends Model {
  static associate(models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Item, { foreignKey: "itemId" });
  }
}
Review.init(
  {
    itemId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Item",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    content: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: "Review",
  }
);

export default Review;
