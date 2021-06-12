
const handleSubmit = async(event) => {
    event.preventDefault()

    // CHECK URL ASSIGN TO VARIABLE
    const formURL = document.getElementById('inputURL').value
    Client.checkForName(formURL)
    console.log(formURL)

    console.log("::: Form Submitted :::")
       
   try{

    let response = await Client.postData("/urlPost",{nplData:formURL})
    console.log('object returned' + response)
    
    postUpdates(response)    
}
catch (error) {
    console.group(error)
}
}
export { handleSubmit }
