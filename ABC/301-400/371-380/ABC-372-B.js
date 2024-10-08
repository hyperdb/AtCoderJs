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
    var M = parseInt(inputs[0]);

    var c = []
    while (M > 0) {
        result = divmod(M, 3)
        M = result[0]
        c.push(result[1])
    }

    var i = 0;
    var a = [];
    c.forEach(col => {
        if (col > 0) {
            for (var j = 0; j < col; j++) {
                a.push(i);
            }
        }
        i++;
    });

    console.log(a.length);
    console.log(a.map((x) => String(x)).join(' '))
}
/**
 * 
 */
function divmod(a, b) {
    return [Math.trunc(a / b), a % b]
}