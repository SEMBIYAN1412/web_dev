// object
const myobj={
    subscribers :true,
    no:10000,
    content:{
        earn:'js',
        grow:"stocks"
    },
    subdiv:["earn","give","grow"],
    action:function(){
        return `earn by inverst ${this.content.grow}`
    }

}
console.log(myobj.action());
console.log(myobj.subdiv[0]);

//eg 2
const vehicle={
    doors:2,
    engine:function(){
        return "wroooooooooooom!";
    }
}
console.log(vehicle.engine());

const car=Object.create(vehicle);       //inheritance  and create an object
car.engine=function(){return 'booooooooooooom!!!!!!!'}          //function overriding
console.log(car.engine());


//for in loop
for(let job in myobj){
    console.log(`${job},its ${myobj[job]}`);
}

console.log(myobj.hasOwnProperty("no"));

const{subscribers,no}=myobj;
function ob({no}){
    return no;
}
console.log(ob(myobj));