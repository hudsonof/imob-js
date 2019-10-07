'use strict'

const express = require('express');
const router = express.Router();
let userController = require('../controllers/userController');

router.post('/signup', userController.signup);
router.get('/', userController.listAll);
router.post('/', userController.create);
router.put('/:id', userController.update);

module.exports = router;