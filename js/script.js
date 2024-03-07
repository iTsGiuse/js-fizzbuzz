for (let i = 1; i <= 100; i++) {
    
    /* STAMPA IN CONSOLE I NUMERI DA 1 A 100 */
    /* console.log(i); */
    
   /*  STAMPA I MULTIPLI DI 3 E 5 */
    if (i % 3 === 0 && i % 5 === 0) {
        const fizzBuzz = 'fizzbuzz';
        console.log(fizzBuzz);

        /* AGGIUNGI UNA CARD CON LA SUA CLASSE, PROPRIETA' E VARIABILE NELL'HTML SOTTO AL DIV-CONTAINER */
        let card = document.querySelector("div.container");
        card.innerHTML += `<div class"quadrato" style="border: 1px solid black; width: 80px; height: 80px; background-color: #f0466f; text-align: center; padding-top: 30px;"> ${fizzBuzz} </div>`;
        
    /* STAMPA I MULTIPLI DI 3 */
    } else if (i % 3 === 0) {
        const fizz = 'fizz';
        console.log(fizz);

        /* AGGIUNGI UNA CARD CON LA SUA CLASSE, PROPRIETA' E VARIABILE NELL'HTML SOTTO AL DIV-CONTAINER */
        let card = document.querySelector("div.container");
        card.innerHTML += `<div class"quadrato" style="border: 1px solid black; width:80px; height: 80px; background-color: #0cd6a1; text-align: center; padding-top: 30px;"> ${fizz} </div>`;
    
    /* STAMPA I MULTIPLI DI 5 */
    } else if (i % 5 === 0) {
        const buzz = "buzz";
        console.log(buzz);

        /* AGGIUNGI UNA CARD CON LA SUA CLASSE, PROPRIETA' E VARIABILE NELL'HTML SOTTO AL DIV-CONTAINER */
        let card = document.querySelector("div.container");
        card.innerHTML += `<div class"quadrato" style="border: 1px solid black; width:80px; height: 80px; background-color: #ffd166; text-align: center; padding-top: 30px;"> ${buzz} </div>`;

    } else {
        console.log(i);

        /* AGGIUNGI UNA CARD NELL'HTML SOTTO AL DIV-CONTAINER */
        let card = document.querySelector("div.container"); 
        card.innerHTML += `<div class="quadrato" style="border: 1px solid black; width:80px; height: 80px; background-color: #1389b2; text-align: center; padding-top: 30px;"> ${i} </div>`; 
        
        /* INSERIMENTO VARIABILE COME TESTO DELLA CARD */
   /*      const card = document.createElement("div");
        card.innerHTML = i;
        card.classList.add('quadrato');
        card.style.border= "10px solid white";
        card.style.width= "80px"; 
        card.style.height= "80px";
        card.append('card');   */
    }


}