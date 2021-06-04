// Title: REgular Expressions
// Description: implement regex for below tasks
// Author: Adithya_Mallya@1NT18IS013
// Date: 04/06/21

// regex for names
// regex for department names
// regex for USN

const namesExp = /^[a - zA - Z\s]$/gi;
const usnExp = /(1NT)(\d{2})((IS|CS|EC|ME|AE|EE))(\d{3})/gi;
const branchExp = /^(ISE|CSE|ECE|MEC|AE|EEE)$/gi;

const testName = "Adithya Krishna S Mallya";
console.log(testName.match(namesExp));

const testUSN1 = "1nt18is013";
const testUSN2 = "1NT18CS011";
console.log(testUSN1.match(usnExp));
console.log(testUSN2.match(usnExp));

const testBranch = "ECE";
console.log(testBranch.match(branchExp));
