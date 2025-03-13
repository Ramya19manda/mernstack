const { Sequelize } = require('sequelize');

// Create a connection to MySQL (Replace with your database details)
const sequelize = new Sequelize('mydatabase', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
});

// Test connection
sequelize.authenticate()
    .then(() => console.log('✅ Connected to MySQL Database'))
    .catch(err => console.error('❌ MySQL Connection Error:', err));

module.exports = sequelize;
