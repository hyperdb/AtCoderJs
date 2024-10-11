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
    N = parseInt(inputs[0]);
    A = inputs[1].split(' ').map((x) => parseInt(x));
    B = inputs[2].split(' ').map((x) => parseInt(x));

    console.log(Math.max(...A) + Math.max(...B));
}