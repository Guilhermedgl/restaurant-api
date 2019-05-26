const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());

app.use(session({
  secret: 'restaurant-api',
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'],
}));

// routes
const index = require('./routes');
const auth = require('./routes/auth');

app.use('/api', index);
app.use('/api', auth);

module.exports = app;
