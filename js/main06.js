const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');
const navDOM = document.querySelector('nav');

/*
function hamburgerClick() {
    if (logoDOM.classList.contais('big')) {
        logoDOM.classList.remove('big');
    } else {
        logoDOM.classList.add('big');
    }
    if (navDOM.classList.contains('visible')) {
        navDOM.classList.remove('visible');
    } else {
        navDOM.classList.add('visible');
    }
}   

hamburgerDOM.addEventListener('click', hamburgerClick);
*/

hamburgerDOM.addEventListener('click', () => {
    logoDOM.classList.toggle('big');
    navDOM.classList.toggle('visible');
  });

