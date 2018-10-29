
var angle = 0;


function setup() {
  createCanvas(400, 400);
  background(135,206,250); // light blue
  noStroke();
}

//create a daisy pattern when mouse is pressed
function draw() {
  if (mouseIsPressed == true) {
    //for petals of daisy
    angle += 5;
    var value = cos(radians(angle)) * 12.0;
    for (var a = 0; a < 360; a += 75) {
      var xoff = cos(radians(a)) * value;
      var yoff = sin(radians(a)) * value;
      fill(255,255,51);
      ellipse(mouseX + xoff, mouseY + yoff, value, value);
    }
    //for the center of the daisy
    fill(255);
    ellipse(mouseX, mouseY, 10, 10);
  }
}

//play audio with buttons
$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/sound/cakesong.mp3');
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    audioElement.addEventListener("canplay",function(){
        $("#length").text("Song Total Duration in Minutes: " + audioElement.duration + "second");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Press 'Play' to listen to jazz").css("color","blue");
    });
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second: " + audioElement.currentTime);
    });
    
    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Current Status: Music Playing");
    });
    
    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Current Status: Music Paused");
    });
    
    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
});






