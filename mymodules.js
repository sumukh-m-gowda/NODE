export function add(a,b){
    return a + b;
}
export function multiply(a,b){
    return a * b;
}
export const info = {
    name : "sumukh",
    age : 18,
    college : "andu-pandu",
    display() {
    console.log(`My name is ${this.name} and I am ${this.age} years old studing in ${this.college} college.`)

    }

}