const express = require('express');
router = express.Router();
const { hello } = require('../controllers/input');

router.get('/', hello);

module.exports = router;