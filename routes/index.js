const express = require('express');
const router = express.Router();
const courseRoute = require('./courses.route');

router.get('/heartbeat', (req, res) => {
    res.send('Heart Beat!!!!!');
});
router.use('/courses', courseRoute)

module.exports = router;