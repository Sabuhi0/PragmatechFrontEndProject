// (async() => {
//     async function hello() {
//         return "Hello world"
//     }

//     const text = await hello()
//     console.log(text)
// })()

// document.querySelector("button").addEventListener('click', async() => {
//     const result = await Notification.requestPermission()
//     console.log(result)
// })

/*
// with .then
document.querySelector("button").addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(response => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${response.id}/comments`)
                .then(res => res.json())
                .then(comment => console.log(comment))
        })
})
*/

// with async/await
// document.querySelector("button").addEventListener('click', async() => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     const post = await response.json()

//     const fetchComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//     const comment = await fetchComments.json()
//     console.log(post, comment)

// })

/* Yuxardaki misali dahada gisalda bilerik :) */

document.querySelector("button").addEventListener('click', async() => {
    const post = await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)).json()
    console.log(post, comments)
})