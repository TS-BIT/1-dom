let rezultatas = 0;

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');
const h1DOM = document.querySelector('h1');
const ulDOM = document.querySelector('ul');

function htmlOnload() {
    ulDOM.innerText = 'Tu pasileidai zaidima - sekmes!';
    // console.log(ulDOM);
}


function minusClick() {
    numberDOM.innerText = --rezultatas;
    ulDOM.innerText = 'Paspaudei minusa ir dabartinis rezultatas yra .'; 
    // console.log(ulDOM);
}
    
function plusClick() {
    numberDOM.innerText = ++rezultatas;
    ulDOM.innerText = 'Paspaudei pliusa ir dabartinis rezultatas yra .';
    // console.log(ulDOM);
}

function resetClick() {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    ulDOM.innerText = 'Paspaudei reset ir dabartinis rezultatas yra 0.';
    // console.log(ulDOM);      
}

ulDOM.addEventListener('onload', htmlOnload);
minusDOM.addEventListener('click', minusClick);
plusDOM.addEventListener('click', plusClick);
resetDOM.addEventListener('click', resetClick);