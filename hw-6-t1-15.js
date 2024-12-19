//Задание 1. Дан массив: [1, 5, 4, 10, 0, 3].Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.После вывода значения 10 в консоль цикл должен прекратить свою работу.

const array = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array.length; i++) {
    if(array[i] === 0) 
        break;
    
    console.log(array[i]); 
}  

//Задание 2

const arrFoundIndex1 = [1, 5, 4, 10, 0, 3];
    console.log(arrFoundIndex1.indexOf(4));

//Задание 3.Дан массив чисел: [1, 3, 5, 10, 20].С помощью метода join выведите элементы массива через пробел (пустую строку ' ').
const arr = [1, 3, 5, 10, 20];
let joinedArr = arr.join('  ');
console.log(joinedArr)

//Задание 4/ С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

for (let row = 0; row < 3; row++) {
	arr[row] = [1, 1, 1]; 
	
	for (let book = 0; book == 3; book++) {
		arr[row].push(book); 
	}
}

console.log(arr);

for (let book of arr) {
    for (let i = 0; i < book.length; i++) {
       if (i === 1) {
          console.log(`Книга ${book[i]}`);
       } else {
          console.log(`\t ${book[i]}`);
       }
    }
 }

 //Задание 5/ Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

 const arr111222 = [1, 1, 1];
 arr111222.push(2, 2, 2);
 console.log(arr111222);

 //Задание 6. Дан массив: [9, 8, 7, 'a', 6, 5].С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.

 const allElements = [9, 8, 7, 'a', 6, 5];
 allElements.sort();
 console.log(allElements);

 let onlyNumbers = allElements.filter(allElement => allElement !=='a');
 console.log(onlyNumbers)


 //Задание 7.Дан массив: [9, 8, 7, 6, 5].Попросите пользователя угадать число с помощью метода prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».
do{
    const guessNumber = [9, 8, 7, 6, 5];
    
    let guessNumber2 = prompt('Угадай число от 1 до 10');
         if(guessNumber.includes(Number(guessNumber2))) {
           alert("Угадал");
         } 
         else {
            alert("Не угадал")
         } 
   } while(confirm("Продолжим?"));

   //Задание 8.Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.

   const mirrow = ['a', 'b', 'c', 'd', 'e', 'f'];
   console.log(mirrow.reverse()); 

   //Задание 9.Дан массив: [[1, 2, 3],[4, 5, 6]]. Выведите в консоль  массив вида: [1, 2, 3, 4, 5, 6]

const arrSpread = [
   arrSpread1 = [1, 2, 3], 
   arrSpread2 = [4, 5, 6]
];
const all = [...arrSpread1, ...arrSpread2];
console.log("Объединённый массив: ", all);

//Задание 10. Создайте массив с произвольными числами (диапазон от 1 до 10).Переберите его с помощью цикла for. В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.

let arr134 = [1, 3, 4, 10, 9, 5, 6, 7, 8, 2];
for (let i = 1; i < arr134.length; i++) {
  console.log(arr134[i - 1] + arr134[i]);
}

//Задание 11. Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

const squaresArr134 = arr134.map(function(arr13410) {
return arr13410 * arr13410
})
console.log(squaresArr134);

//Задание 12. Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.
const arrText = ['Accepts', 'an', 'array', 'of', 'srings'];
console.log('Длина массива: ', arrText.length);
const arrWord = arrText.map(function(arrText2){
   return arrText2.length
})
console.log('Длина слов в массиве: ', arrWord);

//Задание 13. Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.

const allNums = [9, -8, 7, -3, 6, 5];

 let onlyMinNums = allNums.filter(allNum => allNum < 0);
 console.log(onlyMinNums)

 //Задание 14. Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random()в диапазоне от 0 до 10.В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.
 
 const arrRandom = [];

 for (let i = 0; i < 10; i++) {
   arrRandom.push(Math.floor(Math.random() * 10) + 1);
  }
  console.log('Оригинальный массив чисел в диапазоне от 1 до 10: ', arrRandom);
  
  const arrRandomEven = arrRandom.filter(arrRandom1 => arrRandom1 % 2 == 0);
  console.log('Производный массив чётных чисел:', arrRandomEven);

  //Задание 15. Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10. Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

  const arrRandom2 = [];

  for (let i = 0; i < 6; i++) {
   arrRandom2.push(Math.floor(Math.random() * 10) + 1);
  }
 
  const sum = arrRandom2.reduce((total, arrRandom3) => total + arrRandom3, 0);
  console.log("Среднее арифметическое шести чисел в диапазоне от 1 до 10:", sum / 6);