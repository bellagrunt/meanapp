const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

// on connection
mongoose.connection.on('connected', () => {
    console.log('connected to databse ' +config.database);
});

// on error
mongoose.connection.on('error', (err) => {
    console.log('database error ' +err);
});

const app = express();

const users = require('./routes/users');
//port number
const port = 3000;

// cors middleware
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'public/index/html'));
});

// start server
app.listen(port, () => {
    console.log('Server started on port' +port);
});