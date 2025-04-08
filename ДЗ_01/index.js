// 1. Вывести в терминал строку “Hello World!”
console.log("Hello world!");
// 2. Создать переменную для каждого типа данных
const num = 1;
const password = "123alex123";
const isOpen = true;
const valueNull = null;
const valueUndefined = undefined;
const card = {
  firstName: "Bob",
  lastName: "Sunday",
  isWork: false,
  year: 43,
};
const numberBigint = 123123123n;
const symb = Symbol("Витя");
// 3. Вывести в консоль редактора кода созданные переменные
// 4. Вывести ее тип через оператор typeof и функцию typeof
console.log(num);
console.log(typeof num);
console.log(password);
console.log(typeof password);
console.log(isOpen);
console.log(typeof isOpen);
console.log(valueNull);
console.log(typeof valueNull);
console.log(valueUndefined);
console.log(typeof valueUndefined);
console.log(card);
console.log(typeof card);
console.log(numberBigint);
console.log(typeof numberBigint);
console.log(symb);
console.log(typeof symb);

// 5. Попробовать изменить переменную объявленную через const
// password = "alex";

// 6. Попробовать изменить переменную с типом object
// объявленную через const
// card = {
//   firstName: "Brad",
//   lastName: "Pit",
//   year: 60,
// };
// 7. Попробовать изменить переменную с типом object
// объявленную через let

let woker = {
  userName: "Bob",
};
console.log(woker);
woker = {
  userName: "Velera",
};
console.log(woker);
// 8. Попробовать изменить переменную с типом object
// объявленную через var
var adress = {
  street: "Long",
};
console.log(adress);
adress = {
  street: "Big-bong",
};
console.log(adress);
// 9. Установить редактор кода VS Code
// 10. Ознакомиться с системой контроля версий GitHub (завести
// аккаунт)
