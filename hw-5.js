function gameGuess1() {
   let gameGuess1 = document.getElementById('battonGame1'); 
   let number = Math.floor(Math.random() * 100 + 1);
   let guess
   let output
   let guessed = false

   do{
        guess = prompt("Отгадайте число от 1 до 100");
            alert("Введено число " + guess);
            if(guess > number) {
                alert("Ну вот, перелёт. Попробуйте ещё разок. Или два");
                guessed = false;
            } 
             else if(guess < number) {
                alert("Маловато будет. Пробуйте ещё");
                guessed = false;
            }
            else {
               alert("Да вы просто маг! Это число обязательно принесёт вам удачу!")
               guessed = true;
            } 
    }
    while (guessed === false);
    alert("Игра окончена");

    if(!confirm("Сыграем ещё?"));{
        
    }
}