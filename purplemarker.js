image1=""
status1=""
objects=[]

function setup(){
canvas=createCanvas(640,420)
canvas.center()
objectDetector=ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML="status:detecting object"
}

function preload(){
image1=loadImage("purple_marker.jpg")
}

function modelloaded(){
console.log("model has been loaded");
status1=true
objectDetector.detect(image1,gotresults)
}

function gotresults(error,results){
if(error){
console.error(error);
}
console.log(results);
objects=results
}

function draw(){
if(status1!=""){
image(image1,0,0,640,420)
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="status:object detected"
fill("#8000ff")
percent=floor(objects[0].confidence*100)
text(objects[0].label+""+percent+"%",objects[0].x,objects[0].y)
noFill()
stroke("#8000ff")
rect(objects[0].x,objects[0].y,objects[0].hight,objects[0].width)
}
}
}

function home(){
window.location="index.html"
}