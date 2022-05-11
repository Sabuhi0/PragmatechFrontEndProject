const targets = document.querySelectorAll(".box");

const callback = (entries) => {
    for(const entry of entries) {
        for(const entry of entries) {
            // entry.target.classList.toggle("active", entry.isIntersecting);
            // console.log(entries)
            entry.target.querySelector('.image').style.transform = 'translateX(' + -(100 - entry.intersectionRatio * 100) + '%)';
            entry.target.querySelector('.image').style.opacity =  entry.intersectionRatio;
            
            entry.target.querySelector('.text').style.transform = 'scale(' + entry.intersectionRatio + ')';
            entry.target.querySelector('.text').style.opacity =  entry.intersectionRatio;
        }
        // if(entry.isIntersecting) {
        //     entry.target.classList.add("active");
        // }
        // else {
        //     entry.target.classList.remove("active");
        // }
    }
};

let keys = [...Array(100).keys()].map((key) => '0.' + (key < 10 ? '0' + key : key ));
 
// console.log(keys)

const options = {
    threshold: keys,
}

const observer = new IntersectionObserver(callback, options);
targets.forEach((box) => observer.observe(box));