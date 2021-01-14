var robot=require("robotjs");
var id=setInterval(showMouseLocation,100);
function showMouseLocation(){
    var mouse=robot.getMousePos();
    console.log(mouse);
    if(mouse.x==0 && mouse.y==0){
        clearInterval(id);
    }
}