import { postUpdates } from '/src/client/js/app.js';

const handleSubmit = async(event) => {
    event.preventDefault()
    console.log('1 And we are off')

    // CHECK URL ASSIGN TO VARIABLE
    const formURL = document.getElementById('inputURL').value 
    Client.checkURL(formURL) //Call checkURL method in the urlChecker.js file
    console.log('3'),
    console.log ('Entered url is ' ,formURL),
    console.log("::: Form Submitted :::")
    //console.log('NLP data 1 ',nlpData)
       
   try{
    console.log('4 about to call postData.js')
    let response = await Client.postData('/urlPost',{nlpData: formURL}) // Here we call postData.js with two params /urlPost and entered URL
    console.log('object returned ', response)
    //console.log('NLP data 2 ',nlpData)
    
    postUpdates(response)
}
catch (error) {
    console.group(error)
}
}
export { handleSubmit, postUpdates}


