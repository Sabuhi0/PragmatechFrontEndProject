const textareas = document.querySelectorAll('textarea');

const resizeObserver = new ResizeObserver(entries => {
    for( let entry of entries) {
        // console.log("Height: "+ entry.contentRect.height)
        const size = entry.contentRect.height / 3 - 1;
        entry.target.style.fontSize = size + 'px'
        entry.target.style.lineHeight = size + 'px'
    }
})

textareas.forEach(textarea => resizeObserver.observe(textarea))