difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550)
    video.position(200, 200)

    canvas = createCanvas(550, 550);
    canvas.position(1000, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    background('coral');
    document.getElementById("display_size").innerHTML = "The size of the text will be = " + difference + "px";
    textSize(difference);
    fill('black');
    text('Atiksh', 100, 400);
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}