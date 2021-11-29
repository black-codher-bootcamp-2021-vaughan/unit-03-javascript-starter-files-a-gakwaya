// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

let a = 5; 
let b = 10; 
const c = a + b; 
console.log('Original ouput: ' + c)


function SayHey() { console.log("Hey!"); }

function conversation() {
    SayHey();
    console.log("How are you?");
    console.log("Goodbye");
}

conversation()


function futureAge (name, currentage) { 
    const age = currentage + 5;
    return " Hi " + name + " You will be " + age + "in 5 years time!";
}

console.log(futureAge("Mary", 17));

