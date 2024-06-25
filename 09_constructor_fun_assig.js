console.log(`================Step1============`);

function Bank(bankName,bankLocation,bankIFSCCode,bankBranchCode) {
    this.bankName=bankName;
    this.bankLocation=bankLocation;
    this.bankIFSCCode=bankIFSCCode;
    this.bankBranchCode=bankBranchCode;
}

const yesBank = new Bank("YES Bank", "Pune","YES11223344",1234567)
console.log(`bank Name:  ${yesBank.bankName},
             bank Location: ${yesBank.bankLocation}
             bank IFSCCode: ${yesBank.bankIFSCCode}
             bank BranchCode:${yesBank.bankBranchCode}`);

const sbiBank = new Bank("SBI Bank", "Nashik","SBI3347788",5671234)
console.log(`bank Name:  ${sbiBank.bankName},
             bank Location: ${sbiBank.bankLocation}
             bank IFSCCode: ${sbiBank.bankIFSCCode}
             bank BranchCode:${sbiBank.bankBranchCode}`);

const mahBank = new Bank("MAHARASHRA Bank", "Nagpur","MAH77995566",9632587)
console.log(`bank Name:  ${mahBank.bankName},
             bank Location: ${ mahBank.bankLocation}
             bank IFSCCode: ${ mahBank.bankIFSCCode}
             bank BranchCode:${ mahBank.bankBranchCode}`);    

const axisBank = new Bank("AXIS Bank", "Mumbai","Axis55228844",74125896)
console.log(`bank Name:  $axisBank .bankName},
             bank Location: ${ axisBank.bankLocation }
             bank IFSCCode: ${ axisBank.bankIFSCCode}
             bank BranchCode:${ axisBank.bankBranchCode}`);          

 console.log(`=================Step2========================`);

     Bank.prototype.openTime="  9.00 AM IST";
     Bank.prototype.closeTime=" 6.00 PM IST";

console.log(`Please Visit Our Bank ${sbiBank.bankName}
     Between the Time:
    ${sbiBank.openTime} TO
    ${sbiBank.closeTime} `);

console.log(`Please Visit Our Bank ${axisBank.bankName}
     Between the Time :
     ${axisBank.openTime} TO
     ${axisBank.closeTime} `);

// console.log(`Please Visit Our Bank ${yesBank.bankName} Having Branch Code : ${yesBank.branchCode} At::${yesBank.openTime}`);
console.log(`Please Visit Our ${yesBank.bankName}
     Having Branch Code : ${yesBank.bankBranchCode} 
     And Open time is at:${yesBank.openTime}`);

console.log(`=================END====================================`);