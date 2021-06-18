//POST DATA to route
export const postData = async ( baseUrl = '', data = {})=>{
  //console.log('postData.js ', baseUrl)
  //console.log('postData.js ', data)
  
  console.log('5')
  console.log(data)
  console.log(baseUrl)
  
  console.log ('postData =', (postData))
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
        console.log('6 - newData', newData)
        return newData;
      }catch(error) {
      console.log("Not another error", error);
      }
  };


  console.log("Done with postData")

//export{postData}; Added export at line 3 instead
