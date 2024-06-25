console.log(`=========Step:01==========`);
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given add 10 array element :`);
const addTenArray = arrayNumbers.map((element)=>{
  return element + 10;
});
console.log(addTenArray);
console.log(`__________________________________________`);


console.log(`=========Step:02==========`);
console.log(`Given cube element are:`);
const cubeArray = arrayNumbers.map((element)=>{
return element **3;
});
console.log(cubeArray);
console.log(`__________________________________________`);


console.log(`=========Step:03==========`);
console.log(`Adding index values to each elements are:`);
const addIndexArray = arrayNumbers.map((element,index)=>{
 return element+index;
});
console.log(addIndexArray);
console.log(`__________________________________________`);
console.log(`=========End==========`);



// let array = [3, 6, 5, 2];
// const newArray = array.map( (element)=>{
//     return element + 10;
// });
// console.log(newArray);

// const newArr = array.map( (element)=>{
//     return element * element;
// });
// console.log(newArr);