require('dotenv-flow').config();
const express = require('express');
const morgan = require('morgan');
const { connectDB } = require('./db');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');
const app = express();

// connect database
connectDB();

// init middleware
app.use(morgan('dev'));
app.use(express.json({ extended: false }));

// routes
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);

// errors
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// connect server
app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});
