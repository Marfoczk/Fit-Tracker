const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');


require('dotenv').config();

// ** MIDDLEWARE / WHITELIST ** //
const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://fit-tracker-mrf.herokuapp.com/'];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express();
const port = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection succesfull')
})

//** HEROKU ENVOIRNMENT VARIABLE **//
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// app.use(express.static(path.join(__dirname, 'client/build')));
// // Handle React routing, return all requests to React app
//   app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });

const exercisesRouter = require('./routes/exercises')
app.use('/exercises', exercisesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});