// // file to access database
// // import app from 'server'
// // import mongodb from 'mongodb'
// // import dotenv from 'dotenv'
// // dotenv.config()
// // const MongoClient = mongodb.MongoClient;

// // const PORT = process.env.PORT || 3000;

const express = require('express');
require('./db/mongoose');
const User = require('./model/user');


// const app = express();
const port = process.env.PORT || 5000;

// app.use(express.json());

// const express = require('express');
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
// const PORT = process.env.PORT || 5000;

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

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

//   // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.get('/', async (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((e) => {
        console.log('error: ' + e);
    })
  });
//   app.listen(PORT, function () {
//     console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
//   });
  app.listen(port, () => {
    console.log('server is up on port ' + port);
  });
}



