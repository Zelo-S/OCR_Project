const url = require('url');

const myUrl = new URL('http://website.com/hello.html?id=100&status=active');

// Serialized URL - give the whole URL
console.log(myUrl.href);
console.log(myUrl.toString());

// get host(root domain)
console.log(myUrl.host);

// Get Hostname, no PORT included
console.log(myUrl.hostname);

// Pathname - actual file
console.log(myUrl.pathname);

// Serialized query - stuff after file name
console.log(myUrl.search);

// Params object - break down the query
console.log(myUrl.searchParams);

// add parameter
myUrl.searchParams.append('abc', 123);
console.log(myUrl.searchParams);

// loop through parameters
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name} : ${value}`);    
});




