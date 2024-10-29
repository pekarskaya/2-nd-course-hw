let password = prompt ("Введите пароль");
if (password === "parol"){
    alert("Пароль введён верно");
}else{
    alert("Пароль введён неправильно")
}

let c = 5;
if(c > 0 && c < 10){
    console.log("Верно");
} else {
    console.log("Не верно");
}

let d = 7;
let e = 107;
if(d>100||e>100){
    console.log('Верно');
}else{
    console.log('Не верно');
}

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(+a + +b);

let monthNumber = Number (prompt('Введите номер месяца'))
switch (monthNumber) {
    case 1:
       console.log('Зима');
       break;
    case 2:
       console.log('Зима');
       break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;    
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;    
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;    
    default:
        if(monthNumber > 12){
       console.log('Некорректное значение');
     }
 }

//Дополнительные задания

let checkNumber = Number(prompt("Пожалуйста, введите любое число"));
if(isNaN(checkNumber)){
    console.log(NaN);
}else{
    console.log(checkNumber);
}
if (checkNumber % 2 == 0) {
    alert("Число чётное");
  } else {
    alert("Число нечётное");
  }

  let clientOS = 0;
    if (clientOS == 0) {
        alert ("Установите версию приложения для iOS по ссылке");
    }else if (clientOS == 0 && clientDeviceYear < 2015){
        alert ("Установите облегченную версию приложения для iOS по ссылке")
    }
    else if (clientOS == 1){
        alert ("Установите версию приложения для Android по ссылке");
    }
    else if (clientOS == 1 && clientDeviceYear < 2015){
    alert ("Установите облегченную версию приложения для Android по ссылке");
    }



  
   

