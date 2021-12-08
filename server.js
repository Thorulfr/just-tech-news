// Imports
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');

// Declarations
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

// Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Turn on routes
app.use(routes);

// Handlebars setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
