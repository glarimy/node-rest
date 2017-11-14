var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./rest/routes/contactRoutes');
var cors = require('cors');

var app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use('/static/', express.static('/static'));
app.listen(8080);
console.log('Online Directory is running at 8080');