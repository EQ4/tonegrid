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

    initGibber();

    var objTag = document.getElementById('cellObject');
    objTag.addEventListener('load', function() {

        var svgDoc = objTag.getSVGDocument();

        svgDoc.onmouseover = function(event) {
            var targetId = event.target.id;

            console.log("Target: \t" + targetId);

            if (targetId.charAt(0) == 'i') {
                var note = parseInt(targetId.substr(1));
                console.log("Note: \t\t" + note);
                s.decay = ms(rndi(50,1000));
                s.note(note);

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
