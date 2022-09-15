const btn = document.querySelector('#btn-login');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
// console.log(email);
btn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else { alert('Email ou senha inválidos.'); }
});




 const button = document.getElementById('submit-btn');
 const checkbox1 = document.getElementById('agreement');

 checkbox1.addEventListener('change', () => {
     if (checkbox1.checked === true){
      button.removeAttribute('disabled');
     }
     else {
      button.setAttribute('disabled', 'disabled');
     }
 });

 let textArea = document.getElementById('textarea');
 

 textArea.addEventListener('input', function () {
   let labelText = document.getElementById('counter');  
   let value = textArea.value.length;
   let caracteres = (500 - (value));
   labelText.textContent = `${caracteres}`;
 });


textArea.addEventListener('cut', function() {
   let labelText = document.getElementById('counter');  
   let value = textArea.value.length;
   let caracteres = (500 - (value));
   labelText.textContent = `${caracteres}`;
});