//1. Написати функцію, яка приймає в якості аргумента висоту прямокутника і його ширину, повертає площу прямокутника.

    function areaOfRectangle(side, height) {
        return side*height/2;
    }
let a = areaOfRectangle(30, 20)
console.log(a);
    
//2.Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола (длина окружности по диаметру)
    
function circumference(diameter) {
        return diameter*3.14;
    }
let b = circumference(30, 20)
console.log(b);

//3. ~ висоту циліндра та діаметр основи і повертає об'єм циліндра.
// V(объем) = 3.14 * r^2 * h

function cylinderVolume(height, diameter) {
    return 3.14 * Math.pow(diameter/2, 2) * height;
}

let c = cylinderVolume(30, 20)
console.log(c);

//4. Написати функцію, яка приймає два числа (діапазон) і виводити на консоль всі числа з цього діапазону, які діляться на 5.
// диапазон - range
// если число между a и b делится на 5 и в резульате мы получаем 0 - то это число нужно вывести в результат

function rangeFive(first, last) {

    for(a = first; a <= last; a++) {
        if (a % 5 === 0) {
            console.log(a);
        }
    }
}
rangeFive(1, 15);

//6. Реалізовати гру FizzBuzz для 100 чисел.
// Начинающий произносит число «1», и каждый следующий игрок прибавляет к предыдущему значению единицу. 
//Когда число делится на три оно заменяется на fizz, 
//если число делится на пять, то произносится buzz. 
//Числа, делящиеся на три и пять одновременно заменяются на fizz buzz. Сделавший ошибку игрок исключается из игры.

function FizzBuzz(a, b) {
    for(r = a; r <= b; r++) {
        if (r % 3 === 0 && r % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (r % 3 === 0) {
            console.log('Fizz');
        }
        else if (r % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(r);
        } 
    }
}
FizzBuzz(1, 100);