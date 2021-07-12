const bminusDOM = document.querySelector('.button.minus');
const bplusDOM = document.querySelector('.button.plus');
const breset1DOM = document.querySelector('.button.reset');
const numberDOM = document.querySelector('.number');

function bminusClick() {
    number -= 1;
}

function bplusClick() {
    number += 1;
}

function bresetClick() {
    number = 0;       
}
