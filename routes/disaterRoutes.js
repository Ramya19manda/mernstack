const express = require('express');
const { addDisaster, getDisasters } = require('../controllers/disasterController');

const router = express.Router();

router.post('/disasters', addDisaster);
router.get('/disasters', getDisasters);

module.exports = router;
