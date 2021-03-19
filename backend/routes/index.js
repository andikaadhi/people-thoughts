const router = require('express').Router();
const Controller = require('../controllers');

// router.get('/thoughts', Controller.getThoughts);
router.post('/thoughts', Controller.addThought);

module.exports = router;
