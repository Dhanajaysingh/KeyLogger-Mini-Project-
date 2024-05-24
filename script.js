const logDiv=document.getElementById("log");
const statediv= document.getElementById("state");

const startbtn=document.getElementById("start-btn")

const stopbtn=document.getElementById("stop-btn")

startbtn.addEventListener("click",()=>{
    
    document.addEventListener("keyup",handleUP);
    
    document.addEventListener(
        "keydown",handleDown);

        startbtn.disabled=true;
        stopbtn.disabled=false;
})

stopbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown)
    
    document.removeEventListener("keyup",handleUP);

        logDiv.textContent="";
        statediv.textContent="";

        stopbtn.disabled=true;
        startbtn.disabled=false;
    
})

function handleDown(e){
    logDiv.textContent=`Key ${e.key} pressed down`;
    statediv.textContent="key is down"
}

function handleUP(e){
    logDiv.textContent=`Key ${e.key} pressed up`;
    statediv.textContent="Key is up"
}



