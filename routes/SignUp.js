const express = require('express');
const router = express.Router();

const SignUpController = require('../controllers/SignUpController');
router.post('/sign-up', SignUpController.index)

module.exports = router;