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
if(d||e>100){
    console.log('Верно');
}else{
    console.log('Не верно');
}

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
let  = Number("23");
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
        if(monthNumber > 12)
       console.log('Некорректное значение');
 }

