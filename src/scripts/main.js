import { chamarApi } from './package.min.js'

const button = document.querySelector('.btn-trigger')
const buttonImage = document.querySelector('img.btn-trigger__image')

button.addEventListener('click', function(){
    chamarApi()
    button.classList.toggle('btn-trigger--danger')

    if (button.classList.contains('btn-trigger--danger')) {
        buttonImage.src = "./images/danger-icon.svg"
        buttonImage.alt = "Icone de conta em perigo"    
    } else {
        buttonImage.src = "./images/protected-icon.svg"
        buttonImage.alt = "Icone de conta protegida"   
    }
}) 

