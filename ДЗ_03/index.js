// Работа с if-else
// 1. Если переменная a равна нулю, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
let a = 1;
if (a === 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
a = 0;
if (a === 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
a = -3;
if (a === 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
console.log("");
// 2. Если переменная a больше нуля, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
let b = 1;
if (b > 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
b = 0;
if (b > 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
b = -3;
if (b > 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
console.log("");
// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
let c = 1;
if (c < 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
c = 0;
if (c < 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
c = -3;
if (c < 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
console.log("");
// 4. Если переменная a больше или равна нулю, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 1, 0, -3.
let d = 1;
if (d >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
d = 0;
if (d >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
d = -3;
if (d >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
console.log("");
// 5. Если переменная a меньше или равна нулю, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 1, 0, -3.
let f = 1;
if (f <= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
f = 0;
if (f <= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
f = -3;
if (f <= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
console.log("");
// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
let e = 1;
if (e != 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
e = 0;
if (e != 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
e = -3;
if (e != 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
console.log("");

// 7. Если переменная a равна 'test', то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 'test', 'тест', 3.
let g = "test";
if (g === "test") {
  console.log("Верно");
} else {
  console.log("Неверно");
}
g = "тест";
if (g === "test") {
  console.log("Верно");
} else {
  console.log("Неверно");
}
g = 3;
if (g === "test") {
  console.log("Верно");
} else {
  console.log("Неверно");
}
console.log("");
// 8. Если переменная a равна '1' и по значению и по типу, то
// выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу
// скрипта при a, равном '1', 1, 3.
let h = "1";
if (h == "1" && typeof h == "string") {
  console.log("Верно");
} else {
  console.log("Неверно");
}
h = 1;
if (h === "1") {
  console.log("Верно");
} else {
  console.log("Неверно");
}
h = 3;
if (h == "1" && typeof h === "string") {
  console.log("Верно");
} else {
  console.log("Неверно");
}
console.log("");
// Работа с логическими переменными
// 1. Если переменная test равна true, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при test,
// равном true, false. Напишите два варианта скрипта - с короткой
// записью и с длинной.
let test = true;
test === true ? console.log("Верно") : console.log("Неверно");

if (test === true) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

test = false;
test === true ? console.log("Верно") : console.log("Неверно");

if (test === true) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
console.log("");
// 2. Если переменная test не равна true, то выведите 'Верно',
// иначе выведите 'Неверно'. Проверьте работу скрипта при test,
// равном true, false. Напишите два варианта скрипта - с короткой
// записью и с длинной.
let test2 = true;
test2 != true ? console.log("Верно") : console.log("Неверно");

if (test2 != true) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

test2 = false;
test2 != true ? console.log("Верно") : console.log("Неверно");

if (test2 != true) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
console.log("");
// Работа с && (и) и || (или)
// 1. Если переменная a больше нуля и меньше 5-ти, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 5, 0, -3, 2.
let a1 = 5;
a1 > 0 && a1 < 5 ? console.log("Верно") : console.log("Неверно");
a1 = 0;
a1 > 0 && a1 < 5 ? console.log("Верно") : console.log("Неверно");
a1 = -3;
a1 > 0 && a1 < 5 ? console.log("Верно") : console.log("Неверно");
a1 = 2;
a1 > 0 && a1 < 5 ? console.log("Верно") : console.log("Неверно");
console.log("");
// 2. Если переменная a равна нулю или равна двум, то прибавьте
// к ней 7, иначе поделите ее на 10. Выведите новое значение
// переменной на экран. Проверьте работу скрипта при a, равном
// 5, 0, -3, 2.
let a2 = 5;
a2 === 0 || a2 === 2 ? console.log(a2 + 7) : console.log(a2 / 10);
a2 = 0;
a2 === 0 || a2 === 2 ? console.log(a2 + 7) : console.log(a2 / 10);
a2 = -3;
a2 === 0 || a2 === 2 ? console.log(a2 + 7) : console.log(a2 / 10);
a2 = 2;
a2 === 0 || a2 === 2 ? console.log(a2 + 7) : console.log(a2 / 10);
console.log("");
// 3. Если переменная a равна или меньше 1, а переменная b
// больше или равна 3, то выведите сумму этих переменных,
// иначе выведите их разность (результат вычитания). Проверьте
// работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
let a3 = 1;
let b3 = 3;
a3 <= 1 && b3 >= 3 ? console.log(a3 + 7) : console.log(a3 / 10);
a3 = 0;
b3;
a3 <= 1 && b3 >= 3 ? console.log(a3 + 7) : console.log(a3 / 10);
a3 = -3;
a3 <= 1 && b3 >= 3 ? console.log(a3 + 7) : console.log(a3 / 10);
a3 = 2;
a3 <= 1 && b3 >= 3 ? console.log(a3 + 7) : console.log(a3 / 10);
console.log("");
// 4. Если переменная a больше 2-х и меньше 11-ти, или
// переменная b больше или равна 6-ти и меньше 14-ти, то
// выведите 'Верно', в противном случае выведите 'Неверно'.
let a4 = 0;
let b4 = 0;
(a4 > 2 && a4 < 11) || (b4 >= 6 && b4 < 14)
  ? console.log("Верно")
  : console.log("Неверно");
console.log("");
// На switch-case
// 1. Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем
// 'зима', если имеет значение '2' – 'весна' и так далее. Решите
// задачу через switch-case.

for (let num = 1; num <= 5; num++) {
  let result;
  switch (num) {
    case 1:
      result = "зима";
      break;
    case 2:
      result = "весна";
      break;
    case 3:
      result = "лето";
      break;
    case 4:
      result = "осень";
      break;
    default:
      result = "неизвестно";
  }
  console.log(result);
}
console.log("");
// Общие задачи
// 1. В переменной day лежит какое-то число из интервала от 1 до
// 31. Определите в какую декаду месяца попадает это число (в
// первую, вторую или третью).
let day = 10;
if (day >= 1 && day <= 10) {
  console.log(`День ${day}: первая`);
} else if (day > 10 && day <= 20) {
  console.log(`День ${day}: вторая`);
} else if (day > 20 && day <= 31) {
  console.log(`День ${day}: третья`);
} else {
  console.log("некорректная дата");
}
console.log("");
// 2. В переменной month лежит какое-то число из интервала от 1
// до 12. Определите в какую пору года попадает этот месяц
// (зима, лето, весна, осень).
let month = 12;
let season;
if (month === 12 || month === 1 || month === 2) season = "зима";
else if (month >= 3 && month <= 5) season = "весна";
else if (month >= 6 && month <= 8) season = "лето";
else if (month >= 9 && month <= 11) season = "осень";
else season = "некорректный месяц";
console.log(`Месяц ${month} - ${season}`);
console.log("");
// 3. Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква
// 'a'. Если это так - выведите 'да', в противном случае выведите
// 'нет'.
let s = "abcde";
if (s[0] === "a") {
  console.log("да");
} else {
  console.log("нет");
}

console.log("");
// Циклы while и for
// Решите эти задачи сначала через цикл while, а затем через цикл
// for.
// 1. Выведите столбец чисел от 1 до 100.
let i = 1;
while (i === 100) {
  console.log(i);
  i++;
}
console.log("");
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
console.log("");
// 2. Выведите столбец чисел от 11 до 33.
let i1 = 11;
while (true) {
  console.log(i1);
  if (i1 === 33) {
    break;
  }
  i1++;
}
console.log("");
for (let i1 = 11; i1 <= 33; i1++) {
  console.log(i1);
}
console.log("");
// 3. Выведите столбец четных чисел в промежутке от 0 до 100.
let i2 = 0;
while (i2 === 100) {
  if (i2 % 2 === 0) {
    console.log(i2);
  }
  if (i2 === 100) {
    break;
  }
  i2++;
}
console.log("");
for (let i2 = 0; i2 <= 100; i2++) {
  if (i2 % 2 === 0) {
    console.log(i2);
  }
}
console.log("");
// 4. С помощью цикла найдите сумму чисел от 1 до 100.
let i3 = 1;
let sum = 0;
while (i3 <= 100) {
  sum += i3;
  i3++;
}
console.log(sum);
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
  sum2 += i;
}
console.log(sum2);
console.log("");
// Задачи общие.
// Дано число n=1000. Делите его на 2 столько раз, пока результат
// деления не станет меньше 50. Какое число получится? Посчитайте
// количество итераций, необходимых для этого (итерация - это
// проход цикла), и запишите его в переменную num.
let n = 1000;
let count = 0;
while (n > 50) {
  n /= 2;
  count += 1;
}
console.log(count);
