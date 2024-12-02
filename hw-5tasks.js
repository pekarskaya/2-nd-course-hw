     let a = 8;
     let b = 4;     
     function min(a, b) {
        if(a < b) {
            return a;
    } else {
        return b;
        }
    }   
    console.log(min); 

    //Task2
    let с = number(prompt("Пожалуйста, введите любое число"));{ 
    function isEven(c) {
        return с % 2 === 0;
      }
      console.log("Число чётное");
      
      if(с % 2 > 0);{
        console.log('Число нечётное');
      }
    }
    
     //Task3
     function func(num = 9) {
        console.log(num ** 2);
      }
      function func(num) {
        return(num ** 2);
      }

      //Task4
      function age(){
        let age = number(prompt ('Сколько тебе лет?'));
        if(number < 0) {
            alert('Вы ввели неправильное значение');
        } else if(number = 0 && number <= 12) {
            alert('Привет, друг!')
        } else {
            alert('Добро пожаловать!')
        }
      }