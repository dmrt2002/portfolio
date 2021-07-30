var pulse = function() {
    var e = document.createElement("div");
    e.setAttribute('class','circle'),
    document.getElementsByTagName("MAIN").appendChild(e),
    e.style.top = event.pageY + 'px',
    e.style.left = event.pageX + 'px'
    ,
    setTimeout(function() {
      document.body.removeChild(e)
   }, 1000)
 };
 const isMobile = !window.matchMedia('only screen and (min-width: 768px)').matches;
 if(isMobile === "false"){
   console.log(isMobile);
 } else {
   document.addEventListener('mousemove' , pulse);
 }