Peter_pan_song="";
Harry_potter_theme_song="";
ScoreLeftWrist = ""
ScoreRightWrist = ""
LeftWristX = ""
RightWristX = ""
LeftWristY =""
RightWristY =""
song1status = ""
song2status = ""
function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on("pose", gotPoses)
}
function modelLoaded(){
    console.log("PoseNet Is Intizialized")
}
function gotPoses(results){
    if(results.length > 0 ){
      ScoreRightWrist = results[0].pose.keypoints[10].score
      ScoreLeftWrist =  results[0].pose.keypoints[9].score
      LeftWristX = results[0].pose.leftWrist.x
      LeftWristY = results[0].pose.leftWrist.y
      RightWristX = results[0].pose.rightWrist.x
      RightWristY = results[0].pose.rightWrist.y
    }
}
function stopSound(){
Peter_pan_song.stop()
Harry_potter_theme_song.stop()
Ashes_By_stellar.stop()
 We_Rollin.stop()
}

function preload(){
    Peter_pan_song = loadSound("music2.mp3");
    Harry_potter_theme_song = loadSound("music.mp3");
    Ashes_By_stellar = loadSound("Ashes+Stellar+Official+Lyric+Video.mp3");
    We_Rollin = loadSound("We Rollin-Shubh.mp3")
}

function draw(){
    image(video,0,0,600,530);
    song1status = Peter_pan_song.isPlaying();
    song2status = Harry_potter_theme_song.isPlaying();
    console.log(ScoreRightWrist)
    if(ScoreRightWrist > 0.2){
        Harry_potter_theme_song.stop()
        if(song1status == false){
            Peter_pan_song.play()
            document.getElementById("song_name").innerHTML = "Playing Peter_pan_song" 
        }
        
    }
    else if(ScoreLeftWrist > 0.2){
      console.log(ScoreLeftWrist)
        Harry_potter_theme_song.stop()
        if(song2status == false){
            Harry_potter_theme_song.play()
            document.getElementById("song_name").innerHTML = "Playing Harry_potter_theme_song"
    }

}
}