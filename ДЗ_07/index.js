// 1. Что выведет функция?
function f() {
  alert(this);
}
let user = {
  g: f.bind(null),
};
user.g();
//null

// 2. Можем ли мы изменить this дополнительным связыванием?
function f() {
  alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();
//Новая привязка игнорируется ,так как bind создает неизменяемую привязку this.

// 3. В свойство функции записано значение. Изменится ли оно
// после применения bind?
function sayHi() {
  alert(this.name);
}

sayHi.test = 5;
let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test);
// Метод bind создаёт новую функцию, которая является "обёрткой" исходной функции.
// Однако эта новая функция не наследует свойства исходной функции (например, sayHi.test).
// Поэтому попытка доступа к bound.test вернёт undefined.

// 4. Вызов askPassword() в приведённом ниже коде должен
// проверить пароль и затем вызвать user.loginOk/loginFail в
// зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}
let user1 = {
  name: "Вася",
  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};
askPassword(user1.loginOk, user1.loginFail);
// Когда мы передаём user.loginOk и user.loginFail в askPassword, они теряют контекст (this), потому что функции вызываются как обычные функции, а не как методы объекта user.
// Внутри loginOk и loginFail значение this становится undefined (или глобальный объект в старых браузерах), что вызывает ошибку.

// 5. Объект user был изменён. Теперь вместо двух функций
// loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде
// ниже, чтобы она могла вызывать функцию user.login(true) как
// ok и функцию user.login(false) как fail?
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}
let user2 = {
  name: "John",
  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};
askPassword(user.login.bind(user, true), user.login.bind(user, false));

// Нам нужно передать функции ok и fail такие обёртки, которые вызывают user.login с аргументами true и false.
// Для этого можно использовать .bind.

// 6. Напишите в указанном месте конструкцию с методом bind()
// так, чтобы this внутри функции func всегда указывал на value.
// из переменной elem.
const elem = { value: "Привет" };
function func(surname, name) {
  alert(this.value + ", " + surname + " " + name);
}
//Тут напишите конструкцию с bind()
const boundFunc = func.bind(elem);
boundFunc("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
boundFunc("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

// 7. Есть функция которая складывает три числа.Выполните
// каррирование.
const sum = (a, b, c) => a + b + c;
function currySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// 8. Реализовать таймер-функцию используя замыкания. Функция
// принимает два аргумента начальное значение и значение
// завершения. Таймер движется назад.При достижении точки
// завершения в консоль выводится значение таймера и
// сообщение о завершении работы таймера.
function timer(start, end) {
  let current = start;

  const intervalId = setInterval(() => {
    console.log(current);
    if (current <= end) {
      clearInterval(intervalId);
      console.log('Таймер завершил работу.');
    }
    current--;
  }, 1000);
}

timer(10, 0); // Счёт от 10 до 0