"use strict";

const merge = function (numbers, low, mid, high) {
  const a = numbers.slice(low, mid + 1);
  const b = numbers.slice(mid + 1, high + 1);
  let i = 0;
  let j = 0;
  let k = low;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      numbers[k++] = a[i++];
    } else {
      numbers[k++] = b[j++];
    }
  }

  if (j < b.length) {
    while (j < b.length) {
      numbers[k++] = b[j++];
    }
  }

  if (i < a.length) {
    while (i < a.length) {
      numbers[k++] = a[i++];
    }
  }
};

const mergeSort = function (numbers, low, high) {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSort(numbers, low, mid);
    mergeSort(numbers, mid + 1, high);
    merge(numbers, low, mid, high);
  }
};

const numbers = [4, 8, 1, 7, 3, 2, 6, 5];

mergeSort(numbers, 0, numbers.length - 1);

console.log(numbers);
