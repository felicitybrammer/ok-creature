const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');  //check path
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init({
    //define model attributes
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true, 
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
    },
    // quiz_id: {
    //     type: DataTypes.INTEGER,
    //     //allowNull: false,
    //     references: {
    //         model: 'quiz',
    //         key: 'id'
    //     }
    // }
}, 
{
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10)
            return newUserData
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
            return updatedUserData
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
});

module.exports = User;