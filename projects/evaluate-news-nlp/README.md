# Project Name

evaluate new-nlp

## Author 

This project was built by James Bampton from starter code provided as part of the Udacity Nano Degreee program  @ June 2021

# Project Description

Uses the MeaningCloud API to anaylse a submitted URL. User will enter a URL into the UI and submit. The URL is then parsed through the meancloud API, analysed and data returned to the UI. The code includes Unit tests than  can be run to validate the various .js files in the project

API inforamtion can be found at https://api.meaningcloud.com/sentiment-2.1



## Installation

Original project code can be found at https://github.com/bamptini/fend/tree/develop/projects/evaluate-news-nlp.

An API key will need to be requested from Meaning Cloud and a .env file created in root of project containing the following:

***

* API_ID=**************************
* API_KEY= ########################

Note that the API_ID is not required for this project, so can be left as is. The API_KEY variable will need to be changed to the API key provided by meaningcloud.

***

* cd ../evaluate-news-nlp
* $ npm install
* npm run start (starts server on port 8081)
* npm run build-dev (run development environment)
* npm run build-prod (run production environment)

***

### Unit testing

* npm run test