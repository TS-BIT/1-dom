const allIngredientsDOM = document.querySelectorAll('li');

//console.log(allIngredientsDOM)
let array = [];
for (let i = 0; i < allIngredientsDOM.length; i++) {
    const item = allIngredientsDOM[i];
    const itemName = item.innerText;
    // console.log(itemName);
    const nameInUpperCase = itemName.toUpperCase();
    // console.log(nameInUpperCase);
    array.push(nameInUpperCase);
      
}
console.log(array);


