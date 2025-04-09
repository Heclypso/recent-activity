import { verificaAnomalias, existeAlgumaAnomaliaDetectada, setItensDoHistoricoDeAnomalias} from './package.min.js'

const button = document.querySelector('.btn-trigger')

button.addEventListener('click', () => {
    button.classList.toggle('btn-trigger--danger')
    verificaAnomalias()
    existeAlgumaAnomaliaDetectada()
}) 

setItensDoHistoricoDeAnomalias()