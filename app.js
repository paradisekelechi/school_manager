const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const students = require('./dump/students');
const models = require('./models/index');
const routes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.get('/student', function (req, res) {
    res.status(200).send({
        students
    })
});

app.get('/', function (req, res) {
    res.status(200).send({
        message: 'we are here',
        success: true
    })
});

const server = http.createServer(app);
const port = 8080;
server.on('error', function (err) {
    console.log('An error occurred. ', err);
});

server.listen(port, function () {
    console.log('Server started on port ' + port);
});