// console.log("this is to check the setinterval part") ;
// const timer = setTimeout(() => {
//     console.log("this is runni gafter 3 sec usig the time module");
// },3000);

// console.log("timer strted ");

// setTimeout(() => {
//     clearTimeout(timer);
//     console.log("time up!!1");
// },4000
// );

// let count = 0;

// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Running... ${count}`);
//   if (count === 5) {
//     clearInterval(intervalId);
//     console.log("Interval cleared after 5 runs");
//   }
// }, 1000);

setTimeout(() => {
  console.log("this prints after 3 sec ");
},3000);
let count = 0;
const newcount = setInterval(() => {
  count++;
  console.log("timer count : ", count);
  if(count == 5){
    clearInterval(newcount);
    console.log("timer stopped");
  }
},1000);