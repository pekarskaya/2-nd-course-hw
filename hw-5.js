//Task1 Напишите функцию, которая возвращает меньшее из двух чисел. Например, из двух чисел — 8  и 4  — функция должна вернуть значение 4 . Если мы передаем два одинаковых значения, например 6  и 6 , то функция должна вернуть это значение (в данном случае — 6).
  
    let num3 = 8;
    let num4 = 4;  

    function min1(num3, num4) {       
        if(num3 <= num4) {
            return num3;
        } else {
            return num4;
        }
    }
    console.log(min1(num3, num4));

        //Task2 Напишите функцию, которая принимает число и возвращает:
//строку 'Число четное' , если число четное;
//строку 'Число нечетное' , если число нечетное.
//Подсказка: четность проверяется с помощью условия n % 2 == 0

function isEven(value) {
    return value % 2 === 0;
    }
    let value = Number(prompt("Пожалуйста, введите любое число"));
    if(isEven(value)) {
      console.log("Число чётное");
    } else {
      console.log('Число нечётное');
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

       //Task5. Напишите функцию, которая принимает на вход два числа, а далее следует алгоритму: Проверяет, являются ли переданные параметры корректными числами. Подсказка: используйте преобразование типов и isNaN(). Если нет — возвращает строку 'Одно или оба значения не являются числом'. Если оба параметра — числа, то возвращает произведение данных чисел.

function multiply(num1, num2) {
    n1 = Number(num1);
    n2 = Number(num2);
    if(Number.isNaN(n1) || Number.isNaN(n2)) {
    alert('Одно или оба значения не являются числом');
    return;
} 
multiply = n1 * n2; 
    alert(multiply);
}     
let n1 = 5;
let n2 = 5;
  
multiply(n1, n2);

//Задание 6. Напишите функцию, которая выполняет следующий алгоритм: Запрашивает у пользователя число.Проверяет, является ли введенное значение числом.Если значение не является числом, возвращает строку 'Переданный параметр не является числом'.Если значение является числом, возвращает строку 'n в кубе равняется <получившееся значение>', где n  — введенное число, а <получившееся значение>  — число, возведенное в куб.Проверьте работу функции с числами от  0  до 10.

function enterNum() { 
n = Number(prompt("Пожалуйста, введите ещё одно число"));
enterNum = n * n * n; 
 
    if(Number.isNaN(n)) {
       alert('Переданный параметр не является числом');
       return;
    }
       alert(n +" в кубе равняется " + enterNum);
    } 

enterNum()

//Задание 7. Создайте два объекта, circle1  и circle2 , каждый из которых имеет свойство radius.Оба объекта должны иметь:Метод getArea , который возвращает площадь круга, вычисляемую через радиус.Метод getPerimeter, который возвращает периметр окружности.

alert("Новости о площади и периметре плоских объектов без углов смотрите в консоли");

function Circle(radius) {
this.radius = radius;
this.pi = Math.PI;
this.getArea = function() {
    return (this.pi * Math.pow(radius, 2)).toFixed(2);
};
this.getPerimeter = function() {
    return (2 * this.pi * radius).toFixed(2);
}
}

let circle1 = new Circle(5);

let circle2 = {
radius : 8,
pi : Math.PI
};

Object.prototype.getArea = function() {
return (this.pi * Math.pow(this.radius, 2)).toFixed(2);
};

Object.prototype.getPerimeter = function() {
return (2 * this.pi * this.radius).toFixed(2);
};

console.log('Площадь первого круга ' + (circle1.getArea()));
console.log('Периметр первого круга ' + (circle1.getPerimeter()));

console.log('Площадь второго круга ' + (circle2.getArea()));
console.log('Периметр второго круга ' + (circle2.getPerimeter()));



 
