'use strict';
import { Model } from 'sequelize';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10; // Vous pouvez ajuster le nombre de rounds selon vos besoins

export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        // Hashage du mot de passe avant de le sauvegarder
        const hashedPassword = bcrypt.hashSync(value, SALT_ROUNDS);
        this.setDataValue('password', hashedPassword);
      }
    },
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    hooks: {
      // Optionnel : Vous pouvez également utiliser un hook `beforeCreate` ou `beforeUpdate` pour gérer le hashage
      beforeCreate: async (user) => {
        if (user.password) {
          const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
          user.password = hashedPassword;
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
          user.password = hashedPassword;
        }
      }
    }
  });
  return User;
};
