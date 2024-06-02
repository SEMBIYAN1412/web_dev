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

const tagview=view1.getElementsByTagName("div");
console.log(tagview);

const evenDivs=view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
evenDivs[3].style.backgroundColor="red";

for (i=0; i<evenDivs.length; i++){
    evenDivs[i].style.width="180px";
    evenDivs[i].style.backgroundColor="skyblue";
}

const navText=document.querySelector("nav h1");
console.log(navText);
navText.textContent="HELLO WORLD !";

const navBar=document.querySelector("nav");
console.log(navBar);
navBar.innerHTML="<h1>hello Soldiers</h1> <p>pc users</p>";
navBar.style.justifyContent="space-evenly";

console.log(evenDivs[1]);
console.log(evenDivs[1].parentElement.lastChild);
console.log(evenDivs[1].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[1].parentElement.children);

view1.style.display="none";
view2.style.display="flex";
view2.style.flexDirection="row";
view2.style.flexWrap="wrap";
view2.style.margin="15px";

console.log(view2.lastChild);
view2.lastElementChild.remove();
const createDiv=(parent,iter)=>{
    const newDiv=document.createElement("div");
    newDiv.textContent=iter; 
    newDiv.style.height="100px";
    newDiv.style.width="100px";
    newDiv.style.backgroundColor="red";
    newDiv.style.alignItems="Center";
    newDiv.style.justifyContent="Center";
    newDiv.style.display="flex";
    newDiv.style.padding="10px 10px 10px 10px";
    parent.append(newDiv);
}
for(let i=0;i<11;i++){
    createDiv(view2,i);
}

