/**
 * 
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
/**
 * 
 */
function main(inputs) {
    const argv = inputs[0].split(' ');
    const N = parseInt(argv[0]);
    const M = parseInt(argv[1]);
    var c = Array(N + 1);
    c.fill(0);

    for (var i = 1; i <= M; i++) {
        var params = inputs[i].split(' ');
        var A = parseInt(params[0]);
        var B = params[1];

        if (B == 'F') {
            console.log('No');
            continue;
        }
        console.log(c[A] == 0 ? 'Yes' : 'No');
        c[A]++;
    }
}