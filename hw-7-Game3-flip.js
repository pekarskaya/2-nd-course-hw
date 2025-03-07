//Игра «Переверни текст»
//Требования:
//Сайт запрашивает у пользователя текст.
//Сайт переворачивает введенный текст.
//Сайт выводит перевернутый текст.

function flipStr3() {

  document.getElementById('mini-plays-3');
 
 let str = prompt('Введите свой текст, а мы поможем прочитать его задом наперёд. Вдруг получится он - палиндром?')
 let strReverse = str.toUpperCase().split('').reverse().join('');
 
 console.log(strReverse);
 console.log(str);

 let formattedStr = str.replace(/[^A-Za-zА-Яа-я]/g, '');
 let formattedStrReverse = strReverse.replace(/[^A-Za-zА-Яа-я]/g, '');

  if(formattedStrReverse.toLowerCase() === formattedStr.toLowerCase()){
    alert('Поздравляем! У вас получилась волшебная фраза-палиндром: ' + str); 
      } else {
        alert('Нет, это не волшебная фраза: ' + strReverse) 
      }  
  

flipStr3()
}

