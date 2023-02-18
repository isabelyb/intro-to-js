function sum(a, b) {
    return a+b;
}

console.log(sum(10,10)); //20


function product(a, b){
    return a * b;
}

console.log(product(10,5)); //50


const bigProduct = product(1568, 115654);

console.log(bigProduct);

//anonymous functions

setTimeout(function () {
    console.log("Hey! You rock!!!");
}, 1000);

//arrow functions

setTimeout(() => console.log("Hey! You rock!!!"), 1000);