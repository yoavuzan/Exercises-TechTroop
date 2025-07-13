[x, op, y] = process.argv.slice(2);

res = eval((x + op + y));

console.log(`${x} ${op} ${y} = ${res}`);
