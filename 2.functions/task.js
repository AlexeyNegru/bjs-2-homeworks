function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0;i<arr.length;i++) {
    if (arr[i] < min){
      min = arr[i]; 
    }
    else if (arr[i] > max) {
      max = arr[i]; 
    }
      sum += arr[i];
    }
  let avg = +(sum / arr.length).toFixed(2);
  if (min === max) {
      avg = +(sum / arr.length).toFixed(2);
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumEOddElement = 0;
  for (let i = 0;i<arr.length;i++) {
  if (arr[i] % 2) {
    sumEOddElement += arr[i];
  } else {
    sumEvenElement += arr[i];
  }
  }
  return sumEvenElement - sumEOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0;i < arr.length;i++) {
      if (!(arr[i] % 2)) {
        sumEvenElement += arr[i];
        countEvenElement++
      } 
    }
  return  sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  if (arrOfArr.length === 0) {
    return 0;
  }
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length;i++) {
  const result = func(...arrOfArr[i]);
  if (result > maxWorkerResult) {
  maxWorkerResult = result;
  }
  }
  return maxWorkerResult;
}
