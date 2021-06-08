function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const urlChecker = new RegExp(/^(http|https):\/\/[^ "]+$/);
        if (urlChecker(inputText)){
            console.log("Url checked ok")
            alert("URL Valid")
            return true;
        }

        else [
            console.log("Url not valid")
        ]
}

export { checkForName }
