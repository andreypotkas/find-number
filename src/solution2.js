export function findMissingNumberWithSum(arr) {
  // Находим минимальное и максимальное значение в массиве
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const n = max - min + 1;
  const expectedSum = (n * (min + max)) / 2;

  // Вычисляем фактическую сумму чисел в массиве
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);

  // Возвращаем разницу между ожидаемой суммой и фактической если есть
  const difference = expectedSum - actualSum;

  return difference ? difference : null;
}
