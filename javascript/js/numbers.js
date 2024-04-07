//numbers
const myNumbers=42
const myVariable="50.890bvd90"
const myFloat=42.089876
  
console.log(myNumbers===myVariable)
console.log(Number(myVariable)+3)
console.log(myFloat)
console.log(myVariable+3)

//number methods

//isinteger()
console.log(Number.isInteger(myNumbers))

//parseFloat()
console.log(Number.parseFloat(myVariable))

//parseInt()
console.log(Number.parseInt(myVariable))

//tofixed()
console.log(Number.parseFloat(myFloat).toFixed(2))