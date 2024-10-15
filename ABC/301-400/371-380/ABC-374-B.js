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
    const S = inputs[0];
    const T = inputs[1];

    if (S == T) {
        console.log(0);
    } else {
        var ls = S.length;
        var lt = T.length;

        var r = false
        var c = Math.min(ls, lt)
        for (var i = 0; i < c; i++) {
            if (S.charAt(i) == T.charAt(i)) {
                continue;
            } else {
                console.log(i + 1);
                r = true;
                break;
            }
        }
        if (!r) {
            console.log(c + 1)
        }
    }
}