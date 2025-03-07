let i = 0;
while (i < 2) {
    i++;
    console.log(i + "Привет");
}


let r = 1;
while (r <= 5) {
    console.log(r);
    r++;
}
//Task#3
let h = 7;
while (h <= 22) {
    console.log(h);
    h++;
}
//Task#4
const obj = { Коля: "200$", Вася: "300$", Петя: "400$" };
for (let key in obj) {
    console.log(key, obj[key]);
}

//Task#5
for (let n = 1000; n > 50; n++) {
    n /= 2;
    console.log(n);
}

//Task#6
for (let fr = 3; fr < 31; fr = fr + 7) {
    alert("Сегодня пятница, " + (fr) + "-е число. Необходимо подготовить отчет.");
    console.log(fr);
}

//Additional tasks #1
for (let k = 100; k > 0; k++) {
    k -= 7;
    console.log(k);
}

//add.task#2
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
console.log(months);
console.log(months.length);

//add.task#3
const book = {
    Author: 'Марсель Пруст',
    Title: '"В поисках утраченного времени"',
    Genre: 'Роман',
    YearPublication: '1913-1927'
}
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}
//add.task#4
let num = [36, 18, 11, 98, 12, 42];
let min = Math.min(...num);
console.log(min);

