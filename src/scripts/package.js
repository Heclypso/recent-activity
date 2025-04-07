const endpoint = ''

export const chamarApi = async () => {
    const resp = await fetch(endpoint)

    if (resp.status === 200) {
        const obj = await resp.json()
        console.log(obj)
    }
}

const button = document.querySelector('.btn-trigger')
const buttonImage = document.querySelector('img.btn-trigger__image')

export const verificaAnomalias = () => {
    
    let possuiAnomalias = false;

    if (button.classList.contains('btn-trigger--danger')) {
        buttonImage.src = "./images/danger-icon.svg"
        buttonImage.alt = "Icone de conta em perigo"
        possuiAnomalias = true;    
    } else {
        buttonImage.src = "./images/protected-icon.svg"
        buttonImage.alt = "Icone de conta protegida"  
        possuiAnomalias = false; 
    } 

    sessionStorage.setItem('possuiAnomalias', possuiAnomalias.toString());
    return possuiAnomalias;
}

export const existeAlgumaAnomaliaDetectada = () => {
    const possuiAnomaliasStorage = sessionStorage.getItem('possuiAnomalias')

    if (possuiAnomaliasStorage === 'true') {
        buttonImage.src = "./images/danger-icon.svg"
        buttonImage.alt = "Icone de conta em perigo"
        button.classList.toggle('btn-trigger--danger')
        
        const device = document.querySelector("#device-target")
        const local = document.querySelector("#local-target")
        const browser = document.querySelector("#browser-target")
        const section = document.querySelector("#section-target")

        device.innerText = 'Linux'
        local.innerText = 'Chengdu, China'
        browser.innerText = 'Safari'
        section.innerText =  'Atividade suspeita'
        section.classList.add('section--danger')

    } else {
        console.log("Nenhuma invasão detectada.")
    }
}