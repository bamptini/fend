import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './js/app.js'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import img from './images/infoview.png'

export{
    checkForName,
    handleSubmit
}

document.getElementById('logo').src = img

console.log(checkForName);

alert("Welcome here is my pop-up")
console.log("CHANGE!!");
