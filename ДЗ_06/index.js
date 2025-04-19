// 1. Используя метод map() напишите код, который получает из
// массива строк новый массив, содержащий их длины.
let arr = ["apple", "orange", "kivi"];
console.log(arr.map((e) => e.length));

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17,
// 19]. Использую метод reduce() напишите функцию
// currentSums(numbers), которая возвращает новый массив из
// такого же числа элементов, в котором на каждой позиции
// будет находиться сумма элементов массива numbers до этой
// позиции включительно.
function currentSums(numbers) {
  let sum = 0;
  return numbers.reduce((acc, num) => {
    sum += num;
    acc.push(sum);
    return acc;
  }, []);
}

const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(currentSums(numbers));
// 3. Напишите код, который получает из массива чисел новый
// массив, содержащий пары чисел, которые в сумме должны
// быть равны семи: (0:7), (1:6) и т.д.

{
  let arr2 = [0, 1, 2, 3, 4, 5, 6, 7];
  let arr2New = [];
  for (let i = 0; i < arr2.length; i++) {
    let curenttNumber = arr2[i];
    let neededNumber = 7 - curenttNumber;
    if (arr2.includes(neededNumber) && curenttNumber <= neededNumber) {
      arr2New.push([curenttNumber, neededNumber]);
    }
  }
  console.log(arr2New);
}
// 4. Напишите код, создающий массив, который будет состоять из
// первых букв слов строки str.
{
  let s = "Напишите код, создающий массив, который будет состоять из";
  let arrStr = s.split(" ");
  let arrStrNew = arrStr.map((world) => world[0]);
  console.log(arrStrNew);
}
// 5. Напишите код, создающий массив, который будет состоять из
// строк, состоящих из предыдущего, текущего и следующего
// символа строки str.
{
  let s = "hello";
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      arr.push(s[i] + s[i + 1]);
    } else if (i === s.length - 1) {
      arr.push(s[i - 1] + s[i]);
    } else arr.push(s[i - 1] + s[i] + s[i + 1]);
  }
  console.log(arr);
}

// 6. Напишите код, преобразующий массив цифр, которые
// располагаются неупорядоченно, в массив цифр
// расположенных по убыванию их значений.
{
  let arr = [9, 2, 4, 8, 1, 0, 3, 7, 5, 6];
  console.log(arr.sort());
}

// 7. Напишите код, объединяющий три массива цифр, и
// располагающий цифры, в полученном массиве, в порядке
// убывания их значений через пробел.
{
  let a = [9, 2, 4];
  let b = [8, 1, 0];
  let c = [3, 7, 5, 6];
  let newArr = a.concat(b, c).sort((a, b) => b - a);
  let s = newArr.join(" ");
  console.log(s);
}
// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5],
// [6]]. Найдите сумму элементов этого массива. Массив, конечно
// же, может быть произвольным.
{
  let arr = [[1, 2, 3], [4, 5], [6]];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  console.log(sum);
}
// 9. Дан массив с числами. Не используя метода reverse
// переверните его элементы в обратном порядке.
{
  let arr = [9, 2, 4, 8, 1, 0, 3, 7, 5, 6];
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
}
// 10. Дан массив с числами. Узнайте сколько элементов с начала
// массива надо сложить, чтобы в сумме получилось больше
// 10-ти.
{
  let arr = [1, 2, 3, 1, 2, 1, 3, 4, 5];
  count = 0;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum > 10) {
      break;
    }
    count += 1;
    sum += arr[i];
  }
  console.log(count);
}
// 11. Напишите функцию arrayFill, которая будет заполнять
// массив заданными значениями. Первым параметром функция
// принимает значение, которым заполнять массив, а вторым -
// сколько элементов должно быть в массиве. Пример:
// arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
function arrayFill(a, b) {
  let arr = [];
  for (let i = 0; i < b; i++) arr.push(a);
  return arr;
}
console.log(arrayFill("a", 7));
