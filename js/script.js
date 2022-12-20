const ckeckBox = document.getElementById('check')
const Pchecked = document.getElementById('p-check')
const formInputs = document.querySelector('.btn-env')
const content = document.querySelector('.content')
const inputEmail = document.querySelector('.input-email')
const inputName = document.querySelector('.input-name')
const exitText = 'exit-text'

const Fmsg = (text) => {
    const msgEnv = document.createElement('div')
    msgEnv.classList.add('msg-env')
    content.appendChild(msgEnv)

    const textEnv = document.createElement('p')
    textEnv.innerText = text;
    textEnv.classList.add(exitText)
    msgEnv.appendChild(textEnv)

    setTimeout(() => {
        textEnv.remove()
    }, 1000*5)
}   


function Fcheck() {
    if(ckeckBox.checked){
        Pchecked.textcontent = "Manter dados"
    }else{
        Pchecked.textcontent = "Não manter dados"
        textArea.value = ''
        inputEmail.value = ''
        inputName.value = ''
    }
}

formInputs.addEventListener('click', (e) => {
   // e.preventDefault()

    const textTrue = 'email enviado para ' + inputEmail.value
    const textFalse = "Preencha os dados e tente novamente"

    if(inputEmail.value){
         Fmsg(textTrue)
    }else if(inputName.length < 3){
        Fmsg(textFalse)
    }else{
        Fmsg(textFalse)
    }

    Fcheck()

})



//active area
const checkArea = document.getElementById('check-area')
const textArea = document.querySelector('.area')

function activeArea() {
    if(checkArea.checked){
        textArea.style.display = "block";
    }else{
        textArea.style.display = "none";
    }
}