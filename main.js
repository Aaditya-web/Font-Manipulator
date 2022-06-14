leftWristx=0;
rightWristx=0;
difference=0;

function preload(){

}
function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    video = createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 550, 550, 550, 550);
    text("Aaditya", 560, 150);
    textSize(difference);
}

function modelLoaded() {
    console.log("PoseNet is Initialised");
}


function gotPoses(results) {
    if (results.length > 0) 
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        
        difference= floor(leftWristx-rightWristx);
        document.getElementById("font-size").innerHTML= difference;
    };