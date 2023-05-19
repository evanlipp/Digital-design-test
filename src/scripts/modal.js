const openBtn = document.querySelectorAll('.btn-buy');
const closeBtn = document.querySelector('.close');
const submit = document.querySelector('.submit');
const modalWindow = document.querySelector('.overlay');

openBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalWindow.style.display = 'block';
  });
});

closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  modalWindow.style.display = 'none';
});

submit.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Заказ оформлен');
  modalWindow.style.display = 'none';
});
