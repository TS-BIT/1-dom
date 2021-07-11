const h1DOM = document.querySelector('h1');

h1DOM.innerText = 'Zuikio pomidoru darzas';
h1DOM.classList.add('pavadinimas');

const allIngredientsDOM = document.querySelectorAll('li');

for (let i = 0; i < allIngredientsDOM.length; i++) {
    const item = allIngredientsDOM[i];
    // item.classList.add('darzove');
    const itemName = item.innerText;
        if(itemName === 'Morkos' || itemName === 'Bulves' || itemName === 'Svogunas') {
            item.innerText = 'Pomidoras';
            item.classList.add('pomidoras');
        }
        
    // console.log(itemName);
    // const nameInUpperCase = itemName.toUpperCase();
    // console.log(nameInUpperCase);
    // array.push(nameInUpperCase);     
}
// console.log(array);