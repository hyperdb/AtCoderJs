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
    const K = inputs[1].split(' ').map((x) => parseInt(x));

    var total = sum(K);
    var bits = 1 << N;

    var ans = total
    for (var i = 0; i < bits; i++) {
        var gr_A = 0;
        var gr_B = 0;
        for (var j = 0; j < N; j++) {
            flag = 1 << j;
            if (i & flag) {
                gr_A += K[j]
            }
        }
        gr_B = total - gr_A;
        ans = Math.min(ans, Math.max(gr_A, gr_B));
    }
    console.log(ans);
}

const sum = (array) => {
    return array.reduce((sum, x) => {
        return sum + x;
    }, 0);
}