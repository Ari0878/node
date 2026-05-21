const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(3000, (port) => {
    console.log('escucha desde el puerto 3000');
});