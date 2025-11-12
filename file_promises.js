import { promises as fs } from "fs";

async function fileOps() {
  try {
    await fs.writeFile("demo.txt", "Promise-based file system example");
    const data = await fs.readFile("demo.txt", "utf8");
    console.log("File content:", data);
    await fs.appendFile("demo.txt", "\nMore data added.");
    await fs.rename("demo.txt", "demo_renamed.txt");
    await fs.unlink("demo_renamed.txt");
    console.log(" All promise-based operations done!");
  } catch (err) {
    console.error(" Error:", err);
  }
}

fileOps();
