const form = document.querySelector('.php-email-form');
const text = document.querySelector('#text');
form.addEventListener('submit', (event) => {
  const emailValue = form.elements.email.value;
  if ((emailValue.toLowerCase() !== emailValue)) {
    event.preventDefault();
    text.classList.add('active');
    text.innerHTML = 'Form not sent.Please Enter <br> an email adress in Lowercase';
  } else {
    form.submit();
  }
});
