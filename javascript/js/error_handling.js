// error handling
"use strict";

const makeError=() =>{
    let i=0;
    while(i<=5){
    try{
      if(i%2!=0){
        throw new Error.name("odd number");
      }
      console.log("Even Number");

    }catch(err){
        console.error(err.name);
    }
    finally{
        console.log("......finally");
        i++;
    }
    }
};
makeError();