let main = document.querySelector("main");
// let video = document.querySelector("video")

main.addEventListener("mousemove",function(dets){
    
    main.style.setProperty('--x',dets.x+'px')
    main.style.setProperty('--y',dets.y+'px')
    
    
})