import { checkURL } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import { postData } from './js/postData'
import { postUpdates } from './js/app'

import './js/app.js'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import img from './images/infoview.png'

export{
    checkURL,
    handleSubmit,
    postData,
    postUpdates,
}

document.getElementById('logo').src = img

console.log(checkURL);


