const router = require('express').Router();
const htmlRoutes = require('./htmlRoute')

router.use(htmlRoutes);


module.exports = router;