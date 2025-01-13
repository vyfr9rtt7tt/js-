// Запрашиваем имя и возраст пользователя
let userName = prompt(" Бехруз:");
let userAge = prompt("14 л:");

// Функция для генерации случайного числа в диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерируем примеры для пользователя
let num1 = getRandomInt(1, 10);
let num2 = getRandomInt(1, 10);

let addition = prompt(`Сколько будет ${num1} + ${num2}?`);
let subtraction = prompt(`Сколько будет ${num1} - ${num2}?`);
let multiplication = prompt(`Сколько будет ${num1} * ${num2}?`);
let division = prompt(`Сколько будет ${num1} / ${num2}?`);
let modulus = prompt(`Сколько будет ${num1} % ${num2}?`);

// Записываем примеры и ответы в консоль
console.log(`${num1} + ${num2} = ${num1 + num2} (Ваш ответ ${addition})`);
console.log(`${num1} - ${num2} = ${num1 - num2} (Ваш ответ ${subtraction})`);
console.log(`${num1} * ${num2} = ${num1 * num2} (Ваш ответ ${multiplication})`);
console.log(`${num1} / ${num2} = ${num1 / num2} (Ваш ответ ${division})`);
console.log(`${num1} % ${num2} = ${num1 % num2} (Ваш ответ ${modulus})`);

// Сообщаем пользователю, чтобы он проверил консоль
alert("Пожалуйста, проверьте консоль для проверки ваших ответов.");

// Запрашиваем значения для переменных X, Y, Z
let X = parseFloat(prompt("6 X:"));
let Y = parseFloat(prompt("5 Y:"));
let Z = parseFloat(prompt("4Z:"));

// Вычисляем среднее арифметическое

let res = (X + Y + Z) / 3;

// Выводим результат на экран
alert(`Среднее арифметическое чисел X, Y, Z: ${res}`);