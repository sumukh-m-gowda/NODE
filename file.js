// import fs from "fs" ;
// fs.writeFileSync("example.txt","hello world");
// const data = fs.readFileSync("example.txt" , "utf-8");
// console.log("content in file is : " ,data);


//////SYNCHRONOUS
import fs from "fs";

try {
  // Write to a file (creates or overwrites)
  fs.writeFileSync("example.txt", "This is a synchronous write example.");

  // Read from the file
  const data = fs.readFileSync("example.txt", "utf8");
  console.log("File content:", data);

  // Add more text
  fs.appendFileSync("example.txt", "\nAppending some more text.");

  // Rename the file
  fs.renameSync("example.txt", "example_renamed.txt");

  // Delete the file
  fs.unlinkSync("example_renamed.txt");

  console.log("✅ All synchronous operations completed successfully!");
} catch (err) {
  console.error("❌ Error during synchronous operation:", err);
}


// //////ASYNCHRONOUS
// import fs from "fs";

// // Write to a file
// fs.writeFile("example2.txt", "This is an asynchronous write example.", (err) => {
//   if (err) return console.error(err);
//   console.log("✅ File written successfully.");

//   // Read from the file
//   fs.readFile("example2.txt", "utf8", (err, data) => {
//     if (err) return console.error(err);
//     console.log("📖 File content:", data);

//     // Append more text
//     fs.appendFile("example2.txt", "\nAppending async text.", (err) => {
//       if (err) return console.error(err);
//       console.log("➕ File appended successfully.");

//       // Rename the file
//       fs.rename("example2.txt", "example_renamed.txt", (err) => {
//         if (err) return console.error(err);
//         console.log("✏️ File renamed successfully.");

//         // Delete the file
//         fs.unlink("example_renamed.txt", (err) => {
//           if (err) return console.error(err);
//           console.log("🗑️ All asynchronous operations completed successfully!");
//         });
//       });
//     });
//   });
// });

