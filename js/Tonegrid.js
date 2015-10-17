var frame = 0;

animate();

function animate() {
  // move stuff here

  frame++;
  requestAnimationFrame(animate);
}

/*
   // Display framerate
   var iv = setInterval(function() {
   console.log(frame);
   frame = 0;
   }, 1000);
*/

