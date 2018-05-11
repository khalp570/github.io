$(function() {
  var frameNumber = 0; // start video at frame 0
  // lower numbers = faster playback
  var playbackConst = 400;
  // get page height from video duration
  var setHeight = document.getElementById("set-height");
  // select video element
  var vid = document.getElementById('v0');
  // var vid = $('#v0')[0]; // jquery option

  // dynamically set the page height according to video length
  vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
  });

  // Use requestAnimationFrame for smooth playback
  function scrollPlay(){
    var frameNumber  = Math.round(window.pageYOffset/playbackConst);
    vid.currentTime  = frameNumber;
  }

  $(window).scroll(function() {
    scrollPlay();
  });
});