let main = document.querySelector("main");
let display = document.querySelector(".card");
let hidden = document.querySelector(".hidden");
let taskbar = document.querySelector(".taskbar");
let count = 0;

main.addEventListener("contextmenu", function(dts){
      console.log(dts);
      dts.preventDefault();
      
     if (dts.target.closest(".taskbar")) {
    return; 
  }      
    
    if (count<1) {
            display.style.top = dts.clientY + "px";
            display.style.left = dts.clientX + "px";
            display.style.display = "block";    
            count++;
        }
        else{
            display.style.display = "none";
            count=0;
        }
    
})

let win = document.querySelector(".Windows");
let c2 = 0;
win.addEventListener("click", function () {
    if (c2 < 1) {
            hidden.style.transition = "0.8s";
             hidden.style.top = "-600px";
        
        c2++;
    }
    else {
        hidden.style.top = "600px";
        c2 = 0;
    }
});


