// const view=document.querySelector("#view");
// const div=view.querySelector("div");
// const h2=div.querySelector("h2");
// console.log(h2);

// //syntax
// //.addEventListener(EventName,FunctionName,usecapture)

// const dosomething=()=>{
//     alert("something did happend");
// }

// h2.addEventListener("click",dosomething,false);
// h2.removeEventListener("click",dosomething,false);
// // h2.addEventListener("click",function(event){
//     // console.log(event.target);
//     // event.target.textcontent="subscribe";
// // });

// //data load readystate check
// document.addEventListener("readystatechange",(event)=>{
//     if(event.target.readystate==="complete"){
//         console.log("complete");
// });

// //event public up
// const initApp=()=>{
//     const view=document.querySelector("#view");
//     const div=view.querySelector("div");
//     const h2=div.querySelector("h2");
//     view.addEventListener("click",(event)=>{
//         {
//             // event.target.Style.backgroundColor="pink";
//             view.classList.toogle("purple");
//         }})
//         div.addEventListener("click",(event)=>{
//             {
//                 div.classList.add("purple");
//                 div.classList.remove("black");
//             }})
//             h2.addEventListener("click",(event)=>{
//             //   event.target.textContent="learners";    
//             const myText=event.target.textContent;
//             myText==="Hello"?(event.target.textContent("listener")):(event.target.textContent("Hello"))
//             }) 
//         };


// form inputs
document.addEventListener("readystatechange"),(event)=>{
    if(event.target.readyState==="complete"){
        console.log("complete");
        initApp();
    }
}
const initApp=()=>{
    const view3 =document.querySelector("#view3");
    const myform=view3.querySelector("#myForm");
    myform.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log("submit event");
    });
};