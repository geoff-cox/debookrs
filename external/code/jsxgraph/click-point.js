/*
This example is licensed under a 
Creative Commons Attribution 4.0 International License.
https://creativecommons.org/licenses/by/4.0/

Please note that you have to mention 
The Center of Mobile Learning with Digital Technology
in the credits.
*/

const BOARDID = 'jsxgraph-clicky'; // Insert your id here!

const board = JXG.JSXGraph.initBoard(BOARDID, {
    boundingbox: [-5, 5, 5, -5],
    axis: true
});

const last_pt = [];
const this_pt = [];

let PT = board.create('point', [0, 0], {
    name: '',
    label: {offset: [10, -5], fontSize: 16},
    snapToGrid: true
});


var getMouseCoords = function(e, i) {
        var pos = board.getMousePosition(e, i);
        return new JXG.Coords(JXG.COORDS_BY_SCREEN, pos, board);
    },

    handleDown = function(e) {
        var canCreate = true,
            i, coords, el;

        if (e[JXG.touchProperty]) {
            // index of the finger that is used to extract the coordinates
            i = 0;
        }
        coords = getMouseCoords(e, i);

        for (el in board.objects) {
            if (JXG.isPoint(board.objects[el]) && board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
                canCreate = false;
                break;
            }
        }

        if (canCreate) {
            this_pt[0] = coords.usrCoords[1];
            this_pt[1] = coords.usrCoords[2];
            if (last_pt.length > 0) {
                board.create('line', [last_pt, this_pt], {straightFirst:false, straightLast:false});
            }
            last_pt[0] = this_pt[0];
            last_pt[1] = this_pt[1];
            if ( Math.abs(last_pt[0] - 1) < 0.2 && Math.abs(last_pt[1] - 1) < 0.2 ) {
                PT.name = 'YES!';
            } else {
                PT.name = 'NOOOOO';
            }
        }
    };

board.on('down', handleDown);