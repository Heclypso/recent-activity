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
        
        const newDevice = document.querySelector("#new-device-target")
        const newLocal = document.querySelector("#new-local-target")
        const newBrowser = document.querySelector("#new-browser-target")
        const newSection = document.querySelector("#new-section-target")

        const oldDevice = document.querySelector("#old-device-target")
        const oldLocal = document.querySelector("#old-local-target")
        const oldBrowser = document.querySelector("#old-browser-target")
        const oldSection = document.querySelector("#old-section-target")

        const activityIcon = document.querySelector("img.activity-icon-history")
        const statusMessage = document.querySelector(".message__text")

        oldDevice.innerText = newDevice.innerText
        oldLocal.innerText = newLocal.innerText
        oldBrowser.innerText = newBrowser.innerText
        oldSection.innerHTML = newSection.innerHTML
        activityIcon.src = './images/danger-activity.svg'
        statusMessage.innerHTML = 'Você possui atividades suspeitas de 1 mês atrás relacionada a uma de suas contas vinculadas neste e-mail. <a class="message__link text-big" href="#">Saiba mais.</a>'

        newDevice.innerText = 'Linux'
        newLocal.innerText = 'Chengdu, China'
        newBrowser.innerText = 'Safari'
        newSection.innerHTML =  '<img class="activity-icon activity-icon-history" src="./images/danger-activity.svg" alt="Ícone da atividade atual">Atividade suspeita'
        newSection.classList.add('section--danger')
    } else {
        console.log("Nenhuma invasão detectada.")
    }
}