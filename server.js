// Imports
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');

// Declarations
const app = express();
const PORT = process.env.PORT || 3001;

// Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Turn on routes
app.use(routes);

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
