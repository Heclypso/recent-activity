import {existeAlgumaAnomaliaDetectada, setItensDoHistoricoDeAnomalias} from './package.min.js'

const button = document.querySelector('.btn-trigger')
const buttonImage = document.querySelector('img.btn-trigger__image')


button.addEventListener('click', () => {
    // button.classList.toggle('btn-trigger--danger')
    // buttonImage.src = "./images/protected-icon.svg"
    // buttonImage.alt = "Icone de conta protegida"
    existeAlgumaAnomaliaDetectada()  
}) 

setItensDoHistoricoDeAnomalias()