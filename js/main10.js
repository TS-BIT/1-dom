

const inputDOM = document.querySelector('input')
const buttonDOM = document.querySelector('button');
const spanDOM = document.querySelector('span');

function buttonClick() {
   spanDOM.value = inputDOM.value;
}

buttonDOM.addEventListener('click', buttonClick);
// inputDOM.innerText = ' ';

