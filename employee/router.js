const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.post('/', controller.createEmployee);
router.get('/', controller.getAllEmployee);
router.get('/percent-sector', controller.getPercentWagePerSector);
router.get('/total-wage', controller.getTotalWage);

module.exports = router;
