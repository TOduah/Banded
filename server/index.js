// // file to access database
// // import app from 'server'
// // import mongodb from 'mongodb'
// // import dotenv from 'dotenv'
// // dotenv.config()
// // const MongoClient = mongodb.MongoClient;

// // const PORT = process.env.PORT || 3000;


// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

const express = require('express');
// require('./db/mongoose');
const mongoose = require('mongoose');
// const User = require('./models/user');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
 



// app.use(express.json());


const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
// // const cors = require("cors");
// // const pool = require("./db");
// // const axios = require("axios");

// // let app = express();
// // let port = 3000;
// // let hostname = "localhost";


const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
// const PORT = 3000; 
let hostname = "localhost";


// // Multi-process to utilize all CPU cores.


if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

//   // Priority serve any static files.

  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
  // app.use(express.static('../react-ui/build'));
  app.use(express.json());
  app.use(cors());
  

  const uri = process.env.BANDER_DB_URI;
  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
  );
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

//   // All remaining requests return the React app, so it can handle routing.
  // app.use("*", (req, res) => res.status(404).json({ error: "not found"}))
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "../react-ui/build", "index.html"));
  // });
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../react-ui/public", "index.html"));
  });
  // app.get('/', async (req, res) => {
  //   User.find({}).then((users) => {
  //       res.send(users);
  //   }).catch((e) => {
  //       console.log('error: ' + e);
  //   })
  // });

  const bandsRouter = require('./routes/bands');
  const usersRouter = require('./routes/users');

  app.use(express.urlencoded({ extended: true }));
  app.use('/bands', bandsRouter);
  app.use('/users', usersRouter);

  // app.post('/add',(req, res) => {
  //   const username = req.body.username;
  //   const email = req.body.email;
  //   const password = req.body.password;
  //   const newUser = new User({username, email, password});
  //   newUser.save()
  //     .then(() => res.json('User added!'))
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });
  

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}



