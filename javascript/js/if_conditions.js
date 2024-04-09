// if statements

let testScore=55;
let grade;
let collegeStudent=true;

if (testScore>=90){
    grade='O';
}
else if(testScore>=80){
    grade='A';
}
else if(testScore>=70){
    grade='B';
}
else if(testScore>=60){
    grade='C';
}
else{
    if(collegeStudent){
        grade='RA';
    }
    else{
        grade='Fail';
}
}
console.log(grade);