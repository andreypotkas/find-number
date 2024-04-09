export function findMissingNumberWithSet(arr) {
  const set = new Set(arr);

  // Находим минимальное и максимальное значение в массиве
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Проверяем последовательно каждое число в диапазоне
  for (let i = min; i <= max; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  // Если нет пропущенных чисел в заданном диапазоне
  return null;
}

// Работает с повторяющимися значениями
