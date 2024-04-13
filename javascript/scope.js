//global scope
var x=1;
let y=2;
const z=3;
console.log(`global is:${x}`);
console.log(`global is:${y}`);
console.log(`global is:${z}`);

//function
function myfunc(){
    const z=7;
    console.log(`function is:${x}`);
    console.log(`function is:${y}`);
    console.log(`function is:${z}`);

    if(true){
        let y=10;
        console.log(`block is:${x}`);
        console.log(`block is:${y}`);
        console.log(`block is:${z}`);
    }
}
myfunc()
console.log(y);
