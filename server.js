const express = require("express");
const app = express(); // create express app
const path = require("path");
app.use(require('./routes/users.js'));


app.use(express.static(path.join(__dirname, '/client/build')));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`La aplicacion Piku inicio en el puerto ${PORT}`);
});