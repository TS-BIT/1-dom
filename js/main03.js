const h1DOM = document.querySelector('h1');
h1DOM.classList.add('simba');
const allIngredientsDOM = document.querySelectorAll('li');
// console.log(allIngredientsDOM);
for (let i = 0; i < allIngredientsDOM.length; i++) {
    const item = allIngredientsDOM[i];
    const itemName = item.innerText;
    // console.log(itemName);
    // const nameInUpperCase = itemName.toUpperCase();
    // console.log(nameInUpperCase);
    allIngredientsDOM.classList.add('darzove')    
}   
