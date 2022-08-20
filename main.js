leftWristX=0;
rightWristX = 0;
difference = 0;

 function setup(){
    video = createCapture (VIDEO);
    video.size(500 , 500);

    canvas=createCanvas(700 , 500);
    canvas.position(560 ,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
 }

 function modelLoaded(){
    console.log("PoseNet has been initialized !");
   }

    function gotPoses(results){
        if( results.length > 0 ){
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x ;
            rightWristX = results[0].pose.rightWrist.x  ;
            difference = floor(leftWristX - rightWristX);
        }
     }

     function draw(){
        background("#a3a19b");
        document.getElementById("font_size").innerHTML= "The font size of the text is : " + difference + "px";
        fill("#011942");
        stroke("#020a17");
        text("Harry" , 70  , 400);
        textSize(difference);
     }