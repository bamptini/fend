/* Global Variables */

/*GET data from WEB API using ASYNC
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
    }*/

  //CODE TO UPDATE UI - Have to export form this file to be able to import in index.js
  /*export const postUpdates = async()=>{  
            //const entries = await fetch('/urlPost');
            console.log(entries)
        console.log('8')
        try{
            const nlpData = await entries.json();
            document.getElementById('nlpResults').innerHTML = `Evaluation on entered URL is: ${nlpData.result}`;
        }
        catch(err){
            console.log('Error posting data ' + err);
        }}*/

        export const postUpdates = async (response) => {
          //const entries = await fetch('/urlPost');
          console.log(response)
          console.log('8')
          try {
            // const nlpData = await entries.json();
            const resultString = `Score tag: ${response.score_tag}; Irony: ${response.irony}; Confidence: ${response.confidence}; Subjectivity: ${response.subjectivity}`
            document.getElementById('results').innerHTML = `Evaluation on entered URL is: ${resultString}`;
          }
          catch (err) {
            console.log('Error posting data ' + err);
          }
        }