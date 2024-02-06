const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];

// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
const cheapProducts = items.filter(item => item.price < 10);
console.log(cheapProducts);

// 2. Filter and show the product that will be expensive in the array
const expensiveproduct = items.filter(item => item.price > 500);
console.log(expensiveproduct);

// 3. Calculate the full price of all products combined

const totalPrice = items.reduce((total, currentItem) => total + currentItem.price, 0);
console.log(totalPrice);

// 4. Calculate the full price of all products combined and remove products that are under $10

const total = items.filter(item => item.price >=10).reduce((totalPrice, currentItem) => totalPrice + currentItem.price, 0)
console.log(total)


//5. Filter and show the product that will be start with letter b at first postion

const startWithB = items.filter(item => item.name.charAt(0) === 'B');

console.log(startWithB);
