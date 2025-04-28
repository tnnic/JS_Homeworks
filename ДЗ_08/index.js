// 1. Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate
// (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет
// выводить зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных дней
// days. И метод getFullName() - имя и фамиля работника.
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

// 2. Напишите новый класс Boss, этот класс наследуется от класса
// Worker и прошлого задания. Появляется новые свойство:
// workers - количество работников. И зарплата считается по
// другому: произведение (умножение) ставки rate на количество
// отработанных дней и на количество работников.

class Boss extends Worker {
  constructor(name, surname, rate, days, workers) {
    super(name, surname, rate, days);
    this.workers = workers;
  }
  getSalary() {
    return this.rate * this.days * this.workers;
  }
}

// 3. Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для свойства days
// сделайте и методы-сеттеры и методы-геттеры для их чтения.
class WorkerV2 {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this._rate = rate;
    this._days = days;
  }
  get rate() {
    return this._rate;
  }

  set rate(newRate) {
    if (newRate >= 0) {
      this._rate = newRate;
    } else {
      console.error("Должно быть положительным числом");
    }
  }

  get days() {
    return this._days;
  }

  set days(value) {
    if (value >= 0 && Number.isInteger(value)) {
      this._days = value;
    } else {
      console.error("Ошибка");
    }
  }
  getSalary() {
    return this.rate * this.days;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

// 4. Реализуйте класс MyString, который будет иметь следующие
// методы: метод reverse(), который параметром принимает
// строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же
// строку, сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву
// каждого слова этой строки.
class MyString {
  reverse(str) {
    return str.split("").reverse().join("");
  }
  ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  ucWords(str){
    return str.slice(" ").map(world => world.charAt(0).toUpperCase() + world.slice(1)).join(" ")
  }
}
// 5. Реализуйте класс Validator, который будет проверять строки. К
// примеру, у него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или
// нет. Если является - возвращает true, если не является - то
// false. Кроме того, класс будет иметь следующие методы: метод
// isDomain для проверки домена, метод isDate для проверки
// даты и метод isPhone для проверки телефона.
class Validator {
  // Метод для проверки email
  isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Метод для проверки домена
  isDomain(domain) {
    const domainRegex =
      /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    return domainRegex.test(domain);
  }

  // Метод для проверки даты
  isDate(date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  }

  // Метод для проверки телефона
  isPhone(phone) {
    const phoneRegex =
      /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phoneRegex.test(phone);
  }
}
// Пример использования:
const validator = new Validator();
console.log(validator.isEmail("test@example.com")); // true
console.log(validator.isDomain("example.com"));     // true
console.log(validator.isDate("2023-10-05"));        // true
console.log(validator.isPhone("+1-800-555-5555"));  // true