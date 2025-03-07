// Задание 1
let str = 'Преобразовать строку "js" в верхний регистр.'; 
let upperCaseStr= str. toUpperCase (); 
console. log (upperCaseStr);

//Задание 2. Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат. 

const sity = ['Волгоград', "Москва", "вОлгодонск", "Тверь", "КОстрома", "волгореченск", "Вологда", "Заволжск"];
volg = 'Волг'
const sityFilter = sity.filter(sity => sity.toLowerCase().includes(volg.toLowerCase())) 

    console.log(sityFilter);


//Задание 3. Округлить число 32.58884:
//До меньшего целого.
console.log("Округление до меньшего целого: " + Math.floor(32.58884));
//До большего целого.
console.log("До бОльшего целого: " + Math.ceil(32.58884));
//До ближайшего целого.
console.log("До ближайшего целого: " + Math.round(32.58884));

//Задание 4. Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

console.log("Максимальное значение в массиве чисел: " + Math.max(52, 53, 49, 77, 21, 32));
//Возвращает наибольшее число из своих аргументов.

console.log('Минимальное значение: ' + Math.min(52, 53, 49, 77, 21, 32)); 
//Возвращает наименьшее число из своих аргументов.

//Задание 5. Создать функцию, которая выводит в консоль случайное число от 1 до 10.
function getRandomInt1() {
    return Math.floor(Math.random() * 10 + 1);
  }
  console.log('Случайное число: ' + (getRandomInt1()));

 // Задание 6. Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа. 

 const getRandomArr = function(i) {
  let randomArr = []; 
  for (n = i/2; n < i; n++){
    randomArr.push(Math.floor(Math.random() * i) + 1);
  } 
  return randomArr;
}
console.log(getRandomArr(8));
 
  // Задание 7. Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

  function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomInt = randomIntFromInterval(1, 10);
  console.log(randomInt);

// Задание 8. Вывести в консоль текущую дату.
let currentDate = new Date();
console.log('Сегодня: ' + currentDate);

//Задание 9. Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

currentDate.setDate(currentDate.getDate() + 73);
console.log('Через 73 дня будет ' + currentDate);

//Задание 10. Написать функцию, которая принимает дату и возвращает ее в формате: 
//Дата: [число] [месяц на русском] [год] — это [день недели на русском].
//Время: [часы]:[минуты]:[секунды]

let currentDate1 = new Date();
const options = {day: 'numeric', month: 'long', year: 'numeric'}
const options2 = {weekday: 'long'}

const formattedDate = currentDate1.toLocaleString('ru-RU', options);
const formattedDate2 = currentDate1.toLocaleString('ru-RU', options2);

console.log("Дата: " + formattedDate + ' - это ' + formattedDate2 + '. Время: ' + currentDate1.toLocaleTimeString("ru-RU"));