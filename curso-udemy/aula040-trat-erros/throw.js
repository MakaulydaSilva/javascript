function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== "number") {
        throw new Error('x e y Precisam ser números');
    }
    return x + y;

}

try {
    console.log(soma(1, 2));
    console.log(soma("1", 4));
}catch(error) {
    console.log(error);
    // console.log(error)
    console.log('Alguma cois mais amigavel para o usuario')
}
   