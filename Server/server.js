require('dotenv').config();

const express = require('express');
const { MongoClient } = require('mongodb');
const http = require('http');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const mongo_uri = process.env.MONGO_URI;

const app = express();
const server = http.createServer(app);

const PORT = 3000;

app.use(cors());
app.use(express.json());


app.use(morgan('dev'));

const usersRouter = require('./routes/user.route');
const coursesRouter = require('./routes/courses.router');

const localUrl = "mongodb://localhost:27017/udemy-clone"
 
const API_VERSION = '/v1';

mongoose.connect(mongo_uri)
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.stack);
  });


app.use(`${API_VERSION}/users`, usersRouter);
app.use(`${API_VERSION}/courses`, coursesRouter);

module.exports = app;
