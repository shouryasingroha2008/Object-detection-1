img="";
function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    noFill();
    rect(30,60,450,350);
    stroke("#ff0000");
    text("dog",40,70);
}