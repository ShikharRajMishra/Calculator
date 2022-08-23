let Display=document.getElementById('display');
let Button=Array.from(document.getElementsByClassName('button'));

Button.map(Button=>{Button.addEventListener('click',(e)=>{
switch(e.target.innerText){
    case'c':Display.innerText=''
    break;
    case'←': Display.innerText=Display.innerText.slice(0,-1);
    break;
    case'Enter':
    try{
   Display.innerText=eval(Display.innerText);
    }
    catch{
        Display.innerText='Error!';}
    break;
    default:
    Display.innerText +=e.target.innerText;
}
})
})

