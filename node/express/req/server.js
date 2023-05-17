const express = require('express');
const app = express();

app.use(express.urlencoded( {extended: true }));

// /profiles/12345?
// campaign=googleads &
// campaign_name=test

app.get('/tests/:usersId?/:parameters?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    //res.send(req.params);
    res.send(req.query.first_name);
});

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Name: <input type="text" name="name">
    <button>Send Form</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Received parameter: ${req.body.name}`);
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});