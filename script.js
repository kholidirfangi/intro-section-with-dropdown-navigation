const iconMenu = document.querySelector('.icon-menu');
const nav = document.querySelector('nav');
const iconClose = document.querySelector('.icon-close');
const features = document.querySelector('.features');
const featuresList = document.querySelector('.features-list');
const company = document.querySelector('.company');
const companyList = document.querySelector('.company-list');
const featuresText = document.querySelector('.features a');
const companyText = document.querySelector('.company a');
const about = document.querySelector('.about');
const careers = document.querySelector('.careers');
const arrowUp = document.querySelectorAll('.arrow-up');
const arrowDown = document.querySelectorAll('.arrow-down');

iconMenu.addEventListener('click', () => {
  nav.style.display = 'block';
});

iconClose.addEventListener('click', () => {
  nav.style.display = 'none';
});

features.addEventListener('click', () => {
  featuresText.classList.toggle('black');
  featuresList.classList.toggle('block');
  arrowUp[0].classList.toggle('block');
  arrowDown[0].classList.toggle('hidden');
});

company.addEventListener('click', () => {
  companyText.classList.toggle('black');
  companyList.classList.toggle('block');
  arrowUp[1].classList.toggle('block');
  arrowDown[1].classList.toggle('hidden');
});

about.addEventListener('click', () => {
  about.classList.toggle('black');
  careers.classList.remove('black');
});

careers.addEventListener('click', () => {
  careers.classList.toggle('black');
  about.classList.remove('black');
});
