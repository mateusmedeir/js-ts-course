const express = require('express');
const app = express();

// CRUD -> Create, Read, Update, Delete
//         POST    GET   PUT     DELETE

app.get('/', (req, res) => { // req -> request res -> response
    res.send(`
    <form action="/" method="POST">
    Name: <input type="text" name="name">
    <button>Send</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Form received');
});

app.get('/about', (req, res) => {
    res.send('Test');
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});