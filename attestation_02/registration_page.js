'use strict';

const email = document.getElementById('mail');
const password = document.getElementById('word');
const confirmation = document.getElementById('confirmation');
const button = document.getElementById('button');
const genderWoman = document.getElementById('gender-woman');
const textarea = document.getElementById('textarea');
const agreement = document.getElementById('agreement');

const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');
const errorSecondPassword = document.getElementById('error-second-password');

const resultObject = {
  email: '',
  password: '',
  gender: '',
  about_yourself: '',
  agreement: '',
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

button.addEventListener('click', (event) => {
  const emailValue = email.value;
  event.preventDefault();

  let isEmailCorrect = false;

  if (emailValue === '') {
    errorEmail.textContent = 'Поле обязательно для заполнения';
    errorEmail.style.display = 'inline-block';
    email.classList.toggle('error__input');
  } else if (!validateEmail(emailValue)) {
    errorEmail.style.display = 'inline-block';
    email.classList.toggle('error__input');
  } else {
    errorEmail.style.display = 'none';
    email.classList.remove('error__input');
    resultObject.email = emailValue;
    isEmailCorrect = true;
  }

  let isPasswordCorrect = false;

  if (password.value === '') {
    errorPassword.textContent = 'Поле обязательно для заполнения';
    errorPassword.style.display = 'inline-block';
    password.classList.add('error__input');
    isPasswordCorrect = false;
  } else if (password.value && password.value.length < 8) {
    errorPassword.textContent = 'Пароль должен содержать не менее 8 символов';
    errorPassword.style.display = 'inline-block';
    password.classList.add('error__input');
    isPasswordCorrect = false;
  } else {
    errorPassword.style.display = 'none';
    password.classList.remove('error__input');
    isPasswordCorrect = true;
  }

  if (confirmation.value === '' || password.value !== confirmation.value) {
    errorSecondPassword.style.display = 'inline-block';
    confirmation.classList.add('error__input');
    isPasswordCorrect = false;
  } else {
    errorSecondPassword.style.display = 'none';
    confirmation.classList.remove('error__input');
    isPasswordCorrect = true;
  }

  if (genderWoman.checked) {
    resultObject['gender'] = 'woman';
  } else {
    resultObject['gender'] = 'man';
  }

  if (agreement.checked) {
    resultObject['agreement'] = 'I agree to receive updates by email';
  } else {
    resultObject['agreement'] = `I don't agree to receive email updates`;
  }

  if (isEmailCorrect && isPasswordCorrect) {
    resultObject.password = password.value;
    resultObject.about_yourself = textarea.value;
    console.log(resultObject);
  }
});
