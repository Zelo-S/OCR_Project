const path = require('path');

// show file name
console.log(path.basename(__filename));

// show current directory of file
console.log(path.dirname(__filename));

// what kind of file is this
console.log(path.extname(__filename));

// file name without extension
console.log(path.parse(__filename).name);

// Concatenate system directories and even file names
console.log(path.join(__dirname, 'test', 'hello.html'));



