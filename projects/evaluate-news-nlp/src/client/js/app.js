/* Global Variables */

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = 'key=630e7f329aa632f6fb3857e4c71f4be9&';
const language = '&lang=en&url='
//const apiKey = process.env.API_KEY


// variable to represent the URL to be processed
//const newUrl = document.getElementById('inputURL').value;
//console.log('New URL is '+ newUrl)


document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
console.log('1')

const newUrl = document.getElementById('url').value;
console.log('New URL is '+ newUrl)
  
    // Call API to evaluate entered URL for NLP - based on user input into element.
    newInput(baseUrl,apiKey,language,newUrl)
        
    .then(function(data){
      console.log('4')
    // Add all data into POST request    
        postData('/nlp', {
                text:data.sentence_list.text, 
                });
                console.log(data.sentence_list.text)
                console.log('6')
            
    }) .then( () =>{
      console.log('7')
        postUpdates()
     }) 
    };

//GET data from WEB API using ASYNC
    const newInput = async (baseURL, apiKey, language, newUrl)=>{
      console.log('2')  
      console.log('New Input ', {baseURL, apiKey, language, newUrl})
      const response = await fetch(baseURL+apiKey+language+newUrl) // await until all data is received from API call, then try
      try { // If fetch goes well    
        const data = await response.json(); // Return data as JSON
        console.log('3 ', data)
        console.log(response)
        return data;
      }  catch(error) { //If fetch goes wrong then error.
        console.log("error", error);
        // appropriately handle the error
      }
    }

//POST DATA function
const postData = async ( baseUrl = '', data = {})=>{
  console.log('5')
      const response = await fetch(baseUrl, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });
    //console.log(response);
      try {
        const newData = await response.json();
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

  //CODE TO UPDATE UI
  const postUpdates = async()=>{  
            const entries = await fetch('/nlp');
            console.log(entries)
        console.log('8')
        try{
            const nlpData = await entries.json();
            document.getElementById('nlpResults').innerHTML = `Evaluation on entered URL is: ${nlpData.text}`;
        }
        catch(err){
            console.log('Error posting data ' + err);
        }}