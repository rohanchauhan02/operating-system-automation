var robot=require("robotjs");
var screen=robot.getScreenSize();
console.log(screen);
setTimeout(handleOpenboard,0);
function handleOpenboard(){
    robot.moveMouseSmooth(64,864);
    // console.log(robot.getMousePos())
    robot.mouseClick();
    robot.typeString('Openboard');
    robot.keyTap("enter");
    setTimeout(writeHi,2000);
}
function writeHi(){
    robot.moveMouseSmooth(400,250);
    robot.mouseToggle("down","left")
    robot.dragMouse(400,450);
    robot.mouseToggle("up","left");

    robot.dragMouse(400,350);
    robot.mouseToggle("down","left");
    robot.dragMouse(600,350);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(600,250);
    robot.mouseToggle("down","left")
    robot.dragMouse(600,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(700,250);
    robot.mouseToggle("down","left")
    robot.dragMouse(700,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(1440,20);
    robot.mouseClick();
    setTimeout(openWorld,2000);

}
function openWorld(){
    robot.moveMouseSmooth(64,864);
    // robot.mouseClick();
    // robot.typeString('World');
    // robot.keyTap("enter");
    setTimeout(function(){
        robot.mouseClick();
        robot.typeString(' World');
        robot.keyTap("enter");
    },2000);

}
