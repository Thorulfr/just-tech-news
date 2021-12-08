// Imports
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// Router setup
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
