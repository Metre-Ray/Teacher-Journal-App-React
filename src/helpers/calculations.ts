export function calcAverage(arr: (string | number)[]): number {
  let divisor: number = arr.length;
  return (arr.reduce((acc, el) => {
    const num: number = Number(el);
    if (Number.isNaN(num) || el === '') {
      divisor -= 1;
      return acc;
    }
    (acc as number) += num;
    return acc;
  },                 0) as number) / divisor;
}

export function calcRoundedAverage(arr) {
  return Math.round(calcAverage(arr) * 100) / 100;
}
