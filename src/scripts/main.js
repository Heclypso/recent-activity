import { chamarApi, verificaAnomalias, existeAlgumaAnomaliaDetectada } from './package.min.js'

const button = document.querySelector('.btn-trigger')

button.addEventListener('click', () => {
    chamarApi()
    button.classList.toggle('btn-trigger--danger')
    verificaAnomalias()
}) 

existeAlgumaAnomaliaDetectada()