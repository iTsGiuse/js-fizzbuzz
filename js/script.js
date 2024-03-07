for (let i=0; i<100; i++) {
    
    /* STAMPA IN CONSOLE I NUMERI DA 1 A 100 */
    console.log(i);
    
   /*  STAMPA I MULTIPLI DI 3 E 5 */
    if (i % 3 == 0 && i % 5 == 0) {
        const fizzBuzz = 'fizzbuzz';
        console.log(fizzBuzz);

    /* STAMPA I MULTIPLI DI 3 */
    } else if (i % 3 == 0) {
        const fizz = 'fizz';
        console.log(fizz);
    
    /* STAMPA I MULTIPLI DI 5 */
    } else if (i % 5 == 0) {
        const buzz = "buzz";
        console.log(buzz);
    }
}