function recursiva(max) {
    console.log(max);
    if (max >= 10) return; //Tem um limite para a recursividade
    max++;
    recursiva(max); //Chama a função de volta
}

recursiva(0);