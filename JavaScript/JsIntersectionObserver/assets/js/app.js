// console.log("Hello World!")

const target = document.getElementById("box");

const callback = (entries) => {
    console.log(entries)    
}

const options = {
    threshold: [0.2, 0.5, 0.8],
}

const observer = new IntersectionObserver(callback, options);
observer.observe(target)