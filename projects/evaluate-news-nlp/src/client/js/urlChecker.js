function checkURL(inputText) {
    console.log(2)
    console.log("::: Running checkURL :::", inputText);
    const urlChecker = new RegExp(/^(http|https):\/\/[^ "]+$/);
    
    if (inputText.match(urlChecker)){
    //const checker = inputText.match(urlChecker);
    console.log(urlChecker);
    
        
    //if (urlChecker(inputText)){
            console.log("Url is valid")
            alert("URL Valid click to continue with processing")
            return true;
        }

        else [
            console.log("Url is not valid"),
            alert("URL NOT Valid please try again")

        ]
}
export { checkURL }
