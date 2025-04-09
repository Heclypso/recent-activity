// const endpoint = ''

// export const chamarApi = async () => {
//     const resp = await fetch(endpoint)

//     if (resp.status === 200) {
//         const obj = await resp.json()
//         console.log(obj)
//     }
// }

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
        criaAnomalia()
        getItensDoHistoricoDeAnomalias()
    } else {
        console.log("Nenhuma invasão detectada.")
    }
}

function criaAnomalia() {
    buttonImage.src = "./images/danger-icon.svg"
    buttonImage.alt = "Icone de conta em perigo"

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
    oldSection.classList = newSection.classList

    newDevice.innerText = 'Linux'
    newLocal.innerText = 'Chengdu, China'
    newBrowser.innerText = 'Safari'
    newSection.innerHTML =  '<img class="activity-icon activity-icon-history" src="./images/danger-activity.svg" alt="Ícone da atividade atual">Atividade suspeita'
    newSection.classList.add('section--danger')
}

function getItensDoHistoricoDeAnomalias() {
    const statusMessage = document.querySelector(".message__text").innerHTML

    const newDeviceContent = document.querySelector("#new-device-target").innerText
    const newLocalContent = document.querySelector("#new-local-target").innerText
    const newBrowserContent = document.querySelector("#new-browser-target").innerText
    const newSectionContent = document.querySelector("#new-section-target").innerHTML
    const newSectionClassList = document.querySelector("#new-section-target").classList

    const oldDeviceContent = document.querySelector("#old-device-target").innerText
    const oldLocalContent =  document.querySelector("#old-local-target").innerText
    const oldBrowserContent = document.querySelector("#old-browser-target").innerText
    const oldSectionContent = document.querySelector("#old-section-target").innerHTML
    const oldSectionClassList = document.querySelector("#old-section-target").classList

    sessionStorage.setItem('statusMessageOnStorage', statusMessage.toString())

    sessionStorage.setItem('newDeviceContentOnStorage', newDeviceContent.toString())
    sessionStorage.setItem('newLocalContentOnStorage', newLocalContent.toString())
    sessionStorage.setItem('newBrowserContentOnStorage', newBrowserContent.toString())
    sessionStorage.setItem('newSectionContentOnStorage', newSectionContent.toString())
    sessionStorage.setItem('newSectionClassListOnStorage', newSectionClassList.toString())
    
    sessionStorage.setItem('oldDeviceContentOnStorage', oldDeviceContent.toString())
    sessionStorage.setItem('oldLocalContentOnStorage', oldLocalContent.toString())
    sessionStorage.setItem('oldBrowserContentOnStorage', oldBrowserContent.toString())
    sessionStorage.setItem('oldSectionContentOnStorage', oldSectionContent.toString())
    sessionStorage.setItem('oldSectionClassListOnStorage', oldSectionClassList.toString())

}

export function setItensDoHistoricoDeAnomalias() {
    const possuiAnomaliasStorage = sessionStorage.getItem('possuiAnomalias')

    if (possuiAnomaliasStorage === 'true') {

        document.querySelector(".message__text").innerHTML = sessionStorage.getItem('statusMessageOnStorage')

        document.querySelector("#new-device-target").innerText = sessionStorage.getItem('newDeviceContentOnStorage')
        document.querySelector("#new-local-target").innerText = sessionStorage.getItem('newLocalContentOnStorage')
        document.querySelector("#new-browser-target").innerText = sessionStorage.getItem('newBrowserContentOnStorage')
        document.querySelector("#new-section-target").innerHTML = sessionStorage.getItem('newSectionContentOnStorage')
        document.querySelector("#new-section-target").classList = sessionStorage.getItem('newSectionClassListOnStorage')
    
        document.querySelector("#old-device-target").innerText = sessionStorage.getItem('oldDeviceContentOnStorage')
        document.querySelector("#old-local-target").innerText = sessionStorage.getItem('oldLocalContentOnStorage')
        document.querySelector("#old-browser-target").innerText = sessionStorage.getItem('oldBrowserContentOnStorage')
        document.querySelector("#old-section-target").innerHTML = sessionStorage.getItem('oldSectionContentOnStorage')
        document.querySelector("#old-section-target").classList = sessionStorage.getItem('oldSectionClassListOnStorage')
    }
}
