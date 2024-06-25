console.log(`==========Step:01===========`);
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]

arrayNumbers.forEach((currentValue,index)=>{
// console.log(currentValue,index)
console.log(`Element at index value ${currentValue} is ${index}`);
});
console.log(`_____________________________________________________`);


console.log(`==========Step:02===========`);
console.log(`Given Positive Numbers: `);
arrayNumbers.forEach((element)=>{
    if(element>0)
       console.log(element);
   
});
console.log(`_____________________________________________________`);


console.log(`==========Step:03===========`);

const NegativeNumbers=[];
console.log(`Given are Negative Numbers:`);
arrayNumbers.forEach((element)=>{
if(element < 0) {
     NegativeNumbers.push(element);
     console.log(element);
 }
});
console.log(`_____________________________________________________`);


console.log(`==========Step:04===========`);
console.log(`Given are Even Numbers`);

arrayNumbers.forEach((element)=>{
if(element % 2 === 0){
    console.log(element);
}
});
console.log(`_____________________________________________________`);


console.log(`==========Step:05===========`);
console.log(`Given Sum of All Elements are:`);

let sum = 0;
arrayNumbers.forEach((element)=>{
sum = sum +element;
});
console.log(sum);

console.log(`_____________________________________________________`);

console.log(`==========Step:06===========`);
console.log(`only even-indexed array values :`);

// arrayNumbers.forEach((element,index)=>{
//     if(index & 2==0){
//         }
//         console.log(`Element at even index ${index} is ${element}`);
// });

arrayNumbers.forEach((element, index) => {
    if (index % 2 === 0) {
        console.log(`Element at even index ${index} is ${element}`);
    }
});
console.log(`_____________________________________________________`);

console.log(`==========END===========`);