const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const togglePassword = document.getElementById('togglePassword');

const errorIcon = document.querySelectorAll('.error_icon');
const errorText = document.querySelectorAll('.error_text');
const emailSample = document.querySelectorAll('.email_sample');


console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);



  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorIcon[0].classList.remove('hide')
    errorText[0].classList.remove('hide')
  } else {
    firstName.classList.remove('error');
    errorIcon[0].classList.add('hide')
    errorText[0].classList.add('hide')
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    errorIcon[1].classList.remove('hide')
    errorText[1].classList.remove('hide')
  } else {
    lastName.classList.remove('error');
    errorIcon[1].classList.add('hide')
    errorText[1].classList.add('hide')
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    errorIcon[2].classList.remove('hide')
    errorText[2].classList.remove('hide')
    emailSample[0].classList.remove('hide')
  } else {
    email.classList.remove('error');
    errorIcon[2].classList.add('hide')
    errorText[2].classList.add('hide')
    emailSample[0].classList.add('hide')
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    errorIcon[3].classList.remove('hide')
    errorText[3].classList.remove('hide')
  } else {
    password.classList.remove('error');
    errorIcon[3].classList.add('hide')
    errorText[3].classList.add('hide')
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

togglePassword.addEventListener('click', function () {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});