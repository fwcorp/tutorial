function test(...args) {
    console.log(args);
    const t = JSON.stringify(args);
    console.log(t);
}

test(1, 2, 3);