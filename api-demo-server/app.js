const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || '4200'
const app = express();

const router = require('./routes/routes');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', "Content-Type, Content-Length");
    res.header("Access-Control-Allow-Credentials", "true");

    //intercept OPTIONS method
    if ('OPTIONS' === req.method) {
        // respond with 200
        res.sendStatus(200);
    } else {
        // move on
        next();
    }
});

app.use('/', router);

app.listen(port, () => {
    console.log('listening to port', port);
})