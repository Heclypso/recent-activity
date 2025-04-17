import {existeAlgumaAnomaliaDetectada, setItensDoHistoricoDeAnomalias} from './package.min.js'

setItensDoHistoricoDeAnomalias()

document.querySelector('.btn-trigger').addEventListener('click', () => {
    existeAlgumaAnomaliaDetectada()  
}) 
