function three(integer) {
    integer = String(integer);
    let count = -1;
    let output = "";
    for (let i = integer.length - 1; i >= 0; i--) {
        if (count === 2) {
            output += ',' + integer[i];
            count = 0;
        } else {
            output += integer[i];
            count++;
        }
    }
    output = output.split("").reverse().join("")
    console.log(output)
}

three(12334333333330)