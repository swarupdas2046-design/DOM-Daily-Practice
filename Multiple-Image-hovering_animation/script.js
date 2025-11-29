let box = document.querySelectorAll(".box");
let img = document.querySelectorAll("img")


box.forEach(function(val){
    
  val.addEventListener("mousemove",function(dtls){
    // val.style.backgroundColor = "red"
    // val.childNodes[3].style.top = dtls.y+"px"
    val.childNodes[3].style.left = dtls.x+"px"
    val.childNodes[3].style.opacity = 1
    
});
val.addEventListener("mouseleave",function(dtls){
    // val.style.backgroundColor = "transparent"

    val.childNodes[3].style.opacity = 0
   
    
});

})








// let img = document.querySelector("img")
// box.addEventListener("mousemove",function(dtls){

//     img.style.top = dtls.y+"px"
//     img.style.left = dtls.x+"px"
//     img.style.opacity = 1
    
// });
// box.addEventListener("mouseleave",function(dtls){

//     img.style.opacity = 0
   
    
// });