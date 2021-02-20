var height = screen.height ;
var width = screen.width ;
var newHeight = height - 90 ;
var newWidth = width - 60 ;
if (width < 992){
    document.getElementById("myCanvas").width = newWidth ;
    document.getElementById("myCanvas").height = newHeight ;
    document.body.style.overflow = "hidden" ;
}

var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

canvas.addEventListener("touchstart", mytouchstart)
var x,y ;
function mytouchstart(e){
  x = e.touches[0].clientX - canvas.offsetLeft;
  y = e.touches[0].clientY - canvas.offsetTop; 
 console.log(x + " " + y)
}

canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e){
var cx = e.touches[0].clientX - canvas.offsetLeft;
var cy = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "2";
ctx.moveTo(x,y);
ctx.lineTo(cx,cy);
ctx.stroke();
x = cx ; 
y = cy ;
} 

var mouseevent ;

canvas = document.getElementById("myCanvas");
crx= canvas.getContext("2d");

canvas.addEventListener("mousedown", mymousedown);

function mymousedown (e){
 mouseevent ="mousedown";
 console.log(mouseevent);
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave (e){
 mouseevent ="mouseleave";
 console.log(mouseevent);
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup (e){
 mouseevent ="mouseup";
 console.log(mouseevent);
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e){
    console.log("mousemove");
    currentx= e.clientX - canvas.offsetLeft;
    currenty= e.clientY - canvas.offsetTop;
   if(mouseevent == "mousedown"){
       crx.beginPath; 
       crx.color= "color";
       crx.lineWidth="2";
       crx.moveTo(lastx,lasty);
       crx.lineTo(currentx, currenty);
       crx.stroke();
   }
 lastx= currentx;     
 lasty= currenty;

}

