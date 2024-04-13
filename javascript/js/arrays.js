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