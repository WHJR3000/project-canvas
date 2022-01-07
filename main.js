var lpox, lpoy, cpox, cpoy;
var mouse_event="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="magenta";
Wol=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
colour=document.getElementById("colour").value;
Wol=document.getElementById("width").value;
mouse_event="mouseDown";


}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouse_event="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseLeave";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
cpox=e.clientX-canvas.offsetLeft;
cpoy=e.clientY-canvas.offsetTop;
if(mouse_event=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=Wol;
ctx.moveTo(lpox, lpoy);
ctx.lineTo(cpox, cpoy);
ctx.stroke();
}
lpox=cpox;
lpoy=cpoy;
}
var lptox, lptoy , cptox, cptoy;
var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
    if(width < 992)
    {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
colour=document.getElementById("colour").value;
Wol=document.getElementById("width").value
cptox = e.touches[0].clientX - canvas.offsetLeft;
cptoy= e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e){

 lptox = e.touches[0].clientX - canvas.offsetLeft;
 lptoy = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=Wol;
ctx.moveTo(lptox, lptoy);
    ctx.lineTo(cptox, cptoy);
    ctx.stroke();

    lptox = cptox;
    lptoy = cptoy;

}
function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}






























































































































