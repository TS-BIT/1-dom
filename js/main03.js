const h1DOM = document.querySelector('h1');
h1DOM.classList.add('simba');

const allIngredientsDOM = document.querySelectorAll('li');
// allIngredientsDOM.classList.add('darzove');

// console.log(allIngredientsDOM)
// let array = [];

for (let i = 0; i < allIngredientsDOM.length; i++) {
    const item = allIngredientsDOM[i];
    item.classList.add('darzove');
    // const itemName = item.innerText;
    // console.log(itemName);
    // const nameInUpperCase = itemName.toUpperCase();
    // console.log(nameInUpperCase);
    // array.push(nameInUpperCase);     
}
// console.log(array);





















