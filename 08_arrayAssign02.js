console.log(`___________________________________________________________________________________________________`);
console.log(`=====step:01 total element======`);
const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`Given Array Is [${arrayNumbers}]`);
console.log(`Length of Given Array is==>>${arrayNumbers.length}`);
console.log(`___________________________________________________________________________________________________`);


console.log(`=====step:02 1st&last ArrayNumber ======`);
console.log(`First Number In Given Array Is ===>>${arrayNumbers[0]}`);
console.log(`Last number In Given Array Is ==>>>${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`___________________________________________________________________________________________________`);

console.log(`=====step:03 lastElement ======`);
console.log(`Third Last Number IN Given Array Is==>>>${arrayNumbers[arrayNumbers.length-3]}`);
let result=""
let sum=0;
for (const index in arrayNumbers) {
   if ((arrayNumbers[index])%2==0) {
      const element = arrayNumbers[index];
      result=result+ element+"  "
      sum=sum+element;
   
     }
}
console.log(`___________________________________________________________________________________________________`);

console.log(`=====step:04 Even======`);
console.log(`Even Numbers Values Are==>>|${result}|`);
let res=""
let add=0;
 for (const index in arrayNumbers) {
   if ((arrayNumbers[index])%2!==0) {
 
      const element2 = arrayNumbers[index];
      res=res+ element2+"  ";
      add=add+element2;
     }
 }
 console.log(`___________________________________________________________________________________________________`);


 console.log(`=====step:05 odd ======`);
 console.log(`Odd Numbers Values ==>>|${res}|` );

 let result1=""
let sum2=0;
for (const index in arrayNumbers) {
   if (index%2==0) {

      const element5 = arrayNumbers[index];
      result1=result1+ element5+"  "
      sum2=sum2+element5;
   
     }
}
console.log(`___________________________________________________________________________________________________`);


console.log(`=====step:06 evenPosition ======`);
console.log(`Even Numbers Index Values Are ==>>|${result1}|`);
console.log(`Sum Of Even Numbers Index Values IS ==>>   ${sum2} `);

let res1=""
let add2=0;
 for (const index in arrayNumbers) {
   if (index%2!==0) {
 
      const element6 = arrayNumbers[index];
      res1=res1+ element6+"  ";
      add2=add2+element6;
     }
 }
 console.log(`___________________________________________________________________________________________________`);


 console.log(`=====step:07 oddPosition ======`);
console.log(`ODD Numbers Index Values Are ==>>|${res1}|`);
console.log(`Sum Of ODD Numbers Index Values IS ==>>   ${add2} `);

let add1=0;
 for (const index in arrayNumbers) {
   const element3 = arrayNumbers[index];
   add1=add1+element3;
 }
 console.log(`___________________________________________________________________________________________________`);


 console.log(`=====step:08 sum of element ======`);
 console.log(`Sum Of All Elements From Array ==>> ${add1}`);

 let output=""
 for (const index in arrayNumbers) {
   if ((arrayNumbers[index]) % 5 == 0 ) {
      const element4 = arrayNumbers[index];
      output=output+ element4+"  ";
   }

 }
 console.log(`___________________________________________________________________________________________________`);


 console.log(`=====step:09  multiple of 5======`);
 console.log(`Number Which Are Multiple By 5 ==>> ${output}`);
 console.log(`___________________________________________________________________________________________________`);


 console.log(`=====step:10 115 available arrayNum ======`);
 console.log(`Is Number "115" Available In Given Array==>>${ arrayNumbers.includes(115)} `);
 console.log(`___________________________________________________________________________________________________`);


 console.log(`=====step:11 23available arrayNum ======`);
 console.log(`Is Number "115" Available In Given Array==>>${ arrayNumbers.includes(23)} `);
 console.log(`___________________________________________________________________________________________________`);
 
 
 console.log(`=====step:12 insert Numbers ======`);
 arrayNumbers.splice(3,0,55,66);
 console.log(`Inserted Value "55" and "66" Before Index 3 ==>> ${arrayNumbers}`);
 console.log(`___________________________________________________________________________________________________`);


 console.log(`=====step:13 delete3Element ======`);
 arrayNumbers.splice(4,3);
 console.log(`Removed 3 Element From Index 4 ==>> ${arrayNumbers}`);
 console.log(`=====END ======`);
 console.log(`___________________________________________________________________________________________________`);


 

