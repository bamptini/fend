/* Global Variables */

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