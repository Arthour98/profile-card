
const toggleDetails=document.querySelector('button#toggle-credits');
const details=document.querySelector('div.h-0');
const initialButtonText=toggleDetails.textContent;
const ageTemp=document.getElementById("age");

toggleDetails.addEventListener("click",function()
{
details.classList.toggle("expand-auto");
if(toggleDetails.textContent===initialButtonText)
{   setTimeout(()=>
{
toggleDetails.textContent="Hide";
},500);
    
}
else
{
    setTimeout(()=>
    {
        toggleDetails.textContent=initialButtonText;
    },1000)
    
}
});

const year=new Date().getFullYear();
let age=year-1998;
ageTemp.textContent+=age;
