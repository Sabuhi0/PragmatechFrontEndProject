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

console.log(falseSome);
console.log(trueSome);