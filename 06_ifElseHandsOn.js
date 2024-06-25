console.log(`============Step:01 EvenOdd============`);

var isEvenOrOdd = function(num){
    if (num%2==0) {
        return "EVEN";
    } else {
        return "ODD";
    }
}
var value = isEvenOrOdd(45);
console.log(`Given Number 45 is ${value}`);
var value = isEvenOrOdd(70);
console.log(`Given Number 70 is ${value}`);
var value = isEvenOrOdd(67);
console.log(`Given Number 67 is ${value}`);
var value = isEvenOrOdd(98);
console.log(`Given Number 98 is ${value}`);


console.log(`============Step:02 VoteOrNot============`);

var voteEligibility = function(age){
    // var result = +age;
    // if (age>18) {
    //     console.log(`Invalid data: ${age}`);
    if (age<=18) {
        console.log(`you are not eligible for vote age: ${age}`);
        } else {
            console.log(`You are eligible for vote age: ${age}`);
        }
    }
voteEligibility(18)
voteEligibility(20)
voteEligibility(17)
voteEligibility(40)



console.log(`============Step:03 ============`);
var strLength = function (str) {
    if (str.length>=10) {
        console.log(`String contain more than 10 character` );
    }else{
        console.log(`String does not contain more than 10 character` );
    }
    
}
strLength("javascript ES6")

console.log(`============Step:04 ============`);

var startsWithJava = function(str) {
    if (str.startsWith("Java")) {
        return 'JavaScript Language : String starts with "Java"';
    } else {
        return 'Programming Language: String does not start with "Java"';
    }
};
console.log(startsWithJava("JavaScript Language"));
console.log(startsWithJava("Programming Language"));

console.log(`============End ============`);