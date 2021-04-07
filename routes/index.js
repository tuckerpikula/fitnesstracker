const router = require('express').Router()

router.use('/api', require('./workoutRoutes.js'))
router.use('/api', require('./viewRoutes.js'))

module.exports = router