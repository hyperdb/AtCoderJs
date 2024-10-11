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
    const S = inputs[0].split('');
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    var p = []
    a.forEach((x) => {
        p.push(S.indexOf(x));
    });

    var q = 0;
    for (var i = 1; i < p.length; i++) {
        q += Math.abs(p[i] - p[i - 1]);
    }
    console.log(q);
}