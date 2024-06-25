console.log("=====================Step:01=====================");
console.log("****Function is no argument no return type****");
function myName()
{
 console.log("My Name is Srushti");
}
function mySurName() 
{
    console.log("My SurName is Bhagat");
}
myName()
mySurName()

console.log("====================Step:02========================");
console.log("****Personal Details****");
function personalDetails( firstName,lastName,collegeName)
{
    console.log("Personal Details is Given Below : ");
    console.log("First Name: " +firstName);
    console.log("Last Name: " +lastName);
    console.log("College Name: " +collegeName);
}
personalDetails("Srushti","Bhagat", "SIMCA");

console.log("======================Step:03======================");
console.log("****Addition Of The Three Values Function****");
function addThreeValues(a,b,c) 
{
    console.log("Addition Of Three Values Given Is : " + a,b,c);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning.");
console.log("======================End==============================");