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
                    left: 50 + x * 60,
                    top: 50 + y * 60
                });
        }
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
                break;

                // if (targetId.charAt(0) == 'i') {
                //     var note = parseInt(targetId.substr(1));
                //     console.log("Note: " + note);
                //     s.decay = ms(rndi(50, 1000));
                //     s.note(note);
                // }
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
