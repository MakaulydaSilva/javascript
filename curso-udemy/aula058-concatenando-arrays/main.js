const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Makauly' );
//console.log(a3);

// ...rest -> ...spread

const a4 = [1, 2, 3];
const a5 = [4, 5, 6];
const a6 = [...a4, 'Makauly', ...a5, ...[7, 8, 9]];
console.log(a6);