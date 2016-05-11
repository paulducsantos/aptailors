var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

const PORT = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var route = require('./routes/route.js');

route.routes(app);

app.listen(PORT, function() {
  console.log('Listening on ' + PORT);
})
