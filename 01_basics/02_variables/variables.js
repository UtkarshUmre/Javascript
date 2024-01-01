//how constants are declared
const accountId = 1783;

//let is a keyword to use variable
let emaiId = "utkarsh@gmail.com";

//var is also a keyword to initialize a variable which is use less in modern js due to scope issues
var accountPassword = "456782";

accountCity = "Paris";

/*prefer not to use var 
because of issue in block scope and functional scope
*/

// accountId = 345; //not allowed , constants cannot be redeclare

emaiId = "nathan@armur.ai";
accountPassword = "4389";
accountCity = "toronto";

// console.log(emaiId);
console.table([accountId, emaiId, accountPassword, accountCity]);
