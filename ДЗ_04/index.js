// 1. Сделайте функцию, которая возвращает квадрат числа. Число
// передается параметром.
const squareNumber = (n) => n * n;

// 2. Сделайте функцию, которая возвращает сумму двух чисел.
const sum = (a, b) => a + b;

// 3. Сделайте функцию, которая отнимает от первого числа второе
// и делит на третье.
const getResult = (a, b, c) => (a - b) / c;

// 4. Сделайте функцию, которая принимает параметром число от 1
// до 7, а возвращает день недели на русском языке.
const getDayOfWeek = (dayNumber) => {
  const days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  return days[dayNumber - 1] || "Неверный номер дня";
};

// 5. Сделайте функцию, которая параметрами принимает 2 числа.
// Если эти числа равны - пусть функция вернет true, а если не
// равны - false.
// let isEqual = (a, b) => {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// };
const isEqual = (a, b) => a === b;

// 6. Сделайте функцию, которая параметрами принимает 2 числа.
// Если их сумма больше 10 - пусть вернет true, а если нет то -
// false.
// let isSumMoThanTeen = (a, b) => {
//   if (a + b > 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
const isSumMoThanTeen = (a, b) => a + b > 10;

// 7. Сделайте функцию, которая параметром принимает число и
// проверяет - отрицательное оно или нет. Если отрицательное -
// пусть функция вернет true, а если нет - false.
const isNegative = (a) => a < 0;
// 8. Сделайте функцию isNumberInRange, которая параметром
// принимает число и проверяет, что оно больше нуля и меньше
// 10. Если это так - пусть функция возвращает true, если не так -
// false.
const isNumberInRange = (n) => n > 0 && n < 10;

// 9. *Сделайте функцию getDigitsSum (digit - это цифра), которая
// параметром принимает целое число и возвращает сумму его
// цифр.
const getDigitsSum = (digit) => {
  let sum = 0;
  const numbers = Math.abs(digit).toString().split("");
  for (let num of numbers) {
    sum += parseInt(num, 10);
  }
  return sum;
};
// 10. *Найдите все года от 1 до 2020, сумма цифр которых равна
// 13. Для этого используйте вспомогательную функцию
// getDigitsSum из предыдущей задачи.
const findYearsWithDigitsSum13 = function (fn) {
  let result = [];
  for (let i = 1; i < 2021; i++) {
    if (fn(i) == 13) {
      result.push(i);
    }
  }
  console.log(result);
};

// 11. Сделайте функцию isEven() (even - это четный), которая
// параметром принимает целое число и проверяет: четное оно
// или нет. Если четное - пусть функция возвращает true, если
// нечетное - false.
const isEven = (n) => n % 2 === 0;
// 12. *Дано число. Сложите его цифры. Если сумма получилась
// более 9-ти, опять сложите его цифры. И так, пока сумма не
// станет однозначным числом (9 и менее). Можно использовать
// функцию getDigitsSum из 9 задачи
const getSingleDigitSum = (n) => {
  let sum = getDigitsSum(n);
  while (sum > 9) {
    sum = getDigitsSum(sum);
  }
  return sum;
};
// 13. * Напишите стрелочную функцию, которая будет
// возвращать true если строка является палиндромом и false в
// противном случае.
const isPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[^а-яa-z0-9]/g, "");
  return cleanedStr === cleanedStr.split("").reverse().join("");
};
console.log(squareNumber(5)); // 25
console.log(sum(3, 4)); // 7
console.log(getResult(10, 4, 2)); // 3
console.log(getDayOfWeek(3)); // Среда
console.log(isEqual(5, 5)); // true
console.log(isSumMoThanTeen(7, 4)); // true
console.log(isNegative(-3)); // true
console.log(isNumberInRange(5)); // true
console.log(getDigitsSum(123)); // 6
console.log(findYearsWithDigitsSum13(getDigitsSum)); // массив годов
console.log(isEven(4)); // true
console.log(getSingleDigitSum(999)); // 9
console.log(isPalindrome("А роза упала на лапу Азора")); // true
