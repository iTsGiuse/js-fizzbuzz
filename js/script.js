for (let i = 1; i <= 100; i++) {
    
    /* STAMPA IN CONSOLE I NUMERI DA 1 A 100 */
    /* console.log(i); */
    
   /*  STAMPA I MULTIPLI DI 3 E 5 */
    if (i % 3 === 0 && i % 5 === 0) {
        const fizzBuzz = 'fizzbuzz';
        console.log(fizzBuzz);

        let card = document.querySelector("div.container");
        card.innerHTML += `<card class"quadrato" style="border: 1px solid black; width: 80px; height: 80px; background-color: #f0466f; text-align: center; padding-top: 30px;"> ${fizzBuzz} </card>`;
        
    /* STAMPA I MULTIPLI DI 3 */
    } else if (i % 3 === 0) {
        const fizz = 'fizz';
        console.log(fizz);

        let card = document.querySelector("div.container");
        card.innerHTML += `<card class"quadrato" style="border: 1px solid black; width:80px; height: 80px; background-color: #0cd6a1; text-align: center; padding-top: 30px;"> ${fizz} </card>`;
    
    /* STAMPA I MULTIPLI DI 5 */
    } else if (i % 5 === 0) {
        const buzz = "buzz";
        console.log(buzz);

        let card = document.querySelector("div.container");
        card.innerHTML += `<card class"quadrato" style="border: 1px solid black; width:80px; height: 80px; background-color: #ffd166; text-align: center; padding-top: 30px;"> ${buzz} </card>`;

    } else {
        console.log(i);

        let card = document.querySelector("div.container");
        /* card.innerHTML += `<card class"quadrato" style="border: 1px solid black; width:80px; height: 80px; background-color: #1389b2; text-align: center; padding-top: 30px;"> ${i} </card>`; */
        card.innerHTML = i;
        card.nameClass.add('quadrato');
        card.style.border= "10px solid black";
        card.append(append);
    }



}