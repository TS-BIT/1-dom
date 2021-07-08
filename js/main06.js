const h1DOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');

function hamburgerClick() {
    // logoDOM.class.List.add('big');
    logoDOM.classList
    // jei logo turi big klase
        // tai nuimame
    // jeigu neturi
        // pridedame

    if (logoDOM.classList.contais('big')) {
        logoDOM.classList.remove('big');
    } else {
        logoDOM.classList.add('big');

    }   
}

function toggleLogo() {
    logoDOM.classList.toggle('big');
}

// hamburgerDOM.addEventListener('click', hamburgerClick());
h1DOM.innerText = 'Labas vakaras!';
h1DOM.innerText = 'Labas rytas!';
hamburgerDOM.addEventListener('click', toggleLogo);