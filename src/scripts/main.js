import {existeAlgumaAnomaliaDetectada, setItensDoHistoricoDeAnomalias} from './package.min.js'

document.querySelector('.btn-trigger').addEventListener('click', () => {
    existeAlgumaAnomaliaDetectada()  
}) 

setItensDoHistoricoDeAnomalias()