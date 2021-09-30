// Dotenv handy for local config & debugging
require('dotenv').config()

// Core Express & logging stuff
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const { sequelize } = require("./models");
const errorHandler = require('./src/middleware/error-handler')


// Logging
app.use(logger('dev'))

//cors
const cors = require('cors')
const helmet = require('helmet')
app.use(
cors({
origin: (origin, callback) => callback(null, true),
credentials: true,
})
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
     next();
});

//wearing a helmet 

app.use(helmet());

// Parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



// Routes & controllers
app.get("/", (req, res) => res.json({ msg: "Welcome to Dragons of Midgard Api" }));
app.use("/api", require("./src/routes/nft.route"));

// Catch all route, generate an error & forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(errorHandler)




let port = process.env.PORT || 3000

// Start the server
app.listen(3001, async () => {
  console.log(`Server Started on port 3001`);
  await sequelize.authenticate();
  // await sequelize.sync({force:true , alter: true});
  console.log("DB connected");
});

module.exports = app