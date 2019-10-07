const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');

router.get('/', (req, res, next) => {
    res.json({ success: true });
});

router.use('/user', userRoutes);

module.exports = router;