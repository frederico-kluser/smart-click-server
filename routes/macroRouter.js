const express = require('express');
const macroController = require('../controllers/macroController');

const router = express.Router({ mergeParams: true });

router.get('/allMacros', macroController.getAllMacros);

module.exports = router;
