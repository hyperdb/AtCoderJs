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
    const S = inputs[0];

    console.log(S.replaceAll(".", ""));
}
