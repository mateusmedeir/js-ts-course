const fs = require('fs').promises;

module.exports = (path, encode='utf8') => fs.readFile(path, encode);