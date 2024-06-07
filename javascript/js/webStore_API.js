 console.log("printed");

// WebStorage_API
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readystate==="complete"){
        console.log("complete");
        initApp();
    }
});

const initApp=()=>{
    const myContent=["Earn","Grow","Give"];
    const myobject={
        name:"sembiyan",
        myContent:["Earn","Grow","Give"],
        logName:function(){
            console.log(this.name);
        }
    };
    window.sessionStorage.setItem("mySessionStorage",JSON.stringify(myobject));
    const mySessionData=JSON.parse(sessionStorage.getItem("mysessionStore"));
    console.log(mySessionData);
    const key=sessionStorage.key(0);
    console.log(key);
};