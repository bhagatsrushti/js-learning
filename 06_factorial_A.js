// function factorialOfNum(n) {
//     if (n == null || n == undefined) {
//         return  (" Input Is Invalid number");
//     }
//     if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
//         return ("Input must be a non-negative integer");
//     }
//     if (n ==0 || n == 1) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// function logFactorial(n) {
//     const result = factorialOfNum(n);
//     console.log(`The factorial of ${n} is: ${result}`);
// }

// logFactorial(5);          
// logFactorial(3);          
// logFactorial(null);       
// logFactorial(8);          
// logFactorial(undefined);  
// logFactorial(9);          
// logFactorial(0);          


function  factorialOfNum(num) {
    if (num==null || num == undefined || num < 0 ) {
        console.log(`Invalid input :${num})`)
    }
    else{
    let fact = 1;
    for (let i = num; i>=1; i--) {
        fact = fact * i
        
    }
    console.log(`The Factorial Number is :${fact}`);
    
}
}

factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(-1);
factorialOfNum(0);



