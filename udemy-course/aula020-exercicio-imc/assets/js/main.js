function imc() {
    
    const form = document.querySelector('.form');

   

    function buttonEvent(event) {
        event.preventDefault();

        const peso = document.querySelector('.peso');

        console.log(peso.value);
    }
    

    form.addEventListener('submit', buttonEvent);

   
}

imc();