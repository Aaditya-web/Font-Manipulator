
function preload(){

}
function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    canvas.position(800,200);

    video = createCapture(VIDEO);
    video.hide();
    video.size(400,300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log("PoseNet is Initialised");
}


function gotPoses(results) {
    if (results.length > 0) 
        console.log(results);
    };