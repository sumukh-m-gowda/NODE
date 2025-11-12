import url from "url";

const myUrl = new URL("https://user:pass@www.example.com:8080/pathname/page?name=Diddee&age=55");

console.log("href:", myUrl.href);
console.log("host:", myUrl.host);
console.log("hostname:", myUrl.hostname);
console.log("path:", myUrl.pathname + myUrl.search);
console.log("pathname:", myUrl.pathname);
console.log("port:", myUrl.port);
console.log("username:", myUrl.username);
console.log("password:", myUrl.password);
console.log("protocol:", myUrl.protocol);
console.log("search:", myUrl.search);
