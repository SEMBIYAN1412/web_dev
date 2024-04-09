//user input in popup

let my=prompt("Enter your name:");
if (my){
    console.log(my ?? 'you didnot enter your name' )
}
else{
    console.log('you didnot enter your name')
}
console.log(my.trim().length)