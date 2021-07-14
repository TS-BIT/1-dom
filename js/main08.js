let rezultatas = 0;

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');
const h1DOM = document.querySelector('h1');

function minusClick() {
    numberDOM.innerText = --rezultatas;
    h1DOM.innerText = 'Žaidimas progrese!';
    console.log(h1DOM);
}
    
function plusClick() {
    numberDOM.innerText = ++rezultatas;
    h1DOM.innerText = 'Žaidimas progrese!';
    console.log(h1DOM);
}

function resetClick() {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = 'Show must go on!';
    console.log(h1DOM);      
}

minusDOM.addEventListener('click', minusClick);
plusDOM.addEventListener('click', plusClick);
resetDOM.addEventListener('click', resetClick);