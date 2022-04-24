function preload(){}

function setup(){
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    video.size(640, 480)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("PoseNet is Initialized")
}

function draw(){
    image(video, 0, 0, 640, 480)
}

function take_snapshot(){
    save("my-image.png");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    }
}