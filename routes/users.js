const express = require('express');
const router = express.Router();

// route POST request api/users
// decsription - will register a user
// public access
router.post('/', (req, res) => {
    res.send('Register a user');
});

module.exports = router;