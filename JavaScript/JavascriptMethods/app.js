// console.log("Hello World")

// Filter metodu

const filterNumber = [30, 25, 22, 18, 45, 60, 70];

const filteredNumber = filterNumber.filter(age => {
    return age > 45
})

console.log(filteredNumber) // 60, 70

/* ======================================== */

const filterArray = ["JavaScript", "React", "Sass", "Python"];

const filteredArray = filterArray.filter(lang => {
    return lang.length < 6
})

console.log(filteredArray) // [ 'React', 'Sass' ]

/* ========================================= */

const data = [
    { name: "Apple", price: 2500 },
    { name: "Samsung", price: 2000 },
    { name: "Sony", price: 1600 }
];

const filteredData = data.filter(item => {
    return item.price < 2200;
})

console.log(filteredData); // [ { name: 'Samsung', price: 2000 }, { name: 'Sony', price: 1600 } ]