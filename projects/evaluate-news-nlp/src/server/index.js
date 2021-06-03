// Create endpoint onbject
nlpData ={};

// Create varibale for hiding API key
const dotenv = require('dotenv');
dotenv.config();

// API REFERENCES //

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = `${process.env.API_KEY}`; //630e7f329aa632f6fb3857e4c71f4be9
const language = '&lang=en&'

// Start Express
const express = require('express')

// Start App
const app = express();

// DEPENDENCIES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// OTHER DEPENDENCIES //

var path = require('path')
const mockAPIResponse = require('./mockAPI.js')

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* SERVER SPECIFICS */

// Setup deployment folder
app.use(express.static('dist'))
console.log(__dirname)


app.get('/', function (req, res) {
res.sendFile(path.resolve('src/client/views/index.html'))
})

// Assign port for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

///////////////////////////////////
//
///////////////////////////////////
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
