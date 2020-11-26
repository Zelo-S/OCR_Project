const fs = require('fs');

const path = require('path');

/*
// make a directory
fs.mkdir(path.join(__dirname, 'testFolder'), {}, (err) => {
    if(err) throw err;
    console.log('Folder created');
});*/

/*
// Create and write to file
fs.writeFile(path.join(__dirname, '/testFolder', 'hello.txt'), 'Hello World!', (err) => {
    if(err) throw err;
    console.log('File written to');

    // File append
    fs.appendFile(path.join(__dirname, '/testFolder', 'hello.txt'), ' more Hello World!', (err) => {
        if(err) throw err;
        console.log('File written to');
    });
});*/

// read file
fs.readFile(path.join(__dirname, '/testFolder', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

fs.rename(path.join(__dirname, '/testFolder', 'hello.txt'), path.join(__dirname, '/testFolder', 'newHello.txt'), (err) => {
    if(err) throw err;
    console.log('File renamed');
});



