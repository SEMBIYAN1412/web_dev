myArray=[];
myArray[0]="dhuddu";
myArray[1]="subscribers";
myArray[2]=999
myArray[3]=true
console.log(myArray);

myArray.push('click'); //add element at last
console.log(myArray);

myArray.pop();   //remove element at last
console.log(myArray);

myArray.unshift("viewers")  // add element at first
console.log(myArray);

myArray.shift();    // remove elemenrt at first
console.log(myArray);

const lastItem=myArray.push("siva");    //returns only length of array
console.log(lastItem);

const lastIte=myArray.pop();    //deleted value stored
console.log(lastIte);

delete myArray[1];
console.log(myArray);

myArray.splice(1,1,"replaced value");
console.log(myArray);

//slice
const newArray=myArray.slice(1,3);
console.log(newArray);

//reverse
myArray.reverse();
console.log(myArray);

//join()
const joinArray=myArray.join();
console.log(joinArray);

//split <returns a array type in elements are string>
const sArray=joinArray.split(',');
console.log(sArray);

const secondArray=[1,'numbers',99.99,false];
console.log(secondArray);

//concat array
//const conArray=myArray.concat(secondArray);
const conArray=[...myArray,...secondArray];
console.log(conArray);


//eg  for one dimensional array
const earnMoneyA=['frontend','backend','fullstack'];
const earnMoneyB=['AI','blockchain','ML'];
const growMoneyA=['stock','realestate','fixed income'];
const growMoneyB=['options','features'];
const giveMoney=['QualityEducation'];

console.log(earnMoneyA[1],growMoneyB[1]);

//2 dimensional array
const earnMoney=[earnMoneyA,earnMoneyB];
const growMoney=[growMoneyA,growMoneyB];
console.log(earnMoney[0][1],growMoney[1][1]);

//3 dimensions
const money=[earnMoney,growMoney,giveMoney];
console.log(money[0][0][2],money[1][0][1],money[2][0]);
