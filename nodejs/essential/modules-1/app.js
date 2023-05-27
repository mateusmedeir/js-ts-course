// const sayName = require('./mod1').sayName;
/* const { firstName, lastName, sayName } = require('./mod1');

console.log(firstName);
console.log(lastName);
console.log(sayName()); */

const path = require('path');
const axios = require('axios');
const { Person } = require('./mod1');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(error => console.log(error));