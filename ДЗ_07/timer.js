// function timer(start, end) {
//   let current = start;

//   const intervalId = setInterval(() => {
//     console.log(current);
//     if (current <= end) {
//       clearInterval(intervalId);
//       console.log("Таймер завершил работу.");
//     }
//     current--;
//   }, 1000);
// }

// timer(10, 0); // Счёт от 10 до 0
function createTimer(start, end) {
  let current = start;

  // ЯВНОЕ ЗАМЫКАНИЕ: возвращается функция, которая хранит current и end
  return function () {
    const intervalId = setInterval(() => {
      console.log(current);
      if (current <= end) {
        clearInterval(intervalId);
        console.log("Таймер завершил работу.");
      }
      current--;
    }, 1000);
  };
}

const startTimer = createTimer(10, 5); // Возвращает функцию-таймер
startTimer(); // Запускаем
