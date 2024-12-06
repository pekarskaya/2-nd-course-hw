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

