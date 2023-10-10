function funCompute() {
    var nBegin = parseInt(document.getElementById('compute').innerHTML);
    var Sum = 0;
    const result = document.getElementById('sum');
    for (var i = nBegin; i <= 1000; i++) {
        if (i % 2 !== 0) {
            Sum += i;
        }
    }
    result.innerHTML = 'Sum of odd integers from ' + nBegin + ' to 1000 is ' + Sum;
}
const liElement = document.getElementById('compute');
liElement.onclick = funCompute;