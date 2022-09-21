const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const calendarRoutes = require('./calendarRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/calendar', calendarRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
