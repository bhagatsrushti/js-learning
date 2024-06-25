

var str="    Hey you are doing good, keep it up   ";

function stringHandsOn(){ }
stringHandsOn()
console.log(`======Step-1======`);
console.log("Given String is:", str);


console.log(`======Step-2======`);
var result=str.length
console.log(`Length Of String is: ${result}`);


console.log(`======Step-3======`);
var result1= str.trim();
console.log(`Removed leading and trailing Spaces: ${result1} `);
console.log(`length of trimmed string: ${result1.length}`);
var result2= result1.length;


console.log(`======Step-4======`);
var removedSpace=result-result2
console.log("Remove Total Number of Extra Spaces is:",removedSpace);


console.log(`======Step-5======`);
var charStart= result1.charAt(0);
var charEnd= result1.charAt(result1.length-1);
console.log(`first and last char given is:`);
console.log(` Character after Trim is:${charStart} Last Character After Trim:: ${charEnd}`);


console.log(`======Step-6======`);
var allWord= result1.split(" ")
console.log(`Count Total word available in string:`);
console.log(" Count of Total Word After Trim is:",allWord.length);

  
console.log(`======Step-7======`);
var indexOfWord= result1.indexOf("good")
console.log(`Index of Word "good" is: ${indexOfWord}`);

console.log(`======Step-8======`);
var portion=result1.slice(22);
console.log(`Substring Starting From Index "22" is: ${portion}`);


console.log(`======Step-9======`);
var endWith=result1.endsWith("up");
console.log(`Is String Ends With word "up": ${endWith}`);


console.log(`======Step-10======`);
var started=result1.startsWith("Hey")
console.log(`Is String Started With word "Hey": ${started}`);
console.log(`======Step-End======`);