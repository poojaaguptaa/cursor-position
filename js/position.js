var pointerX = -1;
var pointerY = -1;
function mouseOver11(event) {
   pointerX = event.pageX;
    pointerY = event.pageY;
   var x = "Points is: " + pointerX + "  " + pointerY;
    document.getElementById("hello").innerHTML=x;

}


