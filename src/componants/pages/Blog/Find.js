const products = [
    {name: "Cycle Padel", price: 200, description: "Something"},
    {name: "Cycle Ring", price: 300, description: "Something"},
    {name: "Cycle Gear", price: 500, description: "Something"},
    {name: "Cycle String", price: 100, description: "Something"}
]

const findname = products.filter( product => product.name == 'Cycle Padel');
console.log(findname);