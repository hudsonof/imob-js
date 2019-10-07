'use strict'

const app = require('./src/app');
const HOST = 'localhost';
const PORT = process.env.PORT || 8011;

app.listen(PORT, HOST, () => {
    console.log('Servidor iniciado em http://%s:%s', HOST, PORT);
});