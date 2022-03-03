// console.log("Hello World")

// Filter metodu

// Array
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

// Obyekt 
const data = [
    { name: "Apple", price: 2500 },
    { name: "Samsung", price: 2000 },
    { name: "Sony", price: 1600 }
];

const filteredData = data.filter(item => {
    return item.price < 2200;
})

console.log(filteredData); // [ { name: 'Samsung', price: 2000 }, { name: 'Sony', price: 1600 } ]


// Map metodu

const births = [1994, 2004, 2000, 1998];

const ages = births.map(x => 2022 - x);
console.log(ages) // 28, 18, 22, 24


// Find metodu

const persons = [
    { name: "Sabuhi", age: 17 },
    { name: "Rahman", age: 27 },
    { name: "Habib", age: 20 },
]

const person = persons.find(person => {
    return person.name === "Sabuhi"
})

console.log(person);


// Reduce metodu

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 550 },
    { amount: 620 },
]

let shipping = 50;
const totalAmout = orders.reduce((sum, order) => sum + order.amount, shipping);
console.log(totalAmout) // 1870


const array = ["Hello", "World"];
const res = array.reduce((accumulator, currentValue, currentIndex, sourceArray) => accumulator + currentValue)
console.log(res) // HelloWorld

// ForEach metodu

const humans = [
    { name: "Sabuhi", age: 17 },
    { name: "Rahman", age: 27 },
    { name: "Habib", age: 20 },
]

const human = humans.forEach(human => {
    console.log(human.name); // Sabuhi Rahman Habib
})

console.log("------------------")

// For

for (let i = 0; i < humans.length; i++) {
    console.log(humans[i].name); // Sabuhi Rahman Habib
}


// Some metodu

const num = [23, 13, 55, 14, 36];

const falseSome = num.some(element => {
    return element > 60;
})

const trueSome = num.some(element => {
    return element % 3 === 0;
})

console.log(falseSome); // false
console.log(trueSome); // true


// Every metodu

const everyNum = [34, 54, 27, 46];

everyFalse = everyNum.every(element => element > 50);
everyTrue = everyNum.every(element => element < 65);

console.log(everyFalse); // false
console.log(everyTrue); // true


// Includes metodu

const includes = [23, 45, 34, 3, 65];

console.log(includes.includes(45)); // true

console.log(includes.includes(4)); // false

// axtarış massivin 2-ci indexindən(34) başladığı üçün true qaytarılacaq
console.log(includes.includes(3, 2));

// axtarış massivin 4-ci indexindən(65) başladığı üçün false qaytarılacaq
console.log(includes.includes(3, 4));


// Array.form metodu

let newArray = Array.from("Hello World");
console.log(newArray);


// Contact metodu

const contact1 = [23, 15, 45, 55]
const contact2 = ["a", "b", "c", "d"]

const contactArray = contact1.concat(contact2)
console.log(contactArray) // [23, 15, 45, 55, 'a', 'b', 'c', 'd']