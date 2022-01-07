status="";

function setup()
{
    canavs = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded()
{
console.log('ModelLoaded');
status=true;
}

function draw()
{
    image(video,0,0,470,370)
}