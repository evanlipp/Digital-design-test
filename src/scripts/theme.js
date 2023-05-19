const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');
const header = document.querySelector('.header');
const tourner = document.querySelector('.tourner');

tourner.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme');
    header.classList.replace('light-theme', 'dark-theme');
    cards.forEach((card) => card.classList.replace('card-light', 'card-dark'));
  } else {
    body.classList.replace('dark-theme', 'light-theme');
    header.classList.replace('dark-theme', 'light-theme');
    cards.forEach((card) => card.classList.replace('card-dark', 'card-light'));
  }
});
