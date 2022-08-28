// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //__proro__: Object.prototype
};



const objB = {
    chaveB: 'B'
    //__proro__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);
