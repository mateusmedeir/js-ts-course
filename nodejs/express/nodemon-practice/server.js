const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Name: <input type="text" name="name">
    <button>Send Form</button>
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