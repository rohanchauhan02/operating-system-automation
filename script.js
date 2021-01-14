var robot=require("robotjs");
var fs=require("fs")
var screen=robot.getScreenSize();
console.log(screen);
setTimeout(handleOpenboard,0);
function handleOpenboard(){
    robot.moveMouseSmooth(64,864);
    // console.log(robot.getMousePos())
    robot.mouseClick();
    robot.typeString('Openboard');
    robot.keyTap("enter");
    setTimeout(writeHi,0);
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
    openWorld();

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
        robot.moveMouseSmooth(266,206);
        robot.mouseClick();
        robot.typeString(" Hey world,This is Rohan!! Here we are on the same page. Let's do something crazy.")
        setTimeout(openChrome,2000);
    },2000);

}
function openChrome(){
    robot.moveMouseSmooth(64,864);
    robot.mouseClick();
    robot.typeString('Chrome');
    robot.keyTap("enter");
    setTimeout(openTabs,10000);
}
function openTabs(){
    var rdata=fs.readFileSync("./chrome.json");
    var tabs =JSON.parse(rdata);
    for(var i=0;i<=tabs.length;i++){
        for(var j=0;j<tabs[i].length;j++){
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter")
            

            if(j<tabs[i].length-1){
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
            }
            else if(i<tabs.length-1){
                robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control","up");
            }
        }
    }
    openNotepad();
}
function openNotepad(){
    robot.moveMouseSmooth(64,864);
    robot.mouseClick();
    robot.typeString('Notepad');
    robot.keyTap("enter");
    setTimeout(writeNotepad,2000);
}
function writeNotepad(){
    robot.typeString("The system is ready to use!!");
}