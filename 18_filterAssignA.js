console.log(`==========Step:01===========`);
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`given numbers are greater than 50 are below:`);
const greaterFifty = arrayNumbers.filter((element)=>{
 return element > 50;
});
console.log(greaterFifty);
console.log(`___________________________________________`);


console.log(`==========Step:02===========`);
console.log(`Given Even numbers are:`);
const evenNumberArray = arrayNumbers.filter(element=>element % 2 === 0);
console.log( "Even Numbers" ,evenNumberArray);

console.log(`___________________________________________`);


console.log(`==========Step:03===========`);
console.log(`Given odd Numbers Are:`);
const oddNumberArray = arrayNumbers.filter(element=>element % 2 !== 0);
console.log("Odd numbers:", oddNumberArray);
console.log(`___________________________________________`);


console.log(`==========Step:04===========`);
console.log(`the numbers which are multiples of 5 are Given Below:`);
const multiplesOfFive = arrayNumbers.filter((element)=>element % 5 === 0);
console.log("Multiples of 5:", multiplesOfFive);
console.log(`___________________________________________`);

console.log(`==========Step:05===========`);
console.log(`the numbers which are multiples of 5 are Given Below:`);
const betweenTwentyAndFifty = arrayNumbers.filter(element=>element >=20 && element <=50);
console.log("Numbers between 20 and 50:", betweenTwentyAndFifty);
console.log(`___________________________________________`);
console.log(`==========End===========`);





// const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

// // 1. Numbers greater than 50
// const greaterThanFifty = arrayNumbers.filter(element => element > 50);
// console.log("Numbers greater than 50:", greaterThanFifty);

// // 2. Even numbers
// const evenNumbers = arrayNumbers.filter(element => element % 2 === 0);
// console.log("Even numbers:", evenNumbers);

// // 3. Odd numbers
// const oddNumbers = arrayNumbers.filter(element => element % 2 !== 0);
// console.log("Odd numbers:", oddNumbers);

// // 4. Multiples of 5
// const multiplesOfFive = arrayNumbers.filter(element => element % 5 === 0);
// console.log("Multiples of 5:", multiplesOfFive);

// // 5. Numbers between 20 and 50
// const betweenTwentyAndFifty = arrayNumbers.filter(element => element >= 20 && element <= 50);
// console.log("Numbers between 20 and 50:", betweenTwentyAndFifty);
