const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);     
    }
}

User.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len:[4]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await brcrypt.hash(newUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;