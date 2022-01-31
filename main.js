var mouse_event ="empty";
var last_x,last_y;

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="black";
line_width=1;

canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){

    mouse_event="mouseleave";
}

canvas.addEventListener("mouseup",mouse_up);
function mouse_up(e){

    mouse_event="mouseUP";

}


canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){

    mouse_event="mouseDown";
}



canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){

    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if (mouse_event=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWitdh=line_width;

        console.log("Last position of mouse: ");
        console.log("x = "+ last_x+" y = "+ last_y);
        ctx.moveTo(last_x,last_y);

        console.log("Current position of mouse: ");
        console.log("x = "+ current_x+" y = "+current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }

    last_x=current_x;
    last_y=current_y;
}
