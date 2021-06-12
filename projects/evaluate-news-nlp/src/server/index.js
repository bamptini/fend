/* The code is executed using npm run build - This starts server and sets up all required routes*/

// Create endpoint object to hold data from POST requests
nlpData = {};

// CREATE VARIABLE FOR HIDING API KEY
const dotenv = require('dotenv');
dotenv.config();

// API REFERENCES
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;
const language = '&lang=en&url='
const url = 'http://naturalpermanentmakeup.co.uk'

console.log(`Your API key is ${process.env.API_KEY}`);

// START EXPRESS
const express = require('express')

// START APP
const app = express();

// DEPENDENCIES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// OTHER DEPENDENCIES
const path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');

// CORS FOR CROSS ORIGIN ALLOWANCE
const cors = require('cors');
app.use(cors());

// NODE-FETCH
const fetch = require('node-fetch');

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SETUP DEPLOYMENT FOLDER
app.use(express.static('dist'))
console.log(__dirname);

// ASSIGN PORT
app.listen(8081, function () {
    console.log('Example app listening on production port 8081!')
});

// ADD SOME COMMENTS HERE...
app.get('/', function (req, res) {
res.sendFile(path.resolve('src/client/views/index.html'))
});

// GET DATA FROM ENDPOINT
app.get('/all', function (req, res) {
    console.log("GET data from /all")
    res.send(nlpData)
});

// POST DATA FOR 
app.post('/urlPost', async (request, response) => {
    try {
        const apiResult = await fetch(`${baseUrl}${apiKey}${language}${request.body.formURL}`);
        console.log(apiResult);

        let newData = request.body;
    } catch(error) {
        console.log("Hit Error", error);
    }
})