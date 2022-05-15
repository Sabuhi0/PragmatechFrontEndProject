const box = document.querySelector(".box");


// Callback Hell
/*
setTimeout(() => {
    box.classList.add("bigger")
    setTimeout(() => {
        box.classList.add("circle")
        setTimeout(() => {
            box.classList.add("move")
            setTimeout(() => {
                box.classList.add("colored")
                setTimeout(() => {
                    box.classList.remove("colored")
                    setTimeout(() => {
                        box.classList.remove("move")
                        setTimeout(() => {
                            box.classList.remove("circle")
                            setTimeout(() => {
                                box.classList.remove("bigger")
                            }, 500)
                        }, 500)
                    }, 500)
                }, 500)
            }, 500)
        }, 500)
    }, 500)
}, 500)
*/

/*

new Promise((resolve, reject) => {
    // Əgər əməliyyat başa çatmış və uğurlu olarsa
    resolve({
        name: "Sabuhi",
        surname: "Gasimov"
    });

    // Əməliyyat səhv olarsa
    reject("Error")
})
.then(data => {
        data.web = "https://sabuhi0.herokuapp.com"
        return data
})
.then(data => console.log(data))
.catch(data => {
        console.log(data)
})
.finally(() => {
    console.log("The end")
})

*/

/* ----------------------------------------------- */

/*
// Normal function ilə
function wait(ms) {
    return new Promise(function(resolve) {
        return setTimeout(resolve, ms)
    })
}
*/

// Arrow function ilə
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(500)

.then(() => {
    console.log("Animasyon bashladi!")
})

// Class add

.then(() => {
    box.classList.add("bigger")
    return wait(500)
})

.then(() => {
    box.classList.add("circle")
    return wait(500)
})

.then(() => {
    box.classList.add("move")
    return wait(500)
})

.then(() => {
    box.classList.add("colored")
    return wait(500)
})

// Class remove

.then(() => {
    box.classList.remove("colored")
    return wait(500)
})

.then(() => {
    box.classList.remove("move")
    return wait(500)
})

.then(() => {
    box.classList.remove("circle")
    return wait(500)
})

.then(() => {
    box.classList.remove("bigger")
    return wait(500)
})

.finally(() => console.log("Animasyon bitdi!"))




// Promise nece ishdiyir parm-a resolve,reject yazandaa ne bash verir, tam olarag Promise kimi ishdemesede :))
/*
class Sabuhi {
    resolved = []
    rejected = []
    constructor(callback) {
        callback(this.resolve.bind(this), this.reject.bind(this))
    }
    resolve(data) {
        this.resolved.reduce((old, current) => current(old), data)
    }
    reject(data) {
        // this.rejected.reduce((old, current) => current(old), data)
    }
    then(callback) {
        this.resolved.push(callback)
        return this
    }
}

new Sabuhi((resolve, reject) => {
    setTimeout(() => {
        resolve("Sabuhi Gasimov")
    }, 500)
}).then(data => {
    console.log("Data", data)
    return data + " ve sabuhi0.herokuapp.com"
}).then(data => {
    console.log(`data son ${data}`)
})
*/


/* 
    - Promise.all() -> hamisi resolve olarsa yeni əməliyyat başa çatmış və uğurlu olarsa
    - Promise.race() -> birinci biten (resolve ve ya reject)
    - Promise.allSettled() -> hamisi tamamlandiginda
    - Promise.any() -> birinci resolve olan
*/

// const prom1 = new Promise(resolve => setTimeout(resolve, 1000, "Sabuhi Gasimov"))
// const prom2 = new Promise(resolve => setTimeout(resolve, 800, "sabuhi0.herokuapp.com"))
// const prom3 = new Promise((resolve, reject) => setTimeout(reject, 700, "17"))

// Promise.all([prom1, prom2, prom3])
//     .then(([data1, data2, data3]) => console.log(data2))
//     .catch(err => console.log(err))

// Promise.race([prom1, prom2, prom3])
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

// Promise.allSettled([prom1, prom2, prom3])
//     .then(response => console.log(response))

// Promise.any([prom1, prom2, prom3])
//     .then(response => console.log(response))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))