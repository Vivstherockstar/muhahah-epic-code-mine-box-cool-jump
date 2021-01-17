var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    floor1 = createSprite(110,550,175,30)
    floor2 = createSprite(300,550,175,30)
    floor3 = createSprite(490,550,175,30)
    floor4 = createSprite(682,550,175,30)
    floor1.shapeColor = "blue";
    floor2.shapeColor = "red";
    floor3.shapeColor = "green";
    floor4.shapeColor = "yellow";
    //create box sprite and give velocity
 box = createSprite(random(20,750),random(70,550),30,30)
 box.velocityY = 3
 box.velocityX = 3
 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    
    
    if(isTouching(box,floor2)){
        box.shapeColor = "red";
        
    }
    if(isTouching(box,floor3)){
        box.shapeColor = "green";
        music.stop()
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(isTouching(box,floor4)){
        box.shapeColor = "yellow";
    }
    if(isTouching(box,floor1)){
        box.shapeColor = "blue";
        music.loop()
    }
    //add condition to check if box touching surface and make it box
    box.bounceOff(floor1);
    box.bounceOff(floor2);
    box.bounceOff(floor3);
    box.bounceOff(floor4);
    //add the color to the box if it touches a certian floor
   
    drawSprites()
}
