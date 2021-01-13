var robot=require("robotjs");
var screen=robot.getScreenSize();
console.log(screen);
setTimeout(openCalculator,0);
function openCalculator(){
    robot.moveMouseSmooth(64,864);
    // console.log(robot.getMousePos())
    robot.mouseClick();
    robot.typeString(" calculator");
    robot.keyTap("enter");


}

// var id=setInterval(showMouseLocation,100);
// function showMouseLocation(){
//     var mouse=robot.getMousePos();
//     console.log(mouse);
//     if(mouse.x==0 && mouse.y==0){
//         clearInterval(id);
//     }
// }