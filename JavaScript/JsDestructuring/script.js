/* Array-də istifadəsi */

// const user = ["Sabuhi", "Gasimov"];
// const [name, surname] = user


// console.log(name, user[0]);
// console.log(surname, user[1]);

/* Opject-də istifadəsi */

// const user = {
//     name: "Sabuhi",
//     sur_name: "Gasimov",
//     Age: 17
// }

// const { name, sur_name: surname, Age: age } = user

// console.log(name)
// console.log(surname)
// console.log(age)

/* Function-da istifadəsi */

// Object
// function user(data) {
//     console.log(data)
// }

// user({
//     name: "Sabuhi",
//     surname: "Gasimov",
//     age: 17,
// })

// function user({ surname }) {
//     console.log(surname)
// }

// user({
//     name: "Sabuhi",
//     surname: "Gasimov",
//     age: 17,
// })

// Array
// function user([num1, num2]) {
//     console.log(num1)
//     console.log(num2)
// }

// user([2, 5])

/* Rest */
// const lang = {
//     backend: "PHP",
//     frontEnd: {
//         javascript: ["React", "NodeJs", "Angular"],
//         css: ["tailwindCss", "Bootstrap"]
//     }
// }

// const { frontEnd: { javascript: [react, ...framework] } } = lang
// console.log(framework)

// const { frontEnd: { javascript } } = lang
// const [react, ...framework] = javascript
// console.log(framework)

// const { frontEnd: { javascript: [frmwork, frmwork2] } } = lang
// console.log(frmwork)

/* For istifadəsi */

// const user = {
//     name: "Sabuhi",
//     sur_name: "Gasimov",
//     Age: 17
// }

// for (let [key, value] of Object.entries(user)) {
//     console.log(key, value)
// }

/* Fetch Api ile istifadəsi */
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(({ title }) => console.log(title))