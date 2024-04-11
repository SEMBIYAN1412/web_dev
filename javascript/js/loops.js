const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
let i = 0;
while (i < cars.length) {
  text += cars[i] + "<br>";
  console.log(text);
  i++;
} 

//while loop
let j=0;
while (j<6) {
  if (j===3){
   break;
  }
  j=j+1;
}
console.log(i);

//for loop
let a = '' ;
for (let k=0;k<10;k++){
  if(k===6){
    continue;
  }
  a=a+k;
}
console.log(a);