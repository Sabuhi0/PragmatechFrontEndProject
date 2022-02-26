const box = document.querySelector(".box");


// Callback Hell
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