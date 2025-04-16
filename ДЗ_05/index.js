// 1. Преобразовать строку в массив слов. Напишите функцию
// stringToarray(str), которая преобразует строку в массив слов.
function stringToarray(str) {
  let arr = str.split(" ");
  return arr;
}
console.log(
  stringToarray("Напишите функцию insertDash(str), которая принимает строку")
);

// 2. Напишите функцию deleteСharacters(str, length), которая
// возвращает подстроку, состоящую из указанного количества
// символов.
function deleteСharacters(str, length) {
  return str.slice(0, length);
}

let strResult = deleteСharacters(
  "возвращает подстроку, состоящую из указанного количества",
  10
);
console.log(strResult);

// 3. Напишите функцию insertDash(str), которая принимает строку
// str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в
// верхний регистр.
function insertDash(str) {
  return str.split(" ").join("-").toUpperCase();
}
console.log(insertDash("которая принимает строку"));
// 4. Напишите функцию, которая принимает строку в качестве
// аргумента и преобразует регистр первого символа строки из
// нижнего регистра в верхний.
function changeFirst(str) {
  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}
console.log(changeFirst("функцию, которая принимает строку в качестве"));

// 5. Напишите функцию capitalize(str), которая возвращает строку,
// в которой каждое слово начинается с заглавной буквы.
function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalize("в которой каждое слово начинается с заглавной буквы"));

// 6. Напишите функцию changeRegister(str), которая принимает в
// качестве аргумента строку и и заменяет регистр каждого
// символа на противоположный. Например, если вводится
// «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ
// оХоТнИк».
function changeRegister(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}
console.log(changeRegister("КаЖдЫй ОхОтНиК, то на выходе должно быть кАжДыЙ"));
// 7. Напишите функцию removeChar(str), которая возвращает
// строку, очищенную от всех не буквенно-цифровых символов.
function removeChar(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}
console.log(removeChar("^&**&*()fdghj45678@#$FGHJKJ++_     ++W)"));
// 8. Напишите функцию zeros(num, len), которая дополняет нулями
// до указанной длины числовое значение с дополнительным
// знаком «+» или «-» в зависимости от передаваемого
// аргумента.
// @param {number} num
// @param {number} len
// @returns {string}
function zeros(num, len) {
  let absNum = Math.abs(num).toString();
  let sign = num > 0 ? "+" : "-";
  let paddenNum = absNum.padStart(len - 1, "0");
  return sign + paddenNum;
}
console.log(zeros(42, 10));
// 9. Напишите функцию comparison(str1, str2), которая сравнивает
// строки без учёта регистра символов.
function comparison(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(comparison("учёта регистра символо", "учёта регистра символо"));
// 10. Напишите функцию insensitiveSearch(str1, str2), которая
// осуществляет поиск подстроки str2 в строке str1 без учёта
// регистра символов.
function insensitiveSearch(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}
console.log(
  insensitiveSearch(
    "осуществляет поиск подстроки str2 в строке str1 без учёта",
    "str1"
  )
);
// 11. Напишите функцию initCap(str), которая преобразует стиль
// написания составных слов строки в CamelCase, при котором
// несколько слов пишутся слитно без пробелов, при этом каждое
// слово внутри строки пишется с заглавной буквы.
function initCap(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
console.log(initCap("несколько слов пишутся слитно без пробелов"));

// 12. Напишите функцию initSnake(str), которая преобразует
// стиль написания составных слов строки из CamelCase в
// snake_case, при котором несколько слов разделяются
// символом подчеркивания (_), причём каждое слово пишется с
// маленькой буквы.
function initSnake(str) {
  let s = str.split("");
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      s.splice(i, 0, "_");
      i++;
    }
  }
  return s.join("").toLowerCase();
}
console.log(initSnake("НесколькоСловПишутсяСлитноБезПробелов"));
// 13. Напишите функцию repeatStr(str, n), которая возвращает
// строку повторяемую определённое количество раз.
function repeatStr(str, n) {
  return str.repeat(n);
}
console.log(repeatStr("Hi!", 3));
// 14. Напишите функцию path(pathname), которая возвращает
// имя файла (подстрока после последнего символа "\" ) из
// полного пути к файлу.
function path(pathname) {
  return pathname.split("\\").pop();
}
console.log(
  path(
    "D:\\Movavi Video Editor \\Movavi Video Editor\\Videos\\Movavi Video Editor\\Projects"
  )
);

// 15. Создайте функцию endsWith(), который сравнивает
// подстроку str1 с окончанием исходной строки str и определяет
// заканчивается ли строка символами подстроки.
function endsWith(str1, str2) {
  return str1.endsWith(str2);
}
console.log(endsWith("возвращает часть строки", "строки"));

// 16. Напишите функцию getSubstr(str, char, pos), которая
// возвращает часть строки, расположенную после или до
// указанного символа char в зависимости от параметра pos.
function getSubstr(str, char, pos) {
  const index = str.indexOf(char);
  if (index === -1) return "";
  return pos === "before" ? str.slice(0, index) : str.slice(index + 1);
}
console.log(getSubstr("Hello world", " ", "after"));
// 17. Напишите функцию insert(str, substr, pos), которая вставляет
// подстроку substr в указанную позицию pos строки str. По
// умолчанию подстрока вставляется в начало строки.
function insert(str, substr, pos = 0) {
  pos = Math.max(0, pos);
  if (pos >= str.length) return str + substr;
  return str.slice(0, pos) + substr + str.slice(pos);
}
console.log(insert("Hello", "World", 3));

// 18. Напишите функцию limitStr(str, n, symb), которая обрезает
// строку, если она длиннее указанного количества символов n.
// Усеченная строка должна заканчиваться троеточием «...»
// (если не задан параметр symb) или заданным символом symb.
function limitStr(str, n, symb = "...") {
  const strLength = str.length;
  if (strLength <= n) return str;

  const symbLength = symb.length;
  const available = n - symbLength;

  if (available <= 0) {
    return symb.slice(0, n);
  }

  return str.slice(0, available) + symb;
}
console.log(limitStr("Усеченная строка должна заканчиваться", 10));
console.log(limitStr("Test", 3, "12345"));
// 19. Напишите функцию count(str, stringsearch), которая
// возвращает количество символов stringsearch в строке str.
function count(str, stringsearch) {
  let count = 0;
  let pos = 0;
  const len = stringsearch.length;
  if (len === 0) return 0;
  while ((pos = str.indexOf(stringsearch, pos)) !== -1) {
    count++;
    pos += len;
  }
  return count;
}
console.log(count("ddddddd", "d"));
// 20. Напишите функцию strip(str), которая удаляет все лишние
// пробелы из строки str.
function strip(str) {
  return str.replace(/\s+/g, "");
}
console.log(strip("Напишите функцию strip(str), которая удаляет все лишние"));
// 21. Напишите функцию cutString(str, n), которая удаляет лишние
// слова из строки str, оставив в ней n слов.
function cutString(str, n) {
  let arr = str.split(" ");
  if (arr.length > n) {
    return arr.slice(0, n).join(" ");
  }
}
console.log(cutString("слова из строки str, оставив в ней n слов", 3));

// 22. Напишите функцию findWord(word, str), которая проверяет,
// существует ли в строке str слова word.
function findWord(word, str) {
  return str.split(" ").includes(word);
}
console.log(findWord("str", "существует ли в строке str слова word"));
