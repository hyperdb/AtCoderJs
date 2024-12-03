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
    const S = inputs[1];

    var cnt = 0;
    for (i = 1; i < N - 1; i++) {
        if (S.charAt(i) != '.') {
            continue;
        }
        if (S.charAt(i - 1) == '#' && S.charAt(i + 1) == '#') {
            cnt++;
        }
    }
    console.log(cnt);
}