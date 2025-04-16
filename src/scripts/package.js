const chamaApi = async () => {
    const endpoint = 'https://recent-activity-api.vercel.app/api'
    const resp = await fetch(endpoint)

    if (resp.status === 200) {
        const obj = await resp.json()
        return obj
    }
}
chamaApi()

const obj = await chamaApi()

function retornaAcessoAtual() {
    const acessoAtual = [`${obj.sistemaOperacional}`, `${obj.local}`, `${obj.navegador}`]
    return acessoAtual
}

function retornaAcessoCadastrado() { // retornaAcessoCadastrado foi criado dessa maneira para emular uma resposta do backend, para mais detalhes leia o readme.md
    const acessoCadastrado = ['Windows', 'São Paulo, Brasil', 'Google Chrome']
    return acessoCadastrado
}

export const existeAlgumaAnomaliaDetectada = () => {
    (() => { // Compara as informações recebidas de retornaAcessoAtual com as informações do retornaAcessoCadastrado
        let possuiAnomalias = false;
        
        if (retornaAcessoCadastrado() != retornaAcessoAtual()) {
            possuiAnomalias = true; 
        } else {  
            possuiAnomalias = false; 
        } 

        sessionStorage.setItem('possuiAnomalias', possuiAnomalias.toString());
        return possuiAnomalias;
    })();

    const possuiAnomaliasStorage = sessionStorage.getItem('possuiAnomalias')
    
    if (possuiAnomaliasStorage === 'true') {
        criaAnomalia()
        getItensDoHistoricoDeAnomalias()
    } else {
        console.log("Nenhuma anomalia detectada")
    }
}

function criaAnomalia() {
    const buttonImage = document.querySelector('img.btn-trigger__image')

    const oldDevice = document.querySelector("#old-device-target")
    const oldLocal = document.querySelector("#old-local-target")
    const oldBrowser = document.querySelector("#old-browser-target")
    const oldSection = document.querySelector("#old-section-target")

    const newDevice = document.querySelector("#new-device-target")
    const newLocal = document.querySelector("#new-local-target")
    const newBrowser = document.querySelector("#new-browser-target")
    const newSection = document.querySelector("#new-section-target")

    const activityIcon = document.querySelector("img.activity-icon-history")
    const statusMessage = document.querySelector(".message__text")

    buttonImage.src = "./images/danger-icon.svg"
    buttonImage.alt = "Icone de conta em perigo"

    oldDevice.innerText = newDevice.innerText
    oldLocal.innerText = newLocal.innerText
    oldBrowser.innerText = newBrowser.innerText
    oldSection.innerHTML = newSection.innerHTML
    oldSection.classList = newSection.classList

    newDevice.innerText = obj.sistemaOperacional;
    newLocal.innerText = obj.local;
    newBrowser.innerText = obj.navegador;
    newSection.innerHTML =  '<img class="activity-icon activity-icon-history" src="./images/danger-activity.svg" alt="Ícone da atividade atual">Atividade suspeita'
    newSection.classList.add('section--danger')

    activityIcon.src = './images/danger-activity.svg'

    if (newSection.attributes.length == 3) {
        oldSection.setAttribute(newSection.attributes[2].nodeName, newSection.attributes[2].nodeValue)
    }

    newSection.setAttribute('data-section', 'danger')    
    const sections = document.querySelectorAll('[data-section="danger"]').length

    if(sections > 1) {
        statusMessage.innerHTML = `Você possui ${sections} atividades suspeitas relacionadas a uma de suas contas vinculadas neste e-mail. <a class="message__link text-big" href="#">Saiba mais.</a>`
    } else {
        statusMessage.innerHTML = 'Você possui uma atividade suspeita relacionada a uma de suas contas vinculadas neste e-mail. <a class="message__link text-big" href="#">Saiba mais.</a>'
    }
}

// Os itens do historico de anomalias são armazenados no sessionStorage para que não desapareçam quando a página for recarragada, para mais detalhes leia o readme.md
function getItensDoHistoricoDeAnomalias() {
    try {
        const statusMessage = document.querySelector(".message__text").innerHTML

        const newDeviceContent = document.querySelector("#new-device-target").innerText
        const newLocalContent = document.querySelector("#new-local-target").innerText
        const newBrowserContent = document.querySelector("#new-browser-target").innerText
        const newSectionContent = document.querySelector("#new-section-target").innerHTML
        const newSectionClassList = document.querySelector("#new-section-target").classList

        const newSectionAttributeName = document.querySelector("#new-section-target").attributes[2].nodeName
        const newSectionAttributeValue = document.querySelector("#new-section-target").attributes[2].nodeValue
    
        const oldDeviceContent = document.querySelector("#old-device-target").innerText
        const oldLocalContent =  document.querySelector("#old-local-target").innerText
        const oldBrowserContent = document.querySelector("#old-browser-target").innerText
        const oldSectionContent = document.querySelector("#old-section-target").innerHTML
        const oldSectionClassList = document.querySelector("#old-section-target").classList

        // Durante a primeira execução dessa função já é esperado que esses dois atributos abaixo não estejam definidos.
        const oldSectionAttributeName = document.querySelector("#old-section-target").attributes[2].nodeName
        const oldSectionAttributeValue = document.querySelector("#old-section-target").attributes[2].nodeValue
    
        sessionStorage.setItem('statusMessageOnStorage', statusMessage.toString())
    
        sessionStorage.setItem('newDeviceContentOnStorage', newDeviceContent)
        sessionStorage.setItem('newLocalContentOnStorage', newLocalContent)
        sessionStorage.setItem('newBrowserContentOnStorage', newBrowserContent)
        sessionStorage.setItem('newSectionContentOnStorage', newSectionContent.toString())
        sessionStorage.setItem('newSectionClassListOnStorage', newSectionClassList.toString())
        sessionStorage.setItem('newSectionAttributeNameOnStorage', newSectionAttributeName.toString())
        sessionStorage.setItem('newSectionAttributeValueOnStorage', newSectionAttributeValue.toString())
        
        sessionStorage.setItem('oldDeviceContentOnStorage', oldDeviceContent)
        sessionStorage.setItem('oldLocalContentOnStorage', oldLocalContent)
        sessionStorage.setItem('oldBrowserContentOnStorage', oldBrowserContent)
        sessionStorage.setItem('oldSectionContentOnStorage', oldSectionContent.toString())
        sessionStorage.setItem('oldSectionClassListOnStorage', oldSectionClassList.toString())
        sessionStorage.setItem('oldSectionAttributeNameOnStorage', oldSectionAttributeName.toString())
        sessionStorage.setItem('oldSectionAttributeValueOnStorage', oldSectionAttributeValue.toString())
    } catch (error) {
        console.log("Os atributos de newSectionAttribute e oldSectionAttribute ainda não foram definidos");
    }
}

export function setItensDoHistoricoDeAnomalias() {
    const possuiAnomaliasStorage = sessionStorage.getItem('possuiAnomalias')

    if (possuiAnomaliasStorage === 'true') {
        try {
            document.querySelector(".message__text").innerHTML = sessionStorage.getItem('statusMessageOnStorage')

            document.querySelector("#new-device-target").innerText = sessionStorage.getItem('newDeviceContentOnStorage')
            document.querySelector("#new-local-target").innerText = sessionStorage.getItem('newLocalContentOnStorage')
            document.querySelector("#new-browser-target").innerText = sessionStorage.getItem('newBrowserContentOnStorage')
            document.querySelector("#new-section-target").innerHTML = sessionStorage.getItem('newSectionContentOnStorage')
            document.querySelector("#new-section-target").classList = sessionStorage.getItem('newSectionClassListOnStorage')
            document.querySelector("#new-section-target").setAttribute(`${sessionStorage.getItem('newSectionAttributeNameOnStorage')}`, `${sessionStorage.getItem('newSectionAttributeValueOnStorage')}`)
        
            document.querySelector("#old-device-target").innerText = sessionStorage.getItem('oldDeviceContentOnStorage')
            document.querySelector("#old-local-target").innerText = sessionStorage.getItem('oldLocalContentOnStorage')
            document.querySelector("#old-browser-target").innerText = sessionStorage.getItem('oldBrowserContentOnStorage')
            document.querySelector("#old-section-target").innerHTML = sessionStorage.getItem('oldSectionContentOnStorage')
            document.querySelector("#old-section-target").classList = sessionStorage.getItem('oldSectionClassListOnStorage')
            document.querySelector("#old-section-target").setAttribute(`${sessionStorage.getItem('oldSectionAttributeNameOnStorage')}`, `${sessionStorage.getItem('oldSectionAttributeValueOnStorage')}`)
        } catch (error) {
            console.log("Os atributos de newSectionAttribute e oldSectionAttribute ainda não foram definidos");
        }
    }
}
