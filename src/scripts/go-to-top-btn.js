const goToTopBtn = document.querySelector('.go-to-top-btn');

goToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 100) {
    goToTopBtn.style.display = 'block';
  } else {
    goToTopBtn.style.display = 'none';
  }
});
