function numero(x) {
   
    if(typeof x !== "number") {
        return x;
    } else if (x % 3 === 0 && x % 5 === 0 ) {
        return "FizzBuzz";
    } else if (x % 3 === 0) {
        return "Fizz";
    } else if (x % 5 === 0) {
        return "Buzz";
    } return x;
   
} 
  
    for (let i = 0; i <= 100; i++) {
        console.log(i, numero(i) )
    }









