// DOM docunment object model

const view1=document.getElementById("view1");
console.log(view1);

const view2=document.querySelector("#view2");
console.log(view2);

//overwrite
view1.style.display="flex";
view2.style.display="null";

const views=document.getElementsByClassName("view");
console.log(views);

const sameview=document.querySelectorAll("#view1");
console.log(sameview);

const divs= document.querySelectorAll("div");
console.log(divs);