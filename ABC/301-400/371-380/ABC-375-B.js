process.stdin.resume();
process.stdin.setEncoding('utf8');

var g_input = '';
process.stdin.on('data', function (chunk) {
    g_input += chunk;
});
process.stdin.on('end', function () {
    main(g_input.split(/\r?\n/));
});

function main(inputs) {
    const N = parseInt(inputs[0]);
    var XY = [[0, 0]];
    for (var i = 0; i < N; i++) {
        var x = inputs[1 + i].split(' ').map((x) => parseInt(x));
        XY.push(x);
    }
    XY.push([0, 0]);

    var costs = 0.0;
    for (var i = 1; i < N + 2; i++) {
        x1 = XY[i - 1][0];
        y1 = XY[i - 1][1];
        x2 = XY[i][0];
        y2 = XY[i][1];

        cost_x = Math.pow(x1 - x2, 2);
        cost_y = Math.pow(y1 - y2, 2);

        costs += Math.pow(cost_x + cost_y, 0.5);
    }
    console.log(costs);
}