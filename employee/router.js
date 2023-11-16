const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.post('/', controller.createEmployee);
router.get('/', controller.getAllEmployee);

module.exports = router;
