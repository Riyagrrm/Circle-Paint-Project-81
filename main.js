var mouseEvent="";
canvas=document.getElementById("myCanvas")
ctx.getContext("2d");
var color="";
var radius="";
var width="";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e);
{
    color=document.getElementById("color").value;
    width=document.getElementById("lineWidth").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mousedown(e);
{
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e);
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e);
{
    mouseEvent="mousemove";
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft
    current_position_of_mouse_y=e.clientY - canvas.offsetTop

    if (mouse_event=="mousedown")
    {
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI)
        ctx.stroke    
    }
}