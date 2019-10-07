'use strict'

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^[a-z0-9\_\-]+$/i,
            }
        },
        password: DataTypes.STRING,
        isDeleted: DataTypes.BOOLEAN,
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    });

    /*User.associate = (models) => {
        User.belongsToMany(models.roles, {
            through: 'usersRoles',
            as: 'users_has_roles',
            foreignKey: 'userId'
        });
    };*/

    return User;
    
};