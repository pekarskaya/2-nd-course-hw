function kamenNozhnitsy4() {

    const playerChoice = prompt('Камень, ножницы, бумага?');
        
        alert("Ваш выбор: " + playerChoice);
    
    
    
        let arrSSP = [`камень`, `ножницы`, `бумага`];
        
        const computerChoice = arrSSP[Math.floor(Math.random() * arrSSP.length)];
    
        alert("Выбор компьютера: " + computerChoice);
       
    
    function resultPlay() {
        
            if (playerChoice === computerChoice) {
    
                alert("Ничья!");
    
                } else if (
            
                (playerChoice === `камень` && computerChoice === `ножницы`) ||
                
                (playerChoice === `ножницы` && computerChoice === `бумага`) ||
                
                (playerChoice === `бумага` && computerChoice === `камень`)
                
                ) {
    
                alert("Вы победили!");
    
                 } else {
                  
                    alert("Компьютер победил!");
               
                }
            }
            resultPlay()
                 
    }
   
    