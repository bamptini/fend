import { postUpdates } from './app.js';
import {postData} from './postData.js';

export const handleSubmit = async(event) => {
    event.preventDefault()
    //console.log('1')

    // CHECK URL ASSIGN TO VARIABLE
    const formURL = document.getElementById('inputURL').value 
    Client.checkURL(formURL) //Call checkURL method in the urlChecker.js file
    //console.log('3')
    console.log("::: Form Submitted :::")
        
   try{
    //console.log('4')
    let response = await Client.postData('/urlPost',{nlpData: formURL}) // Here we call postData.js with two params /urlPost and entered URL
    //console.log('7')   
    //console.log('8 Now calling postUpdates..')
    postUpdates(response)
}
catch (error) {
    console.group(error)
}
}
//export { handleSubmit} added export to line 3 instead
export { postUpdates }
export { postData}


