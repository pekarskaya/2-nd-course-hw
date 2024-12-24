function gameMath2() {

   document.getElementById('mini-plays-2');

   do{
      let n1 = Math.floor(Math.random() * 10 + 1);
      let n2 = Math.floor(Math.random() * 10 + 1); 
    
         let result = n1 * n2; 
   
          let answer; 
    
         answer = prompt('Реши пример: '+ n1 + ' * '+ n2 + ' = ');
            if(answer == result) {
               alert("Молодец! Верный ответ!"); 
            } else {
            alert("Неверный ответ. Не огорчайся, продолжай заниматься!");
            } 
      }
      while(confirm("Продолжим тренировку на умножение?"));

while(confirm('Двигаемся дальше?')){
   do{
      let n1 = Math.floor(Math.random() * 100 + 1);
      let n2 = Math.floor(Math.random() * 100 + 1);     
      
         let result1 = n1 + n2;   
     
         let answer1;
          
         answer1 = prompt('Реши пример: '+ n1 + ' + '+ n2 + ' = ');
           if(answer1 == result1) {
         alert("Отлично!Так держать!"); 
         } else {
         alert("Неверный ответ. Не вешай нос, всё впереди!");
         } 
      }
      while(confirm("Продолжим тренировку на сложение?"));
   
  
   do{ 
         let n1 = Math.floor(Math.random() * 100 + 1);
         let n2 = Math.floor(Math.random() * 100 + 1); 
         let n4 = n1 + n2;
        
         let result2 = n4 - n2;  
        
            let answer2;
         
         answer2 = prompt('Реши пример: '+ n4 +' - '+ n2 + ' = ');
           if(answer2 == result2) {
            alert("Правильный ответ. Супер!"); 
           } else {
             alert("Мимо. Продолжай тренировку");
          } 
         }
      while(confirm("Продолжим вычитать?"));


          do{ 
            let n1 = Math.floor(Math.random() * 10 + 1);
            let n2 = Math.floor(Math.random() * 10 + 1); 
            let n3 = n1 * n2;
            
            let result3 = n3 / n1;  
           
               let answer3;
            
             answer3 = prompt('Реши пример: '+ n3 +' / '+ n1 + ' = ');
             if(answer3 == result3) {
              alert("С делением у тебя отлично! Молодец"); 
             } else {
               alert("Неверно. Ничего, на ошибках учатся");
            }
             }      
             while(confirm("Продолжим делить?"));
               
            }                  
         } 
   
    

            
            
      
        
    