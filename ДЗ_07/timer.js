function timer(start, end) {
  let current = start;

  const intervalId = setInterval(() => {
    console.log(current);
    if (current <= end) {
      clearInterval(intervalId);
      console.log("Таймер завершил работу.");
    }
    current--;
  }, 1000);
}

timer(10, 0); // Счёт от 10 до 0
