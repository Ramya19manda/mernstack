const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the Sequelize instance

const Disaster = sequelize.define('Disaster', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    severity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'disasters',  // Explicitly define table name (optional)
    timestamps: false        // Disable auto `createdAt` and `updatedAt`
});

module.exports = Disaster;
