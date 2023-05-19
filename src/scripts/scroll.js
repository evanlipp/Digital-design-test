const toChairScroll = document.querySelectorAll('.to-chair');
const toSofaScroll = document.querySelectorAll('.to-sofa');
const toBedScroll = document.querySelectorAll('.to-bed');
const chairSection = document.querySelector('#chair');
const sofaSection = document.querySelector('#sofa');
const bedSection = document.querySelector('#bed');

toChairScroll.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const viewportCoords = chairSection.getBoundingClientRect();
    const pageCoords = viewportCoords.top + window.pageYOffset;
    window.scrollTo({
      top: pageCoords,
      behavior: 'smooth',
    });
  });
});

toSofaScroll.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const viewportCoords = sofaSection.getBoundingClientRect();
    const pageCoords = viewportCoords.top + window.pageYOffset;
    window.scrollTo({
      top: pageCoords,
      behavior: 'smooth',
    });
  });
});

toBedScroll.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const viewportCoords = bedSection.getBoundingClientRect();
    const pageCoords = viewportCoords.top + window.pageYOffset;
    window.scrollTo({
      top: pageCoords,
      behavior: 'smooth',
    });
  });
});
