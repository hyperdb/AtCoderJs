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
    var c = 0;
    for (var i = 0; i < 12; i++) {
        const S = inputs[i];
        if (S.length - 1 == i) {
            c++;
        }
    }
    console.log(c);
}