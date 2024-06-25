console.log(`=========Step:01==============`);
//no argument no return value
let str = function () {
    console.log(`Good Morning EveryOne, Today is Friday`);
}
str();
console.log(`___________________________________________________________________`);


console.log(`===================Step 2.a===================`);

let multiply = (n1, n2, n3=1) => {
    const result =n1*n2*n3;
    console.log(`The Multiplication of Three Number is:  ${result}`);
}
multiply(5, 5, 2);
console.log(`===================Step 2.b===================`);
multiply(10, 4);

console.log(`___________________________________________________________________`);

//five argument and return value, it should do addition
console.log(`=========Step:03.a==============`);
let add = (n1,n2,n3,n4,n5)=>{
    let result = n1+n2+n3+n4+n5
    return result;
}
let result = add(100,100,200,349,756)
console.log(`Addition of five number are given :${result}`);


console.log(`=========Step:03.b & c ==============`);
const arrowFunction = (value) => {
    return `${value}`;
  };
  const result1 = add( "I am", " learning", " ES6", ' features',"in depth");
  console.log(`The Addition of the 5 No is: ${result1}`);
 

     console.log(`___________________________________________________________________`);
