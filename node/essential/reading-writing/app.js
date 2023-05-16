const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const writing = require('./modules/writing');
const reading = require('./modules/reading');

const people = [
    {name: 'João'},
    {name: 'Maria'},
    {name: 'João'},
    {name: 'João'},
];

const json = JSON.stringify(people, '', 2);

writing(filePath, json);

async function readFile(path) {
    const data = await reading(path);
    renderData(data);
}

function renderData(data) {
    data = JSON.parse(data);
    
    data.forEach(value => console.log(value.name));
}

readFile(filePath);