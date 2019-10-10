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


// Making right hip

// Making left knee

// Making right knee

//



// Setting up the camera file
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

// Making the POSE function
function gotPoses(poses){
  //console.log(poses);
  if (poses.length > 0){
  // for nose
  let newNoseX = poses[0].pose.keypoints[0].position.x;
  let newNoseY = poses[0].pose.keypoints[0].position.y;
  
  // for left eye
  let newLeftEyeX = poses[0].pose.keypoints[1].position.x;
  let newLeftEyeY = poses[0].pose.keypoints[1].position.y;
  
  // for righ eye
  let newRightEyeX = poses[0].pose.keypoints[2].position.x;
  let newRightEyeY = poses[0].pose.keypoints[2].position.y;

  // for left ear
  let newLeftEarX = poses[0].pose.keypoints[3].position.x;
  let newLeftEarY = poses[0].pose.keypoints[3].position.y;

  // for right ear
  let newRightEarX = poses[0].pose.keypoints[4].position.x;
  let newRightEarY = poses[0].pose.keypoints[4].position.y;

  // for left shoulder
  let newleftShoulderX = poses[0].pose.keypoints[5].position.x;
  let newleftShoulderY = poses[0].pose.keypoints[5].position.y;

  // for right shoulder
  let newRightShoulderX = poses[0].pose.keypoints[6].position.x;
  let newRightShoulderY = poses[0].pose.keypoints[6].position.y;

  // for left elbow
  let newLeftElbowX = poses[0].pose.keypoints[7].position.x;
  let newLeftElbowY = poses[0].pose.keypoints[7].position.y;

  // for right elbow
  let newRightElbowX = poses[0].pose.keypoints[8].position.x;
  let newRightElbowY = poses[0].pose.keypoints[8].position.y;

  // making delay in poit positing
  noseX = lerp(noseX, newNoseX, 0.5);
  noseY = lerp(noseY, newNoseY, 0.5);
    
  rightEyeX = lerp(rightEyeX, newRightEyeX, 0.5);
  rightEyeY = lerp(rightEyeY,newRightEyeY, 0.5);
    
  leftEyeX = lerp(leftEyeX, newLeftEyeX, 0.5);
  leftEyeY = lerp(leftEyeY, newLeftEyeY, 0.5);

  leftEarX = lerp(leftEarX, newLeftEarX, 0.5);
  leftEarY = lerp(leftEarY, newLeftEarY, 0.5);

  rightEarX = lerp(rightEarX, newRightEarX, 0.5);
  rightEarY = lerp(rightEarY, newRightEarY, 0.5);

  leftShoulderX = lerp(leftShoulderX, newleftShoulderX, 0.5);
  leftShoulderY = lerp(leftShoulderY, newleftShoulderY, 0.5);
  
  rightShoulderX = lerp(rightShoulderX, newRightShoulderX, 0.5);
  rightShoulderY = lerp(rightShoulderY, newRightShoulderY, 0.5);

  leftElbowX = lerp(leftElbowX, newLeftElbowX, 0.5);
  leftElbowY = lerp(leftElbowY, newLeftElbowY, 0.5);

  rightElbowX = lerp(rightElbowX, newRightElbowX, 0.5);
  rightElbowY = lerp(rightElbowY, newRightElbowY, 0.5);

  }
}

function modelReady(){
console.log('model ready');
}

function draw() {
  image(video, 0, 0);
  
  // Color for Nose
  fill(255, 0, 0);
  ellipse(noseX, noseY, 10);

  
  // Color for right eye 
  fill(0, 255, 0);
  ellipse(rightEyeX, rightEyeY, 5);
  ellipse(leftEyeX, leftEyeY, 5);

  
  // Color for left eye
  fill(0, 0, 255);
  ellipse(leftShoulderX, leftShoulderY, 20);
  ellipse(rightShoulderX, rightShoulderY, 20);

  fill(0,255,0);
  ellipse(rightEarX, rightEarY, 5);
  ellipse(leftEarX, leftEarY, 5);
  ellipse(leftElbowX, leftElbowY, 10);
  ellipse(rightElbowX, rightElbowY, 10);
  

}