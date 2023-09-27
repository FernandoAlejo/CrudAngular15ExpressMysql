const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql2 = require('mysql2');
const db = require("./db")
const app = express();
const notasRoutes = require('./routes/notas');
app.use(bodyParser.json());

app.use(cors());

  app.use('/', notasRoutes);
app.listen(3002, () => {
    console.log('Server listening on port 3002');
  });