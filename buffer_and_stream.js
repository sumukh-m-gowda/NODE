/////BUFFER 
// Creating a buffer from a string
const buf1 = Buffer.from("Beach Lasagna");
console.log("Buffer 1:", buf1);                // raw data in hex form
console.log("String from buffer:", buf1.toString()); // back to text

// Allocating an empty buffer (20 bytes)
const buf2 = Buffer.alloc(20);
console.log("Empty buffer:", buf2);

// Writing data into buffer
buf2.write("Hey! Listen!");
console.log("After writing:", buf2.toString());

// Concatenating buffers
const buf3 = Buffer.concat([buf1, buf2]);
console.log("Concatenated Buffer:", buf3.toString());

// Comparing two buffers
const isEqual = Buffer.compare(buf1, buf2);
console.log("Buffer comparison result:", isEqual);


///STREAM 
import fs from "fs";

// Create readable and writable streams
const readStream = fs.createReadStream("input.txt", "utf8");
const writeStream = fs.createWriteStream("output.txt");

// Connect them using pipe()
readStream.pipe(writeStream);

console.log("File is being copied using streams...");
