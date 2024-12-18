// Regex para validação
let validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Email padrão
let validPhone = /^[0-9]{9,9}$/; // Apenas números, 9 caracteres
let validName = /^[a-zA-Z]{2,30}$/; // Nomes apenas com letras, entre 2 e 30 caracteres

// Elementos de entrada
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone');
let messageInput = document.getElementById('message');
let submitButton = document.getElementById('submit-button');

// Flags de controle
let nameTouched = false;
let emailTouched = false;
let phoneTouched = false;
let messageTouched = false;

function validateInputs() {
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let phone = phoneInput.value.trim();
  let message = messageInput.value.trim();

  let isNameValid = validName.test(name);
  let isEmailValid = validEmail.test(email);
  let isPhoneValid = validPhone.test(phone);

  // Validação do nome
  if (nameTouched) {
    if (!isNameValid) {
      nameInput.style.borderColor = "red";
    } else {
      nameInput.style.borderColor = "green";
    }
  }

  // Validação do email
  if (emailTouched) {
    if (!isEmailValid) {
      emailInput.style.borderColor = "red";
    } else {
      emailInput.style.borderColor = "green";
    }
  }

  // Validação do telefone
  if (phoneTouched) {
    if (!isPhoneValid) {
      phoneInput.style.borderColor = "red";
    } else {
      phoneInput.style.borderColor = "green";
    }
  }

  // Validação da mensagem
  if (messageTouched) {
    if (message.length === 0) {
      messageInput.style.borderColor = "red";
    } else {
      messageInput.style.borderColor = "green";
    }
  }

  // Ativar/desativar botão de envio
  submitButton.disabled = !(isNameValid && isEmailValid && isPhoneValid && message.length > 0);
}

// Eventos para os inputs
if (nameInput) {
  nameInput.addEventListener('input', function () {
    nameTouched = true;
    validateInputs();
  });
}

if (emailInput) {
  emailInput.addEventListener('input', function () {
    emailTouched = true;
    validateInputs();
  });
}

if (phoneInput) {
  phoneInput.addEventListener('input', function () {
    phoneTouched = true;
    validateInputs();
  });
}

if (messageInput) {
  messageInput.addEventListener('input', function () {
    messageTouched = true;
    validateInputs();
  });
}

// Validação inicial para configurar o estado do botão de envio
validateInputs();
