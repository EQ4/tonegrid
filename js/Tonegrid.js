var frame = 0;

animate();

function animate() {
    // move stuff here

    frame++;
    requestAnimationFrame(animate);
}

function initGibber() {
    Gibber.init();
    s = Synth({
        attack: ms(10),
        decay: ms(50),
        maxVoices: 4
    });
}

$(function() {

  for(var i=0; i<48; i++) {
    $('#cellObject')
      .clone()
      .appendTo('body')
      .css({ 
        position: 'absolute',
        left: 50 + (Math.floor(i) % 8) * 60,
        top: 50 + Math.floor(Math.floor(i) / 8) * 60
      }); 
  }
    
    initGibber();

    var objTag = document.getElementById('cellObject');
    objTag.addEventListener('load', function() {

        var svgDoc = objTag.getSVGDocument();

        svgDoc.onclick = function(event) {
          var target = event.target;
          while (target != null) {
            if (target.id != null && target.id != "") {
              console.log("Delegated Target:", target.id);
              break;
            } else {
              target = target.parentElement;
            }
          }

          if (target != null) {
            targetId = target.id;

            if (targetId.charAt(0) == 'i') {
                var note = parseInt(targetId.substr(1));
                console.log("Note: " + note);
                s.decay = ms(rndi(50,1000));
                s.note(note);
            }
          }
        }
    });
});

/*
   // Display framerate
   var iv = setInterval(function() {
   console.log(frame);
   frame = 0;
   }, 1000);
*/
