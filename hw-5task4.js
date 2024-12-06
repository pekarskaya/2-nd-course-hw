 
      //Task4
      function age(){
        let age = Number(prompt ('Сколько тебе лет?'));
        if(age < 0) {
            alert('Вы ввели неправильное значение');
            return
        } if(age <= 12) {
            alert('Привет, друг!');
            return
        }
            alert('Добро пожаловать!');
        }
       age();