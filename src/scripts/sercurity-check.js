const possuiAnomalias = sessionStorage.getItem('possuiAnomalias');

const statusContainer = document.querySelector('.status')
const statusIcon = document.querySelector('img.status__icon')
const accordionLeftIcon = document.querySelector('.accordion__left-icon')
const accordionText = document.querySelector('.accordion__head__subtitle')
const statusSubtitle = document.querySelector('.status__subtitle')

if (possuiAnomalias === 'true') { // Se existir alguma anomalia a página de security-check irá comunicar essa anomalia para o usuário.
    statusContainer.classList.add('status--danger')
    accordionText.classList.add('accordion__head__subtitle--danger')
    accordionText.innerText = 'Sua conta pode estar em risco'
    statusIcon.src = './images/danger-icon.svg'
    statusIcon.alt = 'Ícone do status da conta em perigo'
    statusSubtitle.innerText = 'Uma ação de segurança encontrada'
    accordionLeftIcon.src = './images/accordion-danger.svg'
    accordionLeftIcon.alt = 'Ícone de conta em perigo do accordion'
} else {
    console.log("Nenhuma invasão detectada.")
}