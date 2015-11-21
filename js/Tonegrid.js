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
                .attr('class', 'cellDiv')
                .appendTo('#container')
                .css({
                    display: 'block', // the prototype we're copying from is hidden--unhide these
                    position: 'absolute',
                    left: 50 + x * 144,
                    top: 50 + y * 144
                });
        }
    }
    $('.NoteRing').hide();
    $('.Outside').hide();
    $("[class^='pInd']").hide();
}

function handleClick(cellId, buttonName) {
    // e.g. : "i_4_5", "Layer_1"

    // what follows is demo-hack code.  Don't trust it.
    $(".Outside").hide();
    $(".NoteRing").hide();

    $("#" + cellId + " .Outside").show();
    $("#" + cellId + " .NoteRing").show();

    if (buttonName.charAt(0) == 'i') {
        var note = parseInt(buttonName.substr(1));
        console.log("Note: " + note);
        s.decay = ms(rndi(50, 1000));
        s.note(note);
    }
}

$(function() {

    initGibber();

    var container = $('#container');
    container.on('click', '.cellDiv', function(evt) {
        console.log("which cell", evt.currentTarget.id);

        var target = evt.target;

        while (target != null) {
            var targetClassList = target.classList;
            if (targetClassList.length > 0) {
                // found a named SVG element, i.e. a UI item
                console.log("which UI element", target.classList[0]);

                handleClick(evt.currentTarget.id, target.classList[0]);
                break;

            } else {
                target = target.parentElement;
            }
        }
    });

    $("#cellPrototype").load("svg/cell.svg", onCellLoaded);

});

/*
// Display framerate
var iv = setInterval(function() {
console.log(frame);
frame = 0;
}, 1000);
*/
