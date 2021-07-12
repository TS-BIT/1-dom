let rezultatas = 0;

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');

function minusClick() {
    numberDOM.innerText = --rezultatas;
}
    
function plusClick() {
    numberDOM.innerText = ++rezultatas;
}

function resetClick() {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;      
}

minusDOM.addEventListener('click', minusClick);
plusDOM.addEventListener('click', plusClick);
resetDOM.addEventListener('click', resetClick);

