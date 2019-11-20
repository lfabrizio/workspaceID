const express = require('express');
const router = express.Router();

// route GET request api/contacts
// decsription - get all user contacts
// private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// route POST request api/contacts
// decsription - Auth user and get token
// public access
router.post('/', (req, res) => {
    res.send('add contact');
});

// route Put request api/contacts/:id
// decsription - update contact
// public access
router.post('/:id', (req, res) => {
    res.send('update contact');
});

// route delete request api/contacts/:id
// decsription - delete contact
// public access
router.delete('/:id', (req, res) => {
    res.send('delete contact');
});

module.exports = router;