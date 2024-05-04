// javascript object notation
// text file
// independent programming language

const myobj={
    name:"sembiyan",
    address:["india","Tamilnadu","Thanjavur","Budalur","chithrakudi"],
    sub:function(){
        console.log("thankyou for subscribers");
    }
}
console.log(myobj);
console.log(myobj.name);
myobj.sub();
console.log(typeof myobj);

//json convertion  string- text format
const sendjson=JSON.stringify(myobj);
console.log(sendjson);
console.log(sendjson.name);
console.log(typeof sendjson);

//object format convertion
const receivejson=JSON.parse(sendjson);
console.log(receivejson);
console.log(receivejson.name);
console.log(typeof receivejson);