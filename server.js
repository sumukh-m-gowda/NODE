// const http = require("http");

// const server = http.createServer((req , res) => {
//     res.write("hello ndoe");
//     res.end();
// });

// //Read-sync
// var data=FileSystem.readGileSync('input.txt')
// {   if(err)
//         throw err;
//     else
//         console.log("File content:"+DataTransfer.toString());
// }
// console.log("End of file");

// //write-sync
// FileSystem.writeFileSync('output')

// server.listen(3000 , () => {
//     console.log("running in port 3000");
// });

// server.js
import validator from "validator";

const email = "sumukh.m@gmail.com";

if (validator.isEmail(email)) {
  console.log(`${email} is a valid email`);
} else {
  console.log(`${email} is not a valid email`);
}
