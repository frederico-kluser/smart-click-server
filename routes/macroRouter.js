const express = require('express');
const macroController = require('../controllers/macroController');

const router = express.Router({ mergeParams: true });

router.get('/allMacros', macroController.getAllMacros);
router.put('/switchActived', macroController.switchActived);

module.exports = router;
