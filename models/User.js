const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create our user model
class User extends Model {}

// Define table columns and config
User.init(
    {
        // Define ID column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // Must be at least 4 characters long
                len: [4],
            },
        },
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration)
        // Pass in imported sequelize connection (to database)
        sequelize,
        // Don't add timestamps
        timestamps: false,
        // Don't pluralize name of DB table
        freezeTableName: true,
        // Use underscores rather than camelCase
        underscored: true,
        // Ensure model name stays lowercased
        modelName: 'user',
    }
);

module.exports = User;
