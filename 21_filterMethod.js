// let array = [3, 6, 5, 2, 10, 7];
// const newArray = array.filter( (element)=>{
//     return element%2==0;
// });
// console.log(newArray);



//find out all the numbers which are greater than 50 and log console
const arrayNumbers =[20,11,40,25,37,49,9,90,60,2,19];

const greaterNumber = arrayNumbers.filter((currentValue)=>{
    
  return arrayNumbers.filter(num => num >= 20 && num <= 50);

})
// console.log(`Given numbers are greater than 50 values are : `);
console.log(greaterNumber);
