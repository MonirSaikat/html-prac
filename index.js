const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello');
});

app.listen(3000, function () {
  console.log(`Server is running 🚀🚀`);
})