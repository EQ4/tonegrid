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
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 6; y++) {
            $('#cellPrototype')
                .clone()
                .attr('id', 'i_' + x + '_' + y)
                .appendTo('#container')
                .css({
                    display: 'block', // the prototype we're copying from is hidden--unhide these
                    position: 'absolute',
                    left: 50 + x * 60,
                    top: 50 + y * 60
                });
        }
    }
    $('.NoteRing').hide();
    $('.Outside').hide();
    $("[class^='pInd']").hide();
}

$(function() {

    initGibber();

    var container = $('#container');
    container.on('click', '#NoteRing', function(evt) {
        console.log("current", evt.currentTarget);
        console.log("delegate", evt.delegateTarget);
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
