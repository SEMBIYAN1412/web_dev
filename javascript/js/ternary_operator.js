//ternary operator

// syntax
// condition ? exprTrue :exprFalse;

let subscribe='subscriber';
let response=subscribe ? 'welcome' :'kindly subscribe';
console.log(response)

//let testScore=92; 
//let grade= testScore>=90 ? 'A' : testScore>=80 ? 'B' :testScore>=70 ? 'C' : 'D';
//console.log(grade);

//game
let user='rock';
let comp='scissors';
let result=
    user==='rock' && comp==='rock' ? 'tie this game' 
    :user==='rock' && comp==='paper' ? 'user wins'
    :user=='rock' &&  comp==='scissors'? 'user wins' 
    :'comp wins';
console.log(result)