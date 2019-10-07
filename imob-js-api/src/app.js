'use strict'

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    db = require('./models');

const routes = require('./routes')

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));

app.use(cookieParser())

app.use('/', routes);

db.sequelize.sync( { force: true } )
    .then(() => {
        console.log('Conexão com db iniciada...');
    })
    .catch((error) => {
        console.log('DB Error: ' + error);
    });


module.exports = app;