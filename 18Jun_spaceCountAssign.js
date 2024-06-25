console.log(`=========Step:01============`);
function spaceCount(inputString){
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if(inputString[i]=== ' '){
            count++;
        } 
    }
    return count;
}
const string1 =  "Revision is the mother of success";
const string2 =  "JavaScript is the language of internet world";


const spaces1 = spaceCount(string1);
console.log(`count a Number of space in string1 are given:
          '${string1}'
          space is given : ${spaces1}`);
console.log(`________________________________________________________________________`);
console.log(`=========Step:02============`);
const spaces2 = spaceCount(string2);
console.log(`count Number of space in string2 are given:
        '${string2}'
         space is given : ${spaces2}`);
         console.log(`=========End============`);
console.log(`________________________________________________________________________`);

