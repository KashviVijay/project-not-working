function setup(){
    canvas=createCanvas(640,400);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 230, 150, 220,200);
    fill(video,230,150,220,200);
    stroke(0,128,0);
    circle(50,50,80);

    image(video, 230, 150, 220,200);
    fill(video,230,150,220,200);
    stroke(0,128,0);
    circle(50,50,80);
    



}