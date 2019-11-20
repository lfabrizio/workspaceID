const express = require('express');
const router = express.Router();

// route GET request api/auth
// decsription - get logged in user
// public access
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

// route POST request api/auth
// decsription - Auth user and get token
// public access
router.get('/', (req, res) => {
    res.send('log in user');
});
module.exports = router;