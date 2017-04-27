const express = require('express');
const router = express.Router();

//Register
router.get('/register', (req, res, next) => {
 res.send('REGISTER');
});

//Authenticate
router.get('/authenticate', (req, res, next) => {
 res.send('Authenticate');
});

//Register
router.get('/register', (req, res, next) => {
 res.send('REGISTER');
});

module.exports = router;