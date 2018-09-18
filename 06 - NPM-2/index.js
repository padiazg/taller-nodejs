const express = require("express");
const moment = require("moment");
const app = express();

app.use((req, res, next) => {
    res.hora = Date.now()
    next();
})

app.get('/hora', (req, res) => {
    const hora = moment(res.hora).format("YYYY-MM-DD HH:mm");
    res.status(200).send('Hola con hora '+hora);
});

app.get('/', (req, res) => {
    console.log("Hola mundo desde Express");
    res.send('Hola mundo desde Express');
});

app.listen(3000, () =>  console.log('Example app listening on port 3000!'))
