// Calling video library
let video;

// Calling posenet application
let poseNet;

// Making NOSE variable
let noseX = 0;
let noseY = 0;

// Making leftEye variable
let leftEyeX = 0;
let leftEyeY = 0;

// Making rightEye variable
let rightEyeX = 0;
let rightEyeY = 0;

// Making leftEar 
let leftEarX = 0;
let leftEarY = 0;

// Making rightEar
let rightEarX = 0;
let rightEarY = 0;

// Making left shoulder
let leftShoulderX = 0;
let leftShoulderY = 0;

// Making right shoulder
let rightShoulderX = 0;
let rightShoulderY = 0;

// Making left elbow
let leftElbowX = 0;
let leftElbowY = 0; 

// Making right elbow
let rightElbowX = 0;
let rightElbowY = 0;

// Making left wrist
let leftWristX = 0;
let leftWristY = 0;

// Making right wrist
let rightWristX = 0;
let rightWristY = 0;

// Making left hip
let leftHipX = 0;
let leftHipY = 0;

// Making right hip
let rightHipX = 0;
let rightHipY = 0;

// Making left knee
let leftKneeX = 0;
let leftKneeY = 0;

// Making right knee
let rightKneeX = 0;
let rightKneeY = 0;

// Making left ankle
let leftAnkleX = 0;
let leftAnkleY = 0;

// Making right ankle
let rightAnkleX = 0; 
let rightAnkleY = 0;

// Making neck
let neckX = 0;
let neckY = 0;

// Making back 
let backX = 0; 
let backY = 0;

// Setting up the camera file

function setup() {
  createCanvas(640, 480);  
  video = createCapture(VIDEO);
  // video.size(1080, 720);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

// Making the POSE function
function gotPoses(poses){
  //console.log(poses);
  if (poses.length > 0){
  // nose position
  let newNoseX = poses[0].pose.keypoints[0].position.x;
  let newNoseY = poses[0].pose.keypoints[0].position.y;
  
  // left eye position
  let newLeftEyeX = poses[0].pose.keypoints[1].position.x;
  let newLeftEyeY = poses[0].pose.keypoints[1].position.y;
  
  // right eye position
  let newRightEyeX = poses[0].pose.keypoints[2].position.x;
  let newRightEyeY = poses[0].pose.keypoints[2].position.y;

  // left ear position
  let newLeftEarX = poses[0].pose.keypoints[3].position.x;
  let newLeftEarY = poses[0].pose.keypoints[3].position.y;

  // right ear position
  let newRightEarX = poses[0].pose.keypoints[4].position.x;
  let newRightEarY = poses[0].pose.keypoints[4].position.y;

  // left shoulder position
  let newleftShoulderX = poses[0].pose.keypoints[5].position.x;
  let newleftShoulderY = poses[0].pose.keypoints[5].position.y;

  // right shoulder position
  let newRightShoulderX = poses[0].pose.keypoints[6].position.x;
  let newRightShoulderY = poses[0].pose.keypoints[6].position.y;

  // left elbow position
  let newLeftElbowX = poses[0].pose.keypoints[7].position.x;
  let newLeftElbowY = poses[0].pose.keypoints[7].position.y;

  // right elbow 
  let newRightElbowX = poses[0].pose.keypoints[8].position.x;
  let newRightElbowY = poses[0].pose.keypoints[8].position.y;

  // for left wrist
  let newLeftWristX = poses[0].pose.keypoints[9].position.x;
  let newLeftWristY = poses[0].pose.keypoints[9].position.y;

  // for right wrist
  let newRightWristX = poses[0].pose.keypoints[10].position.x;
  let newRightWristY = poses[0].pose.keypoints[10].position.y;

  // for left hip
  let newLeftHipX = poses[0].pose.keypoints[11].position.x;
  let newLeftHipY = poses[0].pose.keypoints[11].position.y;

  // for right hip
  let newRightHipX = poses[0].pose.keypoints[12].position.x;
  let newRightHipY = poses[0].pose.keypoints[12].position.y;

  // for left knee
  let newLeftKneeX = poses[0].pose.keypoints[13].position.x;
  let newLeftKneeY = poses[0].pose.keypoints[13].position.y;

  // for right knee
  let newRightKneeX = poses[0].pose.keypoints[14].position.x;
  let newRightKneeY = poses[0].pose.keypoints[14].position.y;

  // for left Ankle
  let newLeftAnkleX = poses[0].pose.keypoints[15].position.x;
  let newLeftAnkleY = poses[0].pose.keypoints[15].position.y;

  // for right Ankle
  let newRightAnkleX = poses[0].pose.keypoints[16].position.x;
  let newRightAnkleY = poses[0].pose.keypoints[16].position.y;

  // making delay nose
  noseX = lerp(noseX, newNoseX, 0.5);
  noseY = lerp(noseY, newNoseY, 0.5);
   
  // making delay right Eye
  rightEyeX = lerp(rightEyeX, newRightEyeX, 0.5);
  rightEyeY = lerp(rightEyeY,newRightEyeY, 0.5);
    
  // making  delay left eye
  leftEyeX = lerp(leftEyeX, newLeftEyeX, 0.5);
  leftEyeY = lerp(leftEyeY, newLeftEyeY, 0.5);

  // making delay left ear
  leftEarX = lerp(leftEarX, newLeftEarX, 0.5);
  leftEarY = lerp(leftEarY, newLeftEarY, 0.5);

  // making delay right ear
  rightEarX = lerp(rightEarX, newRightEarX, 0.5);
  rightEarY = lerp(rightEarY, newRightEarY, 0.5);

  // making delay in left shoulder
  leftShoulderX = lerp(leftShoulderX, newleftShoulderX, 0.5);
  leftShoulderY = lerp(leftShoulderY, newleftShoulderY, 0.5);
  
  // making right shoulder
  rightShoulderX = lerp(rightShoulderX, newRightShoulderX, 0.5);
  rightShoulderY = lerp(rightShoulderY, newRightShoulderY, 0.5);


  leftElbowX = lerp(leftElbowX, newLeftElbowX, 0.5);
  leftElbowY = lerp(leftElbowY, newLeftElbowY, 0.5);

  rightElbowX = lerp(rightElbowX, newRightElbowX, 0.5);
  rightElbowY = lerp(rightElbowY, newRightElbowY, 0.5);

  leftWristX = lerp(leftWristX, newLeftWristX, 0.5);
  leftWristY = lerp(leftWristY, newLeftWristY, 0.5);

  rightWristX = lerp(rightWristX, newRightWristX, 0.5);
  rightWristY = lerp(rightWristY, newRightWristY, 0.5);

  leftHipX = lerp(leftHipX, newLeftHipX, 0.5);
  leftHipY = lerp(leftHipY, newLeftHipY, 0.5);

  rightHipX = lerp(rightHipX, newRightHipX, 0.5);
  rightHipY = lerp(rightHipY, newRightHipY, 0.5);

  leftKneeX = lerp(leftKneeX, newLeftKneeX, 0.5);
  leftKneeY = lerp(leftKneeY, newLeftKneeY, 0.5);

  rightKneeX = lerp(rightKneeX, newRightKneeX, 0.5);
  rightKneeY = lerp(rightKneeY, newRightKneeY, 0.5);

  leftAnkleX = lerp(leftAnkleX, newLeftAnkleX, 0.5);
  leftAnkleY = lerp(leftAnkleY, newLeftAnkleY, 0.5);

  rightAnkleX = lerp(rightAnkleX, newRightAnkleX, 0.5);
  rightAnkleY = lerp(rightAnkleY, newRightAnkleY, 0.5);

  neckX = (rightShoulderX+leftShoulderX)/2;
  neckY = (rightShoulderY+leftShoulderY)/2;

  backX = (rightHipX + leftHipX)/2;
  backY = (rightHipY + leftHipY)/2;

  }
}

function modelReady(){
console.log('model ready');
}

// Making eye's little bit funny
// function eye(x, y, size, n) {
// 	let angle = frameCount * 0.2;
	
// 	fill(255);
// 	noStroke();
// 	ellipse(x, y, size, size);
	
// 	fill(56);
// 	noStroke();
// 	ellipse(x+cos(angle*n)*size/5, y+sin(angle*n)*size/5, size/2, size/2);
// }

function draw() {
  image(video, 0, 0);
  
  // Points
  // GREEN
  fill('green');
  

  //ellipse(noseX, noseY, 5);               // Nose
  ellipse(rightEyeX, rightEyeY, 5);         //right eye
  ellipse(leftEyeX, leftEyeY, 5);           // left eye
  //ellipse(rightEarX, rightEarY, 5);       // right ear
  //ellipse(leftEarX, leftEarY, 5);         // left ear
  ellipse(leftElbowX, leftElbowY, 10);      // left elbow
  ellipse(rightElbowX, rightElbowY, 10);    // right elbow
  ellipse(leftHipX, leftHipY, 10);          // left hip 
  ellipse(rightHipX, rightHipY, 10);        // right hip
  ellipse(leftShoulderX, leftShoulderY, 20);// left shoulder
  ellipse(rightShoulderX, rightShoulderY, 20); // right shoulder
  ellipse(leftWristX, leftWristY, 50);        // left wrist
  ellipse(rightWristX, rightWristY, 50);      // right writst
  ellipse(leftKneeX, leftKneeY, 10);          // left knee
  ellipse(rightKneeX, rightKneeY, 10);        // right knee
  ellipse(leftAnkleX, leftAnkleY, 10);        // left ankle
  ellipse(rightAnkleX, rightAnkleY, 10);      // right ankle

  // Lines
  stroke(0, 255, 0); // making lines in green
  strokeWeight(8);
  line(rightShoulderX, rightShoulderY, leftShoulderX, leftShoulderY);    // right shoulder to left shoulder
  line(rightElbowX, rightElbowY, rightShoulderX, rightShoulderY);        // right elbow to right shoulder
  line(rightElbowX, rightElbowY, rightWristX, rightWristY);              // right elbow to right wrist
  line(leftShoulderX, leftShoulderY, leftElbowX, leftElbowY);            // left shoulder to right elbow
  line(leftElbowX, leftElbowY, leftWristX, leftWristY);                  // left wrist to left elbow
  // line(leftShoulderX, leftShoulderY, leftHipX, leftHipY);                // left shoulder to left hip
  // line(rightShoulderX, rightShoulderY, rightHipX, rightHipY);            // right shoulder to right hip
  line(rightHipX, rightHipY, leftHipX, leftHipY);                        // right hip to left hip
  line(leftHipX, leftHipY, leftKneeX, leftKneeY);                        // left hip to left knee
  line(rightHipX, rightHipY, rightKneeX, rightKneeY);                    // right hip to right knee
  line(leftKneeX, leftKneeY, leftAnkleX, leftAnkleY);                    // left knee to left ankle
  line(rightKneeX, rightKneeY, rightAnkleX, rightAnkleY);                // right knee to right ankle
  line(noseX, noseY, neckX, neckY)                                       // nose to neck    
  line(neckX, neckY, backX, backY)                                       // neck to back 

  // eye(rightEyeX, rightEyeY, 40, 1);                                      // Making right eye as funny
  // eye(leftEyeX, leftEyeY, 40, -1);                                       // Making left eye as funny
}
