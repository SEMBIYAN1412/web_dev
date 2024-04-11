// functions

function name(firstname,lastname){
    return 'hello ' +firstname+' '+lastname;

}
console.log('sembiyan','siva');

function sum(num1,num2){
    console.log('num1 is',+ num1);
    console.log('num2 is',+ num2);
    if(num2== undefined){
        return num1;
    }
    return num1 + num2;
}
console.log(sum(10));


//character title uppercase

const  toTitleCase =function (name){
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
}
console.log(toTitleCase('seMBiYaNs'));