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
    const S = inputs[0].split(' ');
    var a = 0, b = 0, c = 0;

    if (S[0] == '>') {
        a++;
    }
    else {
        b++;
    }
    if (S[1] == '>') {
        a++;
    }
    else {
        c++;
    }
    if (S[2] == '>') {
        b++;
    }
    else {
        c++;
    }

    console.log(a == 1 ? 'A' : (b == 1 ? 'B' : 'C'));
}
