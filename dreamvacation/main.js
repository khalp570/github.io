/ select video element
var vid = document.getElementById('v0');
var time = $('#time');
var scroll = $('#scroll');
var windowheight = $(window).height()-10;


var scrollpos = window.pageYOffset/10;
var targetscrollpos = scrollpos;                              
var accel = 0;


// ---- Values you can tweak: ----
var accelamount = 0.1; //How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.

// pause video on load
vid.pause();
 
window.onscroll = function(){
    //Set the video position that we want to end up at:
    targetscrollpos = window.pageYOffset/10;
  
    //move the red dot to a position across the side of the screen
    //that indicates how far we've scrolled.
    scroll.css('top', 10+(window.pageYOffset/130*windowheight));
};


setInterval(function(){  
        
      //Accelerate towards the target:
      scrollpos += (targetscrollpos - scrollpos)*accelamount;
  
      //move the blue dot to a position across the side of the screen
      //that indicates where the current video scroll pos is.  
      time.css('top', 10+(scrollpos/130*10*windowheight));
  
      //update video playback
      vid.currentTime = scrollpos;
      vid.pause();
    
}, 40);