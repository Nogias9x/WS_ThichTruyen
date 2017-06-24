'use strict';
var express = require('express'),
    morgan = require('morgan'),
    db = require('./l_database'),
    bodyParser = require('body-parser'),
    handle404 = require('./handle404.js'),
    appController = require('./appController.js'),
    util = require('util'),
    myUtil = require('./myUtil.js');


const PORT = 12491;
var app = express();

// cho phép truy xuất các file trong thư mục thông qua URL
app.use('/_public', express.static(__dirname + '/_public'));

app.use(morgan('dev'));

// middleware để access req.query.param bằng req.body.param
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// router
app.use('/', appController);

app.use(handle404);

app.listen(PORT, function() {
    console.log('SERVER is running at port ' + PORT);
});



