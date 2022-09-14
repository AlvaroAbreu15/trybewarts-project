const btn = document.querySelector('#btn-login');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
console.log(email);
btn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else { alert('Email ou senha inválidos.'); }
});
