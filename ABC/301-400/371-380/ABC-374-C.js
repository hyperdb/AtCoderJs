/*
 * TLE
 */
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

    var a = sum(K);
    var b = a;

    for (var i = 1; i < N; i++) {
        c = combination(K, i);
        c.forEach((x) => {
            var y = sum(x);
            b = Math.min(b, Math.max(y, a - y));
        });
    }
    console.log(b);

}

const combination = (array, n) => {
    return n === 1
        ? array.map(x => [x])
        : array.flatMap((x, i) => {
            return combination(array.slice(i + 1), n - 1)
                .map(y => [x].concat(y))
        })
}

const sum = (array) => {
    return array.reduce((sum, x) => {
        return sum + x;
    }, 0);
}