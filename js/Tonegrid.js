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

function onCellLoaded() {
    for (var i = 0; i < 48; i++) {
        $('#cellPrototype')
            .clone()
            .appendTo('#container')
            .css({
                display: 'block', // the prototype we're copying from is hidden--unhide these
                position: 'absolute',
                left: 50 + (Math.floor(i) % 8) * 60,
                top: 50 + Math.floor(Math.floor(i) / 8) * 60
            });
    }
}

$(function() {

    initGibber();

    var container = $('#container');
    container.on('click', '#NoteRing', function(evt) {
        console.log("current", evt.currentTarget);
        console.log("delagate", evt.delegateTarget);
    });

    $("#cellPrototype").load("svg/cell.svg", onCellLoaded);

    //     if (target != null) {
    //         targetId = target.id;
    //         if (targetId.charAt(0) == 'i') {
    //             var note = parseInt(targetId.substr(1));
    //             console.log("Note: " + note);
    //             s.decay = ms(rndi(50, 1000));
    //             s.note(note);
    //         }
    //     }
    // }

});

/*
   // Display framerate
   var iv = setInterval(function() {
   console.log(frame);
   frame = 0;
   }, 1000);
*/
