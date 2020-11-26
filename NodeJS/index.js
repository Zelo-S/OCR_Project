

const http = require('http');
const path = require('path');
const fs = require('fs');


const serverObj = http.createServer((req, res) => {
    /*
    ///console.log(req.url);        
    if(req.url == '/'){
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
        
    }if(req.url == '/about'){
        fs.readFile(path.join(__dirname, 'about.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    }*/
    

});


const PORT = process.env.PORT || 5000;
serverObj.listen(PORT, () => console.log(`Server running on port ${PORT}...`));












