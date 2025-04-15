// 241. Обратный отсчёт

function createCountdown(n) {
  if (Number.isInteger(n) === false || n <= 0) {
    n = 0;
  }

  n += 1;

  return function () {
    n === 0 ? (n = 0) : (n -= 1);
    return n;
  };
}
