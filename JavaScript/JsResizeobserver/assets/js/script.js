// const textareas = document.querySelectorAll('textarea');

// const resizeObserver = new ResizeObserver(entries => {
//     for( let entry of entries) {
//         // console.log("Height: "+ entry.contentRect.height)
//         const size = entry.contentRect.height / 3 - 1;
//         entry.target.style.fontSize = size + 'px'
//         entry.target.style.lineHeight = size + 'px'
//     }
// })

// textareas.forEach(textarea => resizeObserver.observe(textarea))


const resizeObserver = new ResizeObserver(([entry]) => {
    // const boxWidth = entry.target.querySelector('.box').offsetWidth;
    const visibles = Math.floor(entry.contentRect.width / 200);
    
    entry.target.querySelectorAll(".box").forEach((box, index) => {
        if( (index + 1) <= visibles) {
            // goster
            box.style.display = 'flex'
        }
        else {
            // gosterme
            box.style.display = 'none'
        }
    })

})

resizeObserver.observe(document.querySelector(".boxes"))


const genres = [
    {
        title: 'Aile'
    },
    {
        title: 'Fantastik'
    },
    {
        title: 'Komedi'
    },
    {
        title: 'Korku'
    },
    {
        title: 'Gerilim'
    },
    {
        title: 'Aksiyon'
    },
    {
        title: 'Macera'
    },
    {
        title: 'Biyografi'
    },
    {
        title: 'Belgesel'
    }
    
]


const observe = new ResizeObserver(([entry]) => {
    const visibles = Math.floor((entry.contentRect.width - 130) / 130)
    let html = '';
    if(visibles) {
        html += genres.slice(0, visibles - 1).reduce((prev, current) => {
            return prev += `<a href='/'>${current.title}</a>`
        }, '')
    }
    const invisibles = genres.slice(visibles > 0 ? visibles -1: 0)
    if (invisibles.length > 0) {
        html += `<div class="dropdown">`
            html += `<button>Turler</button>`
            html += `<nav>`
                html += invisibles.reduce((prev, current) => {
                    return prev += `<a href='/'>${current.title}</a>`
                }, '')
            html += `</nav>`
        html += `</div>`
    }
    document.querySelector('.menu').innerHTML = html;
})

observe.observe(document.querySelector('.menu'))

console.log()
