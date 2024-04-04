const inputName = document.getElementById("name");
const spanErrorName = document.getElementById("name-error");

const inputCPF = document.getElementById("CPF");
const spanErrorCPF = document.getElementById("cpf-error");

const inputEmail = document.getElementById("email");
const spanErrorEmail = document.getElementById("email-error");

const inputsActivity = document.getElementsByName("activity");
const spanErrorSubjects = document.getElementById("subjects-error");

const inputMessage = document.getElementById("message");
const spanErrorMessage = document.getElementById("message-error");

const inputBirthdate = document.getElementById("birthdate");
const inputPhone = document.getElementById("phone");
const inputPlayer = document.getElementById("player");
const inputContact = document.querySelector("input[name=subject]:checked");
const inputFile = document.getElementById("file")

const sendButton = document.getElementById("send-button");
sendButton.onclick = () => {
    let error = false;
    [ spanErrorName, spanErrorCPF, spanErrorEmail ].forEach((e) => e.innerHTML = "");
    [ inputName, inputCPF, inputEmail ].forEach((e) => e.style.border = "none")
    inputMessage.style.border = "solid 1px black"
    spanErrorSubjects.style.display = "none";
    

    if(inputName.value.split(" ").length < 2) {
        spanErrorName.textContent = "Nome precisa ser composto por mais de uma palavra, sendo separadas por espaço";
        inputName.style.border = "solid red 1px";
        error = true;
    }

    if(inputCPF.value.length != 14) {
        spanErrorCPF.textContent = "CPF deve conter 14 dígitos incluindo pontos e traços.";
        inputCPF.style.border = "solid red 1px";
        error = true;
    } 
    
    const emailContent = inputEmail.value;
    if(emailContent.length == 0 || emailContent[0] == "@" || !emailContent.includes(".") || !emailContent.includes("@") || (emailContent.indexOf(".") - emailContent.indexOf("@")) < 2) {
        spanErrorEmail.textContent = "O @ do email não pode ser o primeiro caractere e precisam existir dois caracteres entre o '@' e o '.'.";
        inputEmail.style.border = "solid red 1px"
        error = true;
    }

    if(inputMessage.value.length < 1) {
        spanErrorMessage.textContent = "Mensagem não pode ser vazia!"
        inputMessage.style.border = "solid red 1px";
        error = true;
    }
    
    let checked = false;
    inputsActivity.forEach((e) => { if(e.checked) checked = true })
    if(!checked) {
        spanErrorSubjects.innerHTML = 'Nenhum assunto marcado!<button id="close-alert-button" type="button" onclick>X</button>'
        spanErrorSubjects.style.display = "flex";
        document.getElementById("close-alert-button").onclick = () => spanErrorSubjects.style.display = "none"
    }
    
    if(!error) {
        const subjects = [];
        inputsActivity.forEach((e) => { if(e.checked) subjects.push(e.value) })

        const confirmModal = new bootstrap.Modal('#confirm-modal');
        document.getElementById("name-confirm").textContent = inputName.value;
        document.getElementById("cpf-confirm").textContent = inputCPF.value;
        document.getElementById("email-confirm").textContent = inputEmail.value;
        document.getElementById("birthdate-confirm").textContent = inputBirthdate.value;
        document.getElementById("phone-confirm").textContent = inputPhone.value;
        document.getElementById("player-confirm").textContent = inputPlayer.checked ? "Sim" : "Não";
        document.getElementById("subjects-confirm").textContent = subjects;
        document.getElementById("contact-confirm").textContent = inputContact ? inputContact.value : "";
        document.getElementById("message-confirm").textContent = inputMessage.value;
        document.getElementById("file-confirm").textContent = inputFile.value;
        
        confirmModal.show()
    }
}
