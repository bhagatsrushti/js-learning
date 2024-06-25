
console.log(`==============Ste:01==================`);
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

// 1. Reverse the array
const reversedArray = [...arrayRollNumbers].reverse();
console.log('Reversed Array:', reversedArray);
console.log(`________________________________________________________________`);


console.log(`==============Ste:02==================`);
// 2. Use the sort() method without any custom sorting logic
const sortedArrayDefault = [...arrayRollNumbers].sort();
console.log('Default Sorted Array :', sortedArrayDefault);
console.log(`________________________________________________________________`);


console.log(`==============Ste:03==================`);
// 3. Sort the array in ascending order by writing your custom logic
const sortedArrayAscending = [...arrayRollNumbers].sort((a, b) => a - b);
console.log('Custom Sorted Array in Ascending Order:', sortedArrayAscending);
console.log(`________________________________________________________________`);


console.log(`==============Ste:04==================`);
// 4. Find the greatest number from the array
const greatestNumber = Math.max(...arrayRollNumbers);
console.log('Greatest Number:', greatestNumber);
console.log(`________________________________________________________________`);


console.log(`==============Ste:05==================`);
// 5. Find the smallest number from the array
const smallestNumber = Math.min(...arrayRollNumbers);
console.log('Smallest Number:', smallestNumber);
console.log(`________________________________________________________________`);


console.log(`==============Ste:06==================`);
// 6. Remove duplicates from array
const uniqueArray = [...new Set(arrayRollNumbers)];
console.log('Array with Duplicates Removed:', uniqueArray);
console.log(`________________________________________________________________`);
console.log(`==============End==================`);