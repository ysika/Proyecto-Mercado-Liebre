const express = require('express');
const path = require('path');

const app = express();

//app.use('/static', express.static(__dirname + './public'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.listen(3000, () => console.log("Servidor corriendo"));