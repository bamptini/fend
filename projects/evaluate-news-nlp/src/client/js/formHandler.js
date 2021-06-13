
const handleSubmit = async(event) => {
    event.preventDefault()

    // CHECK URL ASSIGN TO VARIABLE
    const formURL = document.getElementById('inputURL').value
    Client.checkURL(formURL)
    console.log('3'),
    console.log ('Entered url is ' ,formURL),
    console.log("::: Form Submitted :::")
    //console.log('NLP data 1 ',nlpData)
       
   try{
    console.log('4')
    let response = await Client.postData("/urlPost",{nlpData:formURL})
    console.log('object returned ' + response)
    console.log('NLP data 2 ',nlpData)
    
    postUpdates(response)    
}
catch (error) {
    console.group(error)
}
}
export { handleSubmit }
