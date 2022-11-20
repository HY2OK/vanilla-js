// GET
fetch('http://localhost:3000/comments')
    .then(res => res.json())
    .then(json => console.log(json));

fetch('http://localhost:3000/comments/1')
    .then(res => res.json())
    .then(json => console.log(json));

fetch('http://localhost:3000/comments?postId=1')
    .then(res => res.json())
    .then(json => console.log(json));

// POST
// fetch('http://localhost:3000/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'The Great',
//         author: 'Jeremy',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then(res => res.json())
//     .then(json => console.log(json));

// PUT
// fetch('http://localhost:3000/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 2,
//         title: 'The Great Jeremy',
//         author: 'Jeremy',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then(res => res.json())
//     .then(json => console.log(json));
