// import http from "http";

// const server = (http.createServer((req,res) => {
//     res.writeHead = (200,{"Content-Type" : "text/plain"});
//     res.write("hello");
//     res.end();
// }));

// server.listen(3000 ,()=> {
//     console.log("server running at http://localhost:3000");
// });

// import http from "http";

// const server = http.createServer((req, res) => {
//   console.log(`Request received: ${req.method} ${req.url}`);

//   res.writeHead(200, { "Content-Type": "text/html" });

//   if (req.url === "/") {
//     res.write("<h1>Home Page</h1>");
//     res.write("<p>Welcome to Node.js Server!</p>");
//   } 
//   else if (req.url === "/about") {
//     res.write("<h1>About Page</h1>");
//     res.write("<p>This is the about section.</p>");
//   } 
//   else if (req.url === "/contact") {
//     res.write("<h1>Contact Page</h1>");
//     res.write("<p>Email us at hello@example.com</p>");
//   } 
//   else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.write("404 Not Found");
//   }

//   res.end(); 
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000/about");
//   console.log("Server running at http://localhost:3000");
//   console.log("Server running at http://localhost:3000/contact");
// });

import http from "http";

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  // We’ll handle status codes separately for each route
  let content = "";
  let statusCode = 200;
  let contentType = "text/html";

  if (req.url === "/") {
    content = "<h1>Home Page</h1><p>Welcome to Node.js Server!</p>";
  } 
  else if (req.url === "/about") {
    content = "<h1>About Page</h1><p>This is the about section.</p>";
  } 
  else if (req.url === "/contact") {
    content = "<h1>Contact Page</h1><p>Email us at hello@example.com</p>";
  } 
  else {
    statusCode = 404;
    contentType = "text/plain";
    content = "404 Not Found";
  }

  // Now send everything once
  res.writeHead(statusCode, { "Content-Type": contentType });
  res.end(content);
});

server.listen(3000, () => {
  console.log("🌐 Server running at:");
  console.log("➡ http://localhost:3000");
  console.log("➡ http://localhost:3000/about");
  console.log("➡ http://localhost:3000/contact");
});
