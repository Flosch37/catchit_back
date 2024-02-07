'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js'; 
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

class User extends Model {
    static associate(models) {
        
        User.hasMany(models.Collection, { foreignKey: 'userId', as: 'collections' });
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { msg: "Le nom d'utilisateur ne peut pas être vide." },
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 1000], 
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: { msg: "Doit être une adresse email valide." },
        }
    },
    role: DataTypes.STRING
}, {
    sequelize,
    modelName: 'User',
    hooks: {
        beforeCreate: async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
            user.password = hashedPassword;
        },
        beforeUpdate: async (user) => {
            if (user.changed('password')) {
                const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
                user.password = hashedPassword;
            }
        }
    }
});

export default User;
