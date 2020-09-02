const express = require('express');
var request = require('request');
const app = express();
port = process.env.PORT || 5000,
    cors = require("cors");

app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: "We did it!" });
});

app.get('/jobs', (req, res) => {
    request('https://divercity-test.herokuapp.com/jobs', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body)
        }
    })
})

app.get('/login', (req, res) => {
    request('https://divercity-test.herokuapp.com/login', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body)
        }
    })
})

app.get('/register', (req, res) => {
    request('https://divercity-test.herokuapp.com/register', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body)
        }
    })
})





app.listen(port, () => console.log(`Listening on port ${port}.`))