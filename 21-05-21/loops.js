// Title: Working with objects and loops
// Description: Different ways of looping through object
// Author: Adithya_Mallya@1NT18IS013
// Date: 21/05/21
const products = [
  { id: 1, title: "pen", cost: 50 },
  { id: 2, title: "pencil", cost: 20 },
  { id: 3, title: "book", cost: 30 },
  { id: 4, title: "eraser", cost: 60 },
  { id: 5, title: "sharpner", cost: 70 },
]


console.log(products);

products.forEach(item => {
    console.table(item);
})


for (let i = 0; i < products.length; i++){
  console.log(products[i].title);
}

console.table(products.filter(item => item.cost > 50));
