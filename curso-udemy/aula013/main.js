
//               0123456789...35

let umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString[4]);

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia. `);

console.log(umaString.indexOf('texto'));

console.log(umaString.indexOf('o' , 3));

console.log(umaString.lastIndexOf('o'));

console.log(umaString.lastIndexOf('m', 3));

console.log(umaString.match(/[a-z]/g));

console.log(umaString.match(/[a-z]/));

console.log(umaString.search(/x/));

//console.log(umaString.replace(/r/g, '#'));

console.log(umaString.length);

//console.log(umaString.length - 3);
console.log(umaString.slice(-3));
console.log(umaString.slice(32));

console.log(umaString.slice(-5));

console.log(umaString.slice(-5, -1));

console.log(umaString.substring(umaString.length - 5));

console.log(umaString.split(' ',3));

console.log(umaString.toUpperCase());

console.log(umaString.toLowerCase())

